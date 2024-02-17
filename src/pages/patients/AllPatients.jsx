import React, { useState } from "react";
import DataTable from "../../miscellaneous/DataTable";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
const AllPatients = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState("");
  const patientColumns = [
    { label: "Select", field: "" },
    { label: "Patient ID", field: "patientId" },
    { label: "Patient Name", field: "fullname" },
    { label: "Patient Picture", field: "picture" },
    { label: "Age", field: "age" },
    { label: "Phone", field: "phone" },
    { label: "Date Of Birth", field: "dateOfBirth" },
  ];
  const navigate = useNavigate();
  const fetchPatients = async () => {
    try {
      return await axios.get(
        `http://localhost:5000/api/v1/patient/all-patients`
      );
    } catch (error) {
      console.log(error);
    }
  };
  const { data } = useQuery("all-patients", fetchPatients, {
    initialData: () => {
      return fetchPatients();
    },
  });
  const handleCheckboxChange = (patientId) => {
    setSelectedPatient((prevSelected) => {
      const newSelected = prevSelected === patientId ? null : patientId;
      return newSelected;
    });
  };
  const handleEdit = () => {
    if (selectedPatient !== null) {
      navigate(`/admin/edit-patient/${selectedPatient}`);
    }
  };
  const handleDelete = () => {};
  const handleDetail = () => {};
  return (
    <div>
      <DataTable
        title={"Patients List"}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleDetail={handleDetail}
        columns={patientColumns}
        data={data}
        selectedData={selectedPatient}
        handleCheckboxChange={handleCheckboxChange}
      />
    </div>
  );
};

export default AllPatients;
