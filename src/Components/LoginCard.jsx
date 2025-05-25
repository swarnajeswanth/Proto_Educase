import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const LoginCard = ({ onBack, onSignup }) => {
  const formRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.2,
      }
    );
  }, []);

  return (
    <div
      ref={formRef}
      className="bg-white rounded-2xl shadow-xl p-8 w-[350px] text-center"
    >
      <h1 className="text-2xl font-bold text-gray-800 mb-2">
        Sign in to your <span className="text-purple-600">PopX</span> account
      </h1>
      <p className="text-gray-500 mb-6">
        Welcome back! Please enter your credentials to continue.
      </p>

      <form className="space-y-4 text-left">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email address<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            className="mt-1 w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password<span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            className="mt-1 w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md transition duration-300"
        >
          Login
        </button>
      </form>

      <p className="mt-6 text-sm text-gray-600">
        Don’t have an account?{" "}
        <button
          onClick={onSignup}
          className="text-purple-600 font-semibold hover:underline"
        >
          Sign up
        </button>
      </p>
    </div>
  );
};

export default LoginCard;
