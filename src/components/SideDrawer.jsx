import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import SideBarDropDown from "./SideBarDropDown";
const SideDrawer = () => {
  const [clicked, setClicked] = useState(false);
  const [dropdownStates, setDropdownStates] = useState({
    Doctors: false,
    Patients: false,
    Appointments: false,
    Payment: false,
  });
  const navigate = useNavigate();
  const location = useLocation();
  const currentUrl = location.pathname;
  const handleDropDownClick = (dropdown) => {
    setDropdownStates((prevStates) => ({
      ...prevStates,
      [dropdown]: !prevStates[dropdown],
    }));
  };

  return (
    <div
      className={`w-full ${
        clicked && "h-[934px] overflow-y-scroll no-scroll"
      } h-[900px] overflow-y-scroll no-scroll   bg-gradient-to-r from-[#b24591] via-[#CA5B95] to-[#E17097]`}
    >
      <p className="text-lg font-semibold text-white px-3 py-2 cursor-pointer">
        Dashboard
      </p>
      <SideBarDropDown
        Route={"Doctors"}
        handleDropDownClick={() => handleDropDownClick("Doctors")}
        clicked={dropdownStates.Doctors}
        subRoute1={"Add Doctor"}
        subRoute2={"All Doctors"}
        subRoute3={"Doctors Details"}
        subRoute4={"Edit Doctor"}
      />
      <SideBarDropDown
        Route={"Patients"}
        handleDropDownClick={() => handleDropDownClick("Patients")}
        clicked={dropdownStates.Patients}
        subRoute1={"Add Patient"}
        subRoute2={"All Patients"}
        subRoute3={"Patient Details"}
        subRoute4={"Edit Patient"}
      />
      <SideBarDropDown
        Route={"Appointments"}
        handleDropDownClick={() => handleDropDownClick("Appointments")}
        clicked={dropdownStates.Appointments}
        subRoute1={"Add Appointment"}
        subRoute2={"All Appointments"}
        subRoute3={"Appointment Detail"}
        subRoute4={"Edit Appointment"}
      />
      <SideBarDropDown
        Route={"Payment"}
        handleDropDownClick={() => handleDropDownClick("Payment")}
        clicked={dropdownStates.Payment}
        subRoute1={"Add Payment"}
        subRoute2={"All Payments"}
        subRoute3={"Payment Invoice"}
      />
    </div>
  );
};

export default SideDrawer;
