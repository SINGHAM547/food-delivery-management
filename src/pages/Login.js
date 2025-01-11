import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevents page reload
        setError(""); // Clear previous errors

        // Basic validation
        if (!email || !password) {
            setError("Please enter both email and password.");
            return;
        }

        setLoading(true); // Show loading indicator

        try {
            // Simulate an API call (replace with your actual API call)
            const fakeApiResponse = await new Promise((resolve) =>
                setTimeout(() => {
                    if (
                        email === "manager@example.com" && password === "manager123"
                    ) {
                        resolve({ success: true, role: "manager" });
                    } else if (
                        email === "pantry@example.com" && password === "pantry123"
                    ) {
                        resolve({ success: true, role: "pantry" });
                    } else if (
                        email === "delivery@example.com" && password === "delivery123"
                    ) {
                        resolve({ success: true, role: "delivery" });
                    } else {
                        resolve({ success: false });
                    }
                }, 1000)
            );

            if (fakeApiResponse.success) {
                alert("Login successful!");

                // Navigate to the appropriate dashboard based on role
                if (fakeApiResponse.role === "manager") navigate("/manager");
                if (fakeApiResponse.role === "pantry") navigate("/pantry");
                if (fakeApiResponse.role === "delivery") navigate("/delivery");
            } else {
                setError("Invalid email or password.");
            }
        } catch (error) {
            console.error("Login error:", error);
            setError("Something went wrong. Please try again.");
        }

        setLoading(false); // Hide loading indicator
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-80">
                <h2 className="text-xl font-bold mb-4">Login</h2>
                {error && (
                    <p className="text-red-500 text-sm mb-4">{error}</p>
                )}
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 border mb-4"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-2 border mb-4"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="submit"
                        className={`bg-blue-500 text-white p-2 rounded w-full ${
                            loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
                        }`}
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
