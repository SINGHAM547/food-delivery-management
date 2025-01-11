import React, { useState, useEffect } from "react";
import DashboardCard from "../components/DashboardCard";

const PantryDashboard = () => {
    const [data, setData] = useState({
        availableStock: 0,
        mealsPrepared: 0,
        lowStockItems: 0,
    });

    // Simulated data fetching
    useEffect(() => {
        const fetchData = async () => {
            // Simulate an API call
            const fakeApiResponse = await new Promise((resolve) =>
                setTimeout(
                    () =>
                        resolve({
                            availableStock: 500, // Stock in units
                            mealsPrepared: 75,
                            lowStockItems: 3,
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
            <h1 className="text-3xl font-bold mb-6">Pantry Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <DashboardCard title="Available Stock" count={data.availableStock} />
                <DashboardCard title="Meals Prepared" count={data.mealsPrepared} />
                <DashboardCard title="Low Stock Items" count={data.lowStockItems} />
            </div>
            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
                <div className="flex space-x-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Order Supplies
                    </button>
                    <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                        Update Stock
                    </button>
                    <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                        Generate Inventory Report
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PantryDashboard;
