import React, { useState, useEffect } from "react";
import DashboardCard from "../components/DashboardCard";

const ManagerDashboard = () => {
    const [data, setData] = useState({
        patients: 0,
        mealsDelivered: 0,
        pendingTasks: 0,
    });

    // Simulated data fetching
    useEffect(() => {
        const fetchData = async () => {
            // Simulate an API call
            const fakeApiResponse = await new Promise((resolve) =>
                setTimeout(
                    () =>
                        resolve({
                            patients: 25,
                            mealsDelivered: 120,
                            pendingTasks: 3,
                        }),
                    1000
                )
            );
            setData(fakeApiResponse);
        };

        fetchData();
    }, []);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Manager Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <DashboardCard title="Patients" count={data.patients} />
                <DashboardCard title="Meals Delivered" count={data.mealsDelivered} />
                <DashboardCard title="Pending Tasks" count={data.pendingTasks} />
            </div>
            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
                <div className="flex space-x-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Generate Report
                    </button>
                    <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                        Assign Tasks
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ManagerDashboard;
