import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SideBarDropDown from "./SideBarDropDown";

const SideDrawer = () => {
  const [clicked, setClicked] = useState(false);
  const [dropdownStates, setDropdownStates] = useState({
    Doctors: false,
    Patients: false,
    Appointments: false,
    Payment: false,
    RoomAllotment: false,
  });
  const navigate = useNavigate();
  const location = useLocation();
  const handleDropDownClick = (dropdown) => {
    setDropdownStates((prevStates) => ({
      ...prevStates,
      [dropdown]: !prevStates[dropdown],
    }));
  };

  const routeHandlers = {
    Doctors: [
      () => navigate("/admin/add-doctor"),
      () => navigate("/admin/all-doctors"),
      () => navigate("/admin/doctor-details"),
      () => navigate("/admin/edit-doctor"),
    ],
    Patients: [
      () => navigate("/admin/add-patient"),
      () => navigate("/admin/all-patients"),
      () => navigate("/admin/patient-details"),
      () => navigate("/admin/edit-patient"),
    ],
    Appointments: [
      () => navigate("/admin/add-appointment"),
      () => navigate("/admin/all-appointments"),
      () => navigate("/admin/appointment-details"),
      () => navigate("/admin/edit-appointment"),
    ],
    Payment: [
      () => navigate("/admin/add-payment"),
      () => navigate("/admin/all-payments"),
      () => navigate("/admin/payment-invoice"),
    ],
    RoomAllotment: [
      () => navigate("/admin/add-room-allotment"),
      () => navigate("/admin/all-room-allotments"),
      () => navigate("/admin/edit-room-allotment"),
    ],
  };
  const subRoutesMapping = {
    Doctors: ["Add Doctor", "All Doctors", "Doctor Details", "Edit Doctor"],
    Patients: [
      "Add Patient",
      "All Patients",
      "Patient Details",
      "Edit Patient",
    ],
    Appointments: [
      "Add Appointment",
      "All Appointments",
      "Appointment Details",
      "Edit Appointment",
    ],
    Payment: ["Add Payment", "All Payments", "Payment Invoice"],
    RoomAllotment: ["Add Room Allotment", "All Rooms", "Edit Room Allotment"],
  };

  const isActive = (route) => location.pathname.startsWith(`/admin${route}`);
  return (
    <div
      className={`w-full ${
        clicked && "h-[900px] overflow-y-scroll no-scroll"
      } h-[900px] overflow-y-scroll no-scroll bg-gradient-to-r from-[#b24591] via-[#CA5B95] to-[#E17097]`}
    >
      <img
        className="px-3 py-2"
        src="https://www.konnectplugins.com/proclinic/Vertical/images/logo.png"
        alt=""
      />
      <p
        onClick={() => navigate("/admin")}
        className="text-lg font-semibold text-white px-3 py-2 cursor-pointer"
      >
        Dashboard
      </p>
      {Object.entries(routeHandlers).map(([route, handlers]) => {
        return (
          <SideBarDropDown
            key={route}
            height={`${
              route === "Payment" || route === "RoomAllotment"
                ? "h-[200px]"
                : "h-[252px]"
            }`}
            Route={route}
            handleDropDownClick={() => handleDropDownClick(route)}
            clicked={dropdownStates[route]}
            subRoutes={subRoutesMapping[route]}
            routeHandlers={handlers}
            active={isActive(route)}
          />
        );
      })}
    </div>
  );
};

export default SideDrawer;
