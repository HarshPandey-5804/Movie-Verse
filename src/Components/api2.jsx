import React, { useState, useEffect } from "react";
import axios from "axios";

export function Api2() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchPostData = async () => {
            setLoading(true);
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
                if (!response) {
                    console.log("No post data found!");
                }
                const data = response.data;
                setTimeout(() => {
                    setPosts(data);
                    setLoading(false)
                }, 2000);
            } catch (err) {
                console.log("There was an error!", err);
            }
        };
        fetchPostData();
    }, []);

    return (
        <>
            <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
                <h1 className="text-3xl font-bold mb-6 text-green-600 font-serif">Post List</h1>
                <div className="text-green-600 font-serif">
                    {
                        loading ? "Loading..." :
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
                                {posts.map((post) => (
                                    <div
                                        key={post.id}
                                        className="bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition-shadow"
                                    >
                                        <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
                                        <p className="text-gray-600">{post.body}</p>
                                        <div className="text-right mt-4">
                                            <p className="text-sm text-gray-500">Post ID: {post.id}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                    }
                </div>
            </div>
        </>
    );
}
