import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const router = useRouter();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        try {
            // Call backend API to register
            const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/register`, { name, email, password });

            setSuccess("Registration successful! Redirecting to login...");
            
            // Redirect to login after 2 seconds
            setTimeout(() => router.push("/"), 2000);
        } catch (err) {
            setError(err.response?.data?.message || "Registration failed. Try again.");
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Register</h1>

            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}

            <form onSubmit={handleRegister} className="mt-6 p-6 bg-white shadow-md rounded-md w-80">
                <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full p-2 border my-2" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                />

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
                    Register
                </button>

                <p className="mt-2">
                    Already have an account? 
                    <a href="/" className="text-blue-500"> Login</a>
                </p>
            </form>
        </div>
    );
}
