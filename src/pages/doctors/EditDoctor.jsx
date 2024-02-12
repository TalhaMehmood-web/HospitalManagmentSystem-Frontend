import React from "react";
import { useParams } from "react-router-dom";
const EditDoctor = () => {
  const { doctorId } = useParams();
  // console.log(doctorId);
  return <div>{doctorId}</div>;
};

export default EditDoctor;
