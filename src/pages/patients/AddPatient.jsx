import React from "react";
import FormComponent from "../../miscellaneous/FormComponent";
const AddPatients = () => {
  const patientFields = [
    {
      label: "Patient Name",
      placeholder: "Patient Name",
      type: "text",
      name: "fullname",
    },
    {
      label: "Date of Birth",
      placeholder: "Date of Birth",
      type: "date",
      name: "dateOfBirth",
    },
    { label: "Age", placeholder: "Age", type: "text", name: "age" },

    {
      label: "Phone Number",
      placeholder: "Phone Number",
      type: "text",
      name: "phone",
    },
    { label: "Email", placeholder: "Email", type: "text", name: "email" },
    {
      label: "Gender",
      placeholder: "Gender",
      type: "select",
      name: "gender",
      options: ["Male", "Female", "Others"],
    },
    {
      label: "Address",
      placeholder: "Address",
      type: "textarea",
      name: "address",
    },
    { label: "Picture", placeholder: "Picture", type: "file", name: "picture" },
  ];
  const handleSubmit = () => {};
  return (
    <div>
      <FormComponent
        fields={patientFields}
        onSubmit={handleSubmit}
        heading={"Add Patient"}
      />
    </div>
  );
};

export default AddPatients;
