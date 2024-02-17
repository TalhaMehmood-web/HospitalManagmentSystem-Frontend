import React from "react";
import { useParams } from "react-router-dom";
import { useQueryClient, useMutation } from "react-query";
import axios from "axios";
import { toast } from "react-toastify";
import FormComponent from "../../miscellaneous/FormComponent";
const EditAppointment = () => {
  const { appointmentId } = useParams();
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData("all-appointments");

  const appointment = data?.data?.find((item) => {
    return item._id === appointmentId;
  });
  const appointmentFields = [
    {
      label: "Patient Id",
      placeholder: "Patient Id",
      type: "text",
      name: "patientId",
      value: appointment?.patientId || "",
    },
    {
      label: "Department",
      placeholder: "Department",
      type: "text",
      name: "department",
      value: appointment?.department || "",
    },
    {
      label: "Doctor Name",
      placeholder: "Doctor Name",
      type: "text",
      name: "doctorName",
      value: appointment?.doctorName || "",
    },
    {
      label: "Appointment Date",
      placeholder: "Appointment Date",
      type: "date",
      name: "appointmentDate",
      value: appointment?.appointmentDate || "",
    },
    {
      label: "Time Slot",
      placeholder: "Time Slot",
      type: "select",
      name: "timeSlot",
      options: [
        "10AM-11AM",
        "11AM-12AM",
        "12AM-01PM",
        "01PM-02PM",
        "02PM-03PM",
        "03PM-04PM",
        "04PM-05PM",
        "05PM-06PM",
        "06PM-07PM",
        "07PM-08PM",
        "08PM-09PM",
      ],
      value: appointment?.timeSlot || "",
    },
    {
      label: "Token Number",
      placeholder: "Token Number",
      type: "text",
      name: "tokenNumber",
      value: appointment?.tokenNumber || "",
    },
    {
      label: "Problem Title",
      placeholder: "Problem Title",
      type: "text",
      name: "problemTitle",
      value: appointment?.problemTitle || "",
    },
    {
      label: "Appointment Status",
      type: "select",
      options: ["Active", "Pending", "Completed"],
      name: "appointmentStatus",
      value: appointment?.appointmentStatus || "",
    },
    {
      label: "Problem Description",
      placeholder: "Problem Description",
      type: "textarea",
      name: "problemDescription",
      value: appointment?.problemDescription || "",
    },
  ];
  const addAppointmentMutation = useMutation(
    async (appointmentData) => {
      try {
        if (!appointmentId) {
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
          `http://localhost:5000/api/v1/appointment/edit-appointment/${appointmentId}`,
          appointmentData
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
        if (appointmentId !== undefined) {
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
        queryClient.invalidateQueries("all-appointments", {
          refetchActive: true,
        });
      },
    }
  );

  const handleSubmit = (appointmentData) => {
    addAppointmentMutation.mutate(appointmentData);
  };
  return (
    <div>
      <FormComponent
        heading={"Edit Appointment"}
        fields={appointmentFields}
        onSubmit={handleSubmit}
        buttonText={"Update"}
      />
    </div>
  );
};

export default EditAppointment;
