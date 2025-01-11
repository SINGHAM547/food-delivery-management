import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // Ensure correct import from react-router-dom v6
import Login from "./pages/Login";
import ManagerDashboard from "./pages/ManagerDashboard";
import PantryDashboard from "./pages/PantryDashboard";
import DeliveryDashboard from "./pages/DeliveryDashboard";
import Navbar from "./components/Navbar";

function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/manager" element={<ManagerDashboard />} />
        <Route path="/pantry" element={<PantryDashboard />} />
        <Route path="/delivery" element={<DeliveryDashboard />} />
    </Routes>
    </Router>
);
}

export default App;
