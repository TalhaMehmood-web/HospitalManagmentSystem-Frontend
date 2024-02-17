import React, { useState } from "react";
import DataTable from "../../miscellaneous/DataTable";
import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AllAppointments = () => {
  const appointmentColumns = [
    { label: "Select", field: "" },
    { label: "Appointment ID", field: "appointmentId" },
    { label: "Patient ID", field: "patientId" },
    { label: "Token Number", field: "tokenNumber" },
    { label: "Doctor Name", field: "doctorName" },
    { label: "Problem", field: "problemTitle" },
    { label: "Status", field: "appointmentStatus" },
  ];
  const [limit, setLimit] = useState();
  const [search, setSearch] = useState();
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const fetchAppointments = async () => {
    try {
      return await axios.get(
        `http://localhost:5000/api/v1/appointment/all-appointments`
      );
    } catch (error) {
      console.log(error);
    }
  };
  const { data } = useQuery("all-appointments", fetchAppointments, {
    initialData: () => {
      return fetchAppointments();
    },
  });
  const handleCheckboxChange = (appointmentId) => {
    setSelectedAppointment((prevSelected) => {
      const newSelected = prevSelected === appointmentId ? null : appointmentId;
      return newSelected;
    });
  };
  const deleteAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:5000/api/v1/appointment/delete-appointment/${appointmentId}`
      );
      if (data) {
        toast.error(`${data?.message}`, {
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
      setSelectedAppointment(null);
    } catch (error) {
      toast.error(`${error?.response?.data?.message}`, {
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
  };
  const { mutate } = useMutation(deleteAppointment, {
    onSuccess: () => {
      queryClient.invalidateQueries("all-appointments");
    },
  });
  const handleDelete = () => {
    if (selectedAppointment === null) {
      toast.error("First Select Document for action", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      mutate(selectedAppointment);
    }
  };
  const handleEdit = () => {
    if (selectedAppointment === null) {
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
      navigate(`/admin/edit-appointment/${selectedAppointment}`);
    }
  };
  const handleDetail = () => {
    navigate(`/admin/appointment-details/${selectedAppointment}`);
  };
  return (
    <div>
      <DataTable
        title={"Appointment List"}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleDetail={handleDetail}
        columns={appointmentColumns}
        selectedData={selectedAppointment}
        data={data}
        handleCheckboxChange={handleCheckboxChange}
      />
    </div>
  );
};

export default AllAppointments;
