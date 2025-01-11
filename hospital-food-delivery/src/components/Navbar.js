import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
return (
    <nav className="bg-blue-500 text-white p-4">
    <ul className="flex justify-between">
        <li>
        <Link to="/" className="font-bold">Hospital Food Management</Link>
        </li>
        <li>
        <Link to="/manager" className="px-3">Manager</Link>
        <Link to="/pantry" className="px-3">Pantry</Link>
        <Link to="/delivery" className="px-3">Delivery</Link>
        </li>
    </ul>
    </nav>
);
};

export default Navbar;
