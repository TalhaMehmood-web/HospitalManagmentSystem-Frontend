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
      () => navigate("/admin/doctors-list"),
      () => navigate("/admin/doctor-details"),
      () => navigate("/admin/edit-doctor"),
    ],
    Patients: [
      () => navigate("/admin/add-patient"),
      () => navigate("/admin/patients-list"),
      () => navigate("/admin/patient-details"),
      () => navigate("/admin/edit-patient"),
    ],
    Appointments: [
      () => navigate("/admin/add-appointment"),
      () => navigate("/admin/appointments-list"),
      () => navigate("/admin/appointment-details"),
      () => navigate("/admin/edit-appointment"),
    ],
    Payment: [
      () => navigate("/admin/add-payment"),
      () => navigate("/admin/payments-list"),
      () => navigate("/admin/payment-invoice"),
    ],
    Allotment: [
      () => navigate("/admin/add-room-allotment"),
      () => navigate("/admin/rooms-allotment-list"),
      () => navigate("/admin/edit-room-allotment"),
    ],
  };
  const subRoutesMapping = {
    Doctors: ["Add Doctor", "Doctors List", "Doctor Details", "Edit Doctor"],
    Patients: [
      "Add Patient",
      "Patients List",
      "Patient Details",
      "Edit Patient",
    ],
    Appointments: [
      "Add Appointment",
      "Appointments List",
      "Appointment Details",
      "Edit Appointment",
    ],
    Payment: ["Add Payment", "Payment List", "Payment Invoice"],
    Allotment: ["Add Room Allotment", "Rooms List", "Edit Room Allotment"],
  };

  const isActive = (route) => location.pathname.startsWith(`/admin${route}`);
  return (
    <div
      className={`w-full ${
        clicked && "h-[900px] overflow-y-scroll no-scroll"
      } h-[900px] overflow-y-scroll no-scroll bg-gradient-to-r from-[#b24591] via-[#CA5B95] to-[#E17097]`}
    >
      <img
        className="px-3 py-2 hidden mlg:block"
        src="https://www.konnectplugins.com/proclinic/Vertical/images/logo.png"
        alt=""
      />
      <div
        onClick={() => navigate("/admin")}
        className="mlg:mt-0 mt-10 text-white px-3 flex items-center"
      >
        <i className="fa-solid fa-house"></i>
        <p className="text-lg hidden mlg:block font-semibold text-white px-3 py-2 cursor-pointer">
          Dashboard
        </p>
      </div>
      {Object.entries(routeHandlers).map(([route, handlers]) => {
        return (
          <SideBarDropDown
            key={route}
            height={`${
              route === "Payment" || route === "Allotment"
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
