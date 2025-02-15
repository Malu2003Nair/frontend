import { useState } from "react";
import axios from "axios";

export default function Home() {
    // State to store email, password, and error messages
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // Call the backend API for login
            const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login`, { email, password });

            // Store JWT token in localStorage
            localStorage.setItem("token", res.data.token);

            // Redirect to dashboard
            window.location.href = "/dashboard";
        } catch (err) {
            setError("Invalid credentials. Please try again.");
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Welcome to Student Portal</h1>

            {/* Existing Content - Keep your existing structure */}
            <p className="text-gray-600">Manage your profile and applications here.</p>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="mt-6 p-6 bg-white shadow-md rounded-md w-80">
                <h2 className="text-xl font-semibold">Login</h2>
                {error && <p className="text-red-500">{error}</p>}

                <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full p-2 border my-2" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />

                <input 
                    type="password" 
                    placeholder="Password" 
                    className="w-full p-2 border my-2" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />

                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
                    Login
                </button>

                <p className="mt-2">
                    Don't have an account? 
                    <a href="/register" className="text-blue-500"> Register</a>
                </p>
            </form>
        </div>
    );
}
