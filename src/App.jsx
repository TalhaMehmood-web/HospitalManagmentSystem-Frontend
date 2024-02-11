import "./App.css";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import AddDoctor from "./pages/AddDoctor";
function App() {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<Layout />}>
          <Route index={true} element={<DashBoard />} />
          <Route path="add-doctor" element={<AddDoctor />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
