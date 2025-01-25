import React, { useState, useEffect } from "react";
import axios from "axios";

export function Api1() {
    const [users, setUser] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            setLoading(true)
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/users");
                if (!response) {
                    console.log("No user data found!");
                }
                const data = response.data;
                setTimeout(() => {
                    setUser(data)
                    setLoading(false)
                }, 2000)

            } catch (err) {
                console.log("There was an error!", err);
            }
        };
        fetchUserData();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
            <h1 className="text-3xl font-bold mb-6 text-blue-600">User List</h1>
            <div className="text-blue-500 font-semibold ">
                {
                    loading ? "Loading..." :
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
                            {users.map((user) => (
                                <div
                                    key={user.id}
                                    className="bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition-shadow"
                                >
                                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{user.name}</h2>
                                    <p className="text-gray-600">📧 Email: {user.email}</p>
                                    <p className="text-gray-600">📱 Phone: {user.phone}</p>
                                    <p className="text-gray-600">🏠 Address: {user.address.city}, {user.address.street}</p>
                                    <p className="text-gray-600">🏢 Company: {user.company.name}</p>
                                </div>
                            ))}
                        </div>
                    }
            </div>
        </div>
    );
}
