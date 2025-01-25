import React from 'react';
import { useNavigate } from "react-router-dom";

export function LandingPage() {
    const navigate = useNavigate();

    const handleNavigation1 = () => {
        navigate("/api1");
    };
    const handleNavigation2 = () => {
        navigate("/api2");
    };

    return (
        <>
            <div className="bg-violet-300 w-full min-h-screen py-8">
                {/* Header Section */}
                <div className="flex justify-center font-bold text-4xl mb-12">
                    <h1 className="text-5xl text-zinc-700 font-serif">
                        Welcome to MovieVerse 🎬
                    </h1>
                </div>

                {/* Button Section */}
                <div className="flex justify-center gap-6 mb-10">
                    <button
                        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition-all cursor-pointer"
                        onClick={handleNavigation1}
                    >
                        Explore User List
                    </button>
                    <button
                        className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-600 transition-all cursor-pointer"
                        onClick={handleNavigation2}
                    >
                        Explore Post List
                    </button>
                </div>

                {/* Image Section */}
                <div className="flex justify-center gap-6 flex-wrap">
                    <img
                        src="https://img.freepik.com/premium-photo/funny-dabbing-cat-wearing-colorful-clothes-sunglasses-dancing-green-background_769053-74.jpg?semt=ais_hybrid"
                        alt="Cool Cat 1"
                        className="w-60 h-60 rounded-lg shadow-lg hover:scale-105 transition-transform"
                    />
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCcHEMsG8qH2Emjr9QPd7ZlCJXcuW3QjdQc7P0TLaKmqszSvIDRrq6GzE4NXa7tYIZCTA&usqp=CAU"
                        alt="Cool Cat 2"
                        className="w-60 h-60 rounded-lg shadow-lg hover:scale-105 transition-transform"
                    />
                    <img
                        src="https://img.freepik.com/premium-photo/cute-cat-logo-illustration_910054-61686.jpg?semt=ais_hybrid"
                        alt="Cool Cat 3"
                        className="w-60 h-60 rounded-lg shadow-lg hover:scale-105 transition-transform"
                    />
                    <img
                        src="https://img.freepik.com/premium-photo/colorful-graffiti-illustration-cool-cat-wearing-sunglasses-highly-detailed_703406-328.jpg?semt=ais_hybrid"
                        alt="Cool Cat 4"
                        className="w-60 h-60 rounded-lg shadow-lg hover:scale-105 transition-transform"
                    />
                </div>
                <div className="flex justify-center gap-6 flex-wrap mt-4">
                    <img
                        src="https://img.freepik.com/premium-photo/cool-cat-tshirt-design_841543-6897.jpg?semt=ais_hybrid"
                        alt="Cool Cat 1"
                        className="w-60 h-60 rounded-lg shadow-lg hover:scale-105 transition-transform"
                    />
                    <img
                        src="https://img.freepik.com/free-photo/digital-art-cute-dog_23-2151289761.jpg?semt=ais_hybrid"
                        alt="Cool Cat 2"
                        className="w-60 h-60 rounded-lg shadow-lg hover:scale-105 transition-transform"
                    />
                    <img
                        src="https://img.freepik.com/premium-photo/funny-dabbing-rabbit-wearing-colorful-clothes-sunglasses-dancing-pastel-background_769053-1619.jpg?semt=ais_hybrid"
                        alt="Cool Cat 3"
                        className="w-60 h-60 rounded-lg shadow-lg hover:scale-105 transition-transform"
                    />
                    <img
                        src="https://img.freepik.com/premium-photo/cool-rich-gangster-boss-cat-hipster-with-sunglasses-hat-headphones_21085-9502.jpg?semt=ais_hybrid"
                        alt="Cool Cat 4"
                        className="w-60 h-60 rounded-lg shadow-lg hover:scale-105 transition-transform"
                    />
                </div>
            </div>
        </>
    );
}
