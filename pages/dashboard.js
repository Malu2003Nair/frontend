import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function Dashboard() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");
    const router = useRouter();

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                router.push("/");
                return;
            }

            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/profile`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setUser(res.data);
            } catch (err) {
                setError("Failed to fetch user data. Please log in again.");
                localStorage.removeItem("token");
                router.push("/");
            }
        };

        fetchUser();
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>

            {error && <p className="text-red-500">{error}</p>}

            {user ? (
                <div className="p-6 bg-white shadow-md rounded-md w-80">
                    <h2 className="text-xl font-semibold">Welcome, {user.name}</h2>
                    <p>Email: {user.email}</p>
                    <p>Enrolled Course: {user.course}</p>

                    <button 
                        className="mt-4 bg-red-500 text-white px-4 py-2 rounded w-full"
                        onClick={() => {
                            localStorage.removeItem("token");
                            router.push("/");
                        }}
                    >
                        Logout
                    </button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
