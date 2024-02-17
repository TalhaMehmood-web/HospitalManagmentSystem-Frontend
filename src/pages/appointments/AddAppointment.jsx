import React from "react";
import FormComponent from "../../miscellaneous/FormComponent";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import axios from "axios";
const AddAppointment = () => {
  const appointmentFields = [
    {
      label: "Patient Id",
      placeholder: "Patient Id",
      type: "text",
      name: "patientId",
    },
    {
      label: "Department",
      placeholder: "Department",
      type: "text",
      name: "department",
    },
    {
      label: "Doctor Name",
      placeholder: "Doctor Name",
      type: "text",
      name: "doctorName",
    },
    {
      label: "Appointment Date",
      placeholder: "Appointment Date",
      type: "date",
      name: "appointmentDate",
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
    },
    {
      label: "Token Number",
      placeholder: "Token Number",
      type: "text",
      name: "tokenNumber",
    },
    {
      label: "Problem Title",
      placeholder: "Problem Title",
      type: "text",
      name: "problemTitle",
    },
    {
      label: "Appointment Status",
      type: "select",
      options: ["Pending", "Active", "Completed"],
      name: "appointmentStatus",
    },
    {
      label: "Problem Description",
      placeholder: "Problem Description",
      type: "textarea",
      name: "problemDescription",
    },
  ];
  const addAppointmentMutation = useMutation(async (appointmentData) => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/appointment/add-appointment",
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

  const handleSubmit = (appointmentData) => {
    addAppointmentMutation.mutate(appointmentData);
  };
  return (
    <div>
      <FormComponent
        fields={appointmentFields}
        onSubmit={handleSubmit}
        heading={"Add Appointment"}
      />
    </div>
  );
};

export default AddAppointment;
