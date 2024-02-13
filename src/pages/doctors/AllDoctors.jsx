import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DataTable from "../../miscellaneous/DataTable";
const AllDoctors = () => {
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const doctorColumns = [
    { label: "Select", field: "" },
    { label: "Doctor ID", field: "_id" },
    { label: "Doctor Name", field: "fullname" },
    { label: "Doctor Picture", field: "picture" },
    { label: "Experience", field: "experience" },
    { label: "Phone", field: "phone" },
    { label: "Specialization", field: "specialization" },
    { label: "Age", field: "age" },
  ];
  const fetchDoctors = async () => {
    return await axios.get(
      `http://localhost:5000/api/v1/doctor/all-doctors?limit=${limit}&search=${search}`
    );
  };
  const { isLoading, data, isError, error } = useQuery(
    "all-doctors",
    fetchDoctors,
    {
      initialData: () => {
        return fetchDoctors();
      },
    }
  );
  const handleCheckboxChange = (doctorId) => {
    setSelectedDoctor((prevSelected) => {
      const newSelected = prevSelected === doctorId ? null : doctorId;
      return newSelected;
    });
  };
  const deleteDoctor = async (doctorId) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:5000/api/v1/doctor/delete-doctor/${doctorId}`
      );
      if (data) {
        toast.error(`${data.message}`, {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
      setSelectedDoctor(null);
    } catch (error) {
      console.log(error);
    }
  };
  const { mutate } = useMutation(deleteDoctor, {
    onSuccess: () => {
      queryClient.invalidateQueries("all-doctors");
    },
  });
  const handleDelete = () => {
    if (selectedDoctor === null) {
      toast.error("First Select Document for action", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    mutate(selectedDoctor);
  };

  const handleEdit = () => {
    if (selectedDoctor === null) {
      toast.info("First Select Document for action", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      navigate(`/admin/edit-doctor/${selectedDoctor}`);
    }
  };
  if (isLoading) {
    return <h1>is loading</h1>;
  }

  return (
    <div>
      <div>
        <div className="flex justify-between px-2 py-2 border-b border-b-slate-200 mb-2 ">
          <p className="text-pink-500 text-3xl font-semibold">Doctors List</p>
          <div>
            <button
              onClick={handleDelete}
              className={`bg-red-500 ${
                selectedDoctor === null && "cursor-not-allowed opacity-50"
              }  unselectable mx-2 text-white border border-red-600  rounded-lg text-base font-semibold focus:bg-red-600 hover:bg-red-600 px-2 py-1`}
            >
              Delete
            </button>
            <button
              onClick={handleEdit}
              className={`bg-blue-500 ${
                selectedDoctor === null && "cursor-not-allowed opacity-50"
              } unselectable text-white border border-blue-600 rounded-lg text-base font-semibold focus:bg-blue-600 hover:bg-blue-600 px-3 py-1`}
            >
              Edit
            </button>
          </div>
        </div>
        <div className="flex justify-between py-2 font-semibold">
          <div className="flex items-center ">
            <p>Show</p>
            <select
              onChange={(e) => {
                setLimit(e.target.value);
              }}
              className="h-10 w-[3.6rem] outline-none border-2 border-slate-300 rounded-md cursor-pointer focus:border-2-blue-400  mx-3"
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="75">75</option>
              <option value="100">100</option>
            </select>
            <p>Entries</p>
          </div>
          <div className={`flex items-center`}>
            <label className="mr-2 font-semibold"> Search :</label>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="..."
              className="font-semibold py-2 outline-none px-2 focus:border-blue-400 border border-slate-200 rounded-md   "
            />
          </div>
        </div>
      </div>
      <DataTable
        data={data}
        selectedData={selectedDoctor}
        handleCheckboxChange={handleCheckboxChange}
        columns={doctorColumns}
      />
    </div>
  );
};

export default AllDoctors;
