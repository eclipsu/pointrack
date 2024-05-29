import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import GoogleIcon from "../../assets/GoogleIcon.jsx";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [captchaLoaded, setCaptchaLoaded] = useState(false);

  useEffect(() => {
    console.log("Component mounted or updated");
    setCaptchaLoaded(true);
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const onChange = (value) => {
    console.log("Captcha value:", value);
  };

  return (
    <>
      <div>
        <Navbar />
        <div className="mt-24 flex flex-col items-center">
          <h1 className="text-[32px] font-bold text-darkblue1">Create Pointrack account</h1>
          <h3 className="text-[18px] text-[#12235B]">Get started for free</h3>
          <div className="border border-[#162E82] flex items-center justify-center w-[446px] h-[48px] mt-6 mb-4 p-2 rounded-[6px] cursor-pointer hover:bg-gray-100">
            <GoogleIcon />
            <span className="ml-2 text-[#162E82] font-semibold">Continue with Google</span>
          </div>
          <p>or</p>

          <div>
            <form className="flex flex-col items-center mt-4 space-y-6">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-[446px] p-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                placeholder="Phone number"
                className="w-[446px] p-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <div className="relative w-[446px]">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                >
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </span>
              </div>
              <button className="w-[446px] p-2 bg-blue-500 text-white rounded">
                Create account
              </button>
            </form>
            <p className="mt-4 text-center text-gray-600">
              By continuing, you agree to the terms of service and privacy policy
            </p>
            <div className="flex justify-center mt-4">
              {captchaLoaded && (
                <ReCAPTCHA sitekey={import.meta.env.VITE_SITEKEY} onChange={onChange} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
