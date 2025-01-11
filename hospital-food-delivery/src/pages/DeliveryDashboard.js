import React, { useState, useEffect } from "react";
import DashboardCard from "../components/DashboardCard";

const DeliveryDashboard = () => {
    const [data, setData] = useState({
        deliveriesPending: 0,
        deliveriesCompleted: 0,
        deliveryPersonnel: 0,
    });

    // Simulated data fetching
    useEffect(() => {
        const fetchData = async () => {
            // Simulate an API call
            const fakeApiResponse = await new Promise((resolve) =>
                setTimeout(
                    () =>
                        resolve({
                            deliveriesPending: 10,
                            deliveriesCompleted: 150,
                            deliveryPersonnel: 12,
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
            <h1 className="text-3xl font-bold mb-6">Delivery Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <DashboardCard title="Deliveries Pending" count={data.deliveriesPending} />
                <DashboardCard title="Deliveries Completed" count={data.deliveriesCompleted} />
                <DashboardCard title="Delivery Personnel" count={data.deliveryPersonnel} />
            </div>
            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
                <div className="flex space-x-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Assign Deliveries
                    </button>
                    <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                        Manage Personnel
                    </button>
                    <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                        View Delivery Logs
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeliveryDashboard;
