import React from "react";

const DashboardCard = ({ title, count }) => {
    return (
        <div className="bg-white shadow-md p-4 rounded">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-2xl">{count}</p>
        </div>
    );
};

export default DashboardCard;
