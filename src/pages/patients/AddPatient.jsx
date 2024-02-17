import React from "react";
import FormComponent from "../../miscellaneous/FormComponent";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import axios from "axios";
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
  const addPatientMutation = useMutation(async (patientData) => {
    try {
      const formData = new FormData();
      for (const key in patientData) {
        formData.append(key, patientData[key]);
      }

      const { data } = await axios.post(
        "http://localhost:5000/api/v1/patient/add-patient",
        formData
      );
      if (data) {
        toast.success(`${data?.message}`, {
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
  });

  const handleSubmit = (patientData) => {
    addPatientMutation.mutate(patientData);
  };
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
