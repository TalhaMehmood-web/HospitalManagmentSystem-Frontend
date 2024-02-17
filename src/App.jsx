import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import AddDoctor from "./pages/doctors/AddDoctor";
import AllDoctors from "./pages/doctors/AllDoctors";
import DoctorsDetail from "./pages/doctors/DoctorsDetail";
import EditDoctor from "./pages/doctors/EditDoctor";
import AddPatients from "./pages/patients/AddPatient";
import AllPatients from "./pages/patients/AllPatients";
import PatientDetails from "./pages/patients/PatientDetails";
import EditPatient from "./pages/patients/EditPatient";
import AddAppointment from "./pages/appointments/AddAppointment";
import AllAppointments from "./pages/appointments/AllAppointments";
import AppointmentDetails from "./pages/appointments/AppointmentDetails";
import EditAppointment from "./pages/appointments/EditAppointment";
import AddPayment from "./pages/payment/AddPayment";
import AllPayments from "./pages/payment/AllPayments";
import PaymentInvoice from "./pages/payment/PaymentInvoice";
import AddRoomAllotment from "./pages/roomAllotment/AddRoomAllotment";
import AllRooms from "./pages/roomAllotment/AllRooms";
import EditRoomAllotment from "./pages/roomAllotment/EditRoomAllotment";
function App() {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<Layout />}>
          <Route index={true} element={<DashBoard />} />
          <Route path="add-doctor" element={<AddDoctor />} />
          <Route path="doctors-list" element={<AllDoctors />} />
          <Route path="doctor-details/:doctorId?" element={<DoctorsDetail />} />
          <Route path="edit-doctor/:doctorId?" element={<EditDoctor />} />
          <Route path="add-patient" element={<AddPatients />} />
          <Route path="patients-list" element={<AllPatients />} />
          <Route
            path="patient-details/:patientId?"
            element={<PatientDetails />}
          />
          <Route path="edit-patient/:patientId?" element={<EditPatient />} />
          <Route path="add-appointment" element={<AddAppointment />} />
          <Route path="appointments-list" element={<AllAppointments />} />
          <Route
            path="appointment-details/:appointmentId?"
            element={<AppointmentDetails />}
          />
          <Route
            path="edit-appointment/:appointmentId?"
            element={<EditAppointment />}
          />
          <Route path="add-payment" element={<AddPayment />} />
          <Route path="payments-list" element={<AllPayments />} />
          <Route path="payment-invoice" element={<PaymentInvoice />} />
          <Route path="add-room-allotment" element={<AddRoomAllotment />} />
          <Route path="rooms-allotment-list" element={<AllRooms />} />
          <Route path="edit-room-allotment" element={<EditRoomAllotment />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
