import React from "react";
import { useParams } from "react-router-dom";
import DoctorForm from "../../miscellaneous/DoctorForm";
const EditDoctor = () => {
  const { doctorId } = useParams();
  // console.log(doctorId);
  return (
    <div>
      <DoctorForm doctorId={doctorId} />
    </div>
  );
};

export default EditDoctor;
