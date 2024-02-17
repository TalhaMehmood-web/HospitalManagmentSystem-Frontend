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
          position: "top-center",
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
        position: "top-center",
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
        position: "top-center",
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
  const handleDetail = () => {
    if (selectedDoctor === null) {
      toast.info("First Select Document for action", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      navigate(`/admin/doctor-details/${selectedDoctor}`);
    }
  };
  return (
    <DataTable
      title={"Doctor List"}
      data={data}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
      handleDetail={handleDetail}
      limit={limit}
      setLimit={setLimit}
      search={search}
      setSearch={setSearch}
      selectedData={selectedDoctor}
      handleCheckboxChange={handleCheckboxChange}
      columns={doctorColumns}
    />
  );
};

export default AllDoctors;
