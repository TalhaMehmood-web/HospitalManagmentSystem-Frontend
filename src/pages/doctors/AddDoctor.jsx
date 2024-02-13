// AddDoctor.jsx
import React from "react";
import { useMutation } from "react-query";
import FormComponent from "../../miscellaneous/FormComponent";
import axios from "axios";

const AddDoctor = () => {
  const doctorFields = [
    {
      label: "Doctor Name",
      placeholder: "Doctor Name",
      type: "text",
      name: "fullname",
    },
    {
      label: "Date of Birth",
      placeholder: "Date of Birth",
      type: "date",
      name: "dateOfBirth",
    },
    {
      label: "Specialization",
      placeholder: "Specialization",
      type: "text",
      name: "specialization",
    },
    {
      label: "Experience",
      placeholder: "Experience",
      type: "text",
      name: "experience",
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
      label: "Doctor Details",
      placeholder: "Doctor Details",
      type: "textarea",
      name: "detail",
    },
    {
      label: "Address",
      placeholder: "Address",
      type: "textarea",
      name: "address",
    },
    { label: "Picture", placeholder: "Picture", type: "file", name: "picture" },
  ];

  const addDoctorMutation = useMutation(async (doctorData) => {
    const formData = new FormData();
    for (const key in doctorData) {
      formData.append(key, doctorData[key]);
    }

    const { data } = await axios.post(
      "http://localhost:5000/api/v1/doctor/add-doctor",
      formData
    );
    console.log(data);
    return data;
  });

  const handleSubmit = (doctorData) => {
    addDoctorMutation.mutate(doctorData);
  };

  return (
    <div>
      <FormComponent
        fields={doctorFields}
        onSubmit={handleSubmit}
        heading={"Add Doctor"}
      />
    </div>
  );
};

export default AddDoctor;
