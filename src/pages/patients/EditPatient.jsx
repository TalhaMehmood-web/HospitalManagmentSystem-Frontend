import React from "react";
import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import FormComponent from "../../miscellaneous/FormComponent";
const EditPatient = () => {
  const { patientId } = useParams();
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData("all-patients");
  const patient = data?.data?.find((item) => item._id === patientId);

  const patientFields = [
    {
      label: "Patient Name",
      placeholder: "Patient Name",
      type: "text",
      name: "fullname",
      value: patient?.fullname || "",
    },
    {
      label: "Date of Birth",
      placeholder: "Date of Birth",
      type: "date",
      name: "dateOfBirth",
      value: patient?.dateOfBirth || "",
    },
    {
      label: "Age",
      placeholder: "Age",
      type: "text",
      name: "age",
      value: patient?.age || "",
    },
    {
      label: "Phone Number",
      placeholder: "Phone Number",
      type: "text",
      name: "phone",
      value: patient?.phone || "",
    },
    {
      label: "Email",
      placeholder: "Email",
      type: "text",
      name: "email",
      value: patient?.email || "",
    },
    {
      label: "Gender",
      placeholder: "Gender",
      type: "select",
      name: "gender",
      options: ["Male", "Female", "Others"],
      value: patient?.gender || "",
    },
    {
      label: "Address",
      placeholder: "Address",
      type: "textarea",
      name: "address",
      value: patient?.address || "",
    },
    {
      label: "Picture",
      placeholder: "Picture",
      type: "file",
      name: "picture",
      value: "",
    },
  ];
  const handleSubmit = () => {};
  return (
    <div>
      <FormComponent
        heading={"Edit Patient"}
        fields={patientFields}
        onSubmit={handleSubmit}
        buttonText={"Update"}
      />
    </div>
  );
};

export default EditPatient;
