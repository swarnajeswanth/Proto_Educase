import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const SignupCard = ({ onBack }) => {
  const formRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md text-left">
      <h1
        ref={(el) => (formRef.current[0] = el)}
        className="text-2xl font-bold text-gray-800"
      >
        Create your <span className="text-purple-600">PopX</span> account
      </h1>
      <p ref={(el) => (formRef.current[1] = el)} className="text-gray-500 mb-6">
        Sign up to get started!
      </p>

      <form className="space-y-4">
        {[
          "Full Name",
          "Phone number",
          "Email address",
          "Password",
          "Company name",
        ].map((label, i) => (
          <input
            key={i}
            type={label === "Password" ? "password" : "text"}
            placeholder={label + " *"}
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            ref={(el) => (formRef.current[i + 2] = el)}
            required
          />
        ))}

        <div ref={(el) => (formRef.current[7] = el)}>
          <label className="block font-semibold mb-1 text-sm">
            Are you an Agency? <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-4">
            <label className="flex items-center gap-1 text-sm font-medium">
              <input
                type="radio"
                name="agency"
                value="yes"
                className="text-purple-600 focus:ring-purple-500"
                defaultChecked
              />
              <span>Yes</span>
            </label>
            <label className="flex items-center gap-1 text-sm font-medium">
              <input
                type="radio"
                name="agency"
                value="no"
                className="text-purple-600 focus:ring-purple-500"
              />
              <span>No</span>
            </label>
          </div>
        </div>

        <button
          ref={(el) => (formRef.current[8] = el)}
          type="submit"
          className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md transition duration-300"
        >
          Create Account
        </button>
      </form>

      <p className="mt-4 text-sm text-center text-gray-600">
        Already have an account?{" "}
        <button
          onClick={onBack}
          className="text-purple-600 font-semibold hover:underline"
        >
          Login
        </button>
      </p>
    </div>
  );
};

export default SignupCard;
