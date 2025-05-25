import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const RegisterCard = ({ onRegister }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-white rounded-2xl shadow-xl p-8 w-[350px] text-center"
    >
      <div className="flex justify-center mb-6">
        <div className="bg-purple-100 p-4 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-purple-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      </div>
      <h1 className="text-2xl font-bold text-gray-800">
        Welcome to <span className="text-purple-600">PopX</span>
      </h1>
      <p className="text-gray-500 mt-2 mb-6">
        Join PopX to unlock exclusive features and connect with our amazing
        community!
      </p>
      <div className="flex flex-col gap-4">
        <button
          className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md transition duration-300"
          onClick={onRegister}
        >
          Create Account
        </button>
        <button
          className="bg-purple-100 hover:bg-purple-200 text-purple-600 py-2 px-4 rounded-md transition duration-300"
          onClick={onRegister}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default RegisterCard;
