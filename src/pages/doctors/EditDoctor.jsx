import React from "react";
import { useParams } from "react-router-dom";
import { useQueryClient, useMutation } from "react-query";
import axios from "axios";
import { toast } from "react-toastify";
import FormComponent from "../../miscellaneous/FormComponent";
const EditDoctor = () => {
  const { doctorId } = useParams();
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData("all-doctors");

  const doctor = data?.data?.find((item) => {
    return item._id === doctorId;
  });
  const doctorFields = [
    {
      label: "Doctor Name",
      placeholder: "Doctor Name",
      type: "text",
      name: "fullname",
      value: doctor?.fullname || "",
    },
    {
      label: "Date of Birth",
      placeholder: "Date of Birth",
      type: "date",
      name: "dateOfBirth",
      value: doctor?.dateOfBirth || "",
    },
    {
      label: "Specialization",
      placeholder: "Specialization",
      type: "text",
      name: "specialization",
      value: doctor?.specialization || "",
    },
    {
      label: "Experience",
      placeholder: "Experience",
      type: "text",
      name: "experience",
      value: doctor?.experience || "",
    },
    {
      label: "Age",
      placeholder: "Age",
      type: "text",
      name: "age",
      value: doctor?.age || "",
    },
    {
      label: "Phone Number",
      placeholder: "Phone Number",
      type: "text",
      name: "phone",
      value: doctor?.phone || "",
    },
    {
      label: "Email",
      placeholder: "Email",
      type: "text",
      name: "email",
      value: doctor?.email || "",
    },
    {
      label: "Gender",
      placeholder: "Gender",
      type: "select",
      name: "gender",
      options: ["Male", "Female", "Others"],
      value: doctor?.gender || "",
    },
    {
      label: "Doctor Details",
      placeholder: "Doctor Details",
      type: "textarea",
      name: "detail",
      value: doctor?.detail || "",
    },
    {
      label: "Address",
      placeholder: "Address",
      type: "textarea",
      name: "address",
      value: doctor?.address || "",
    },
    {
      label: "Picture",
      placeholder: "Picture",
      type: "file",
      name: "picture",
      value: "",
    },
  ];
  const addDoctorMutation = useMutation(
    async (doctorData) => {
      try {
        const formData = new FormData();
        for (const key in doctorData) {
          formData.append(key, doctorData[key]);
        }
        if (!doctorId) {
          toast.error(`Nothing To Update`, {
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
        const { data } = await axios.put(
          `http://localhost:5000/api/v1/doctor/edit-doctor/${doctorId}`,
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
        if (doctorId !== undefined) {
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
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("all-doctors", { refetchActive: true });
      },
    }
  );

  const handleSubmit = (doctorData) => {
    addDoctorMutation.mutate(doctorData);
  };

  return (
    <div>
      <FormComponent
        heading={"Edit Doctor"}
        fields={doctorFields}
        onSubmit={handleSubmit}
        buttonText={"Update"}
      />
    </div>
  );
};

export default EditDoctor;
