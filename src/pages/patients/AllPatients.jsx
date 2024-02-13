import React from "react";
import DataTable from "../../miscellaneous/DataTable";

const AllPatients = () => {
  const patientColumns = [
    { label: "Select", field: "" },
    { label: "Patient ID", field: "_id" },
    { label: "Patient Name", field: "fullname" },
    { label: "Doctor Picture", field: "picture" },
    { label: "Age", field: "age" },
    { label: "Phone", field: "phone" },
    { label: "Date Of Birth", field: "dateOfBirth" },
  ];
  return (
    <div>
      <DataTable columns={patientColumns} />
    </div>
  );
};

export default AllPatients;
