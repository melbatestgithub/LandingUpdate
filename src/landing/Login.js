import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginStart, loginSuccess, loginFailure } from "../redux/userSlice";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

const Login = () => {
  const dispatch = useDispatch();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  // State variables for validation messages and error message
  const [validationErrors, setValidationErrors] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

 const baseUrl = "http://it-issue-tracking-api.onrender.com/api"

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });

    // Validate inputs
    if (e.target.name === "email") {
      setValidationErrors({
        ...validationErrors,
        email: validateEmail(e.target.value) ? "" : "Invalid email format",
      });
    } else if (e.target.name === "password") {
      setValidationErrors({
        ...validationErrors,
        password:
          e.target.value.length >= 6 ? "" : "Password must be at least 6 characters",
      });
    }
  };

  const validateEmail = (email) => {
    // Basic email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if form is valid before submitting
    if (validateForm()) {
      dispatch(loginStart());

      try {
        const res = await axios.post(`${baseUrl}/users/login`, loginData);
        const department = res.data.others.department;
        console.log(department);

        const isITStaff = department.includes("IT Staff");
        if (isITStaff) {
          setTimeout(() => {
            window.location.href = "/ItStaffMembers";
          }, 0); // Redirect immediately
        } else {
          setTimeout(() => {
            window.location.href = "/dashboard";
          }, 0); // Redirect immediately
        }

        dispatch(loginSuccess(res.data));
        console.log("Logged In user");
      } catch (error) {
        dispatch(loginFailure());
        if (error.response && error.response.status === 404) {
          setErrorMessage("A user is not found");
        } else {
          setErrorMessage("Incorrect Email or password");
        }
        // Clear the error message after a few seconds
        setTimeout(() => {
          setErrorMessage("");
        }, 5000); // Clear error message after 5 seconds
      }
    } else {
      setErrorMessage("An error occurred, All input fields are required");
      // Clear the error message after a few seconds
      setTimeout(() => {
        setErrorMessage("");
      }, 5000); // Clear error message after 5 seconds
    }
  };

  const validateForm = () => {
    // Validate all fields
    const emailValid = validateEmail(loginData.email);
    const passwordValid = loginData.password.length >= 6;

    setValidationErrors({
      email: emailValid ? "" : "Invalid email format",
      password: passwordValid ? "" : "Password must be at least 6 characters",
    });

    return emailValid && passwordValid;
  };

  const googleAuth = () => {
    window.open("http://localhost:5600/auth/google");
  };

  const facebookAuth = () => {
    window.open("http://localhost:5600/auth/facebook");
  };

  return (
    <div className="flex justify-center shadow-lg h-screen items-center bg-gray-100 font-sans">
      <div className="bg-white shadow-md rounded-md p-8">
        <h2 className="text-2xl font-bold text-center">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-2 flex flex-col items-start justify-start p-5">
            <label className="text-gray-700 text-sm mb-2 capitalize">
              Email Address
            </label>
            <input
              type="text"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                validationErrors.email ? "border-red-500" : ""
              }`}
              name="email"
              onChange={handleChange}
              value={loginData.email}
            />
            {validationErrors.email && (
              <p className="text-red-500 text-xs italic">{validationErrors.email}</p>
            )}
            <label className="text-gray-700 text-sm mb-2 capitalize">
              Password
            </label>
            <input
              type="password"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                validationErrors.password ? "border-red-500" : ""
              }`}
              name="password"
              onChange={handleChange}
              value={loginData.password}
            />
            {validationErrors.password && (
              <p className="text-red-500 text-xs italic">{validationErrors.password}</p>
            )}
          </div>
          <div className="flex space-x-8 mb-2">
            <div className="flex gap-2">
              <input type="checkbox" className="cursor-pointer" />
              <label>Remember me</label>
            </div>
            <Link to="/forgot-password">
              <p className="cursor-pointer text-lg text-gray-600">
                Forgot Password
              </p>
            </Link>
          </div>
          {errorMessage && (
            <p className="text-red-500 text-sm mb-2">{errorMessage}</p>
          )}
          <div className="flex items-center flex-col">
            <button className="bg-sky-700 hover:bg-sky-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
              Sign In
            </button>
            <p>or login with</p>
            <div className="flex gap-6 space-x-4">
              <button
                onClick={googleAuth}
                className="flex items-center justify-center gap-2 cursor-pointer bg-slate-100 px-3 py-2 mt-2 text-md font-bold rounded-sm"
              >
                <FcGoogle size={25} />
                Google
              </button>
              <button
                className="flex items-center justify-center gap-2 cursor-pointer bg-slate-100 px-3 py-2 mt-2 text-md font-bold rounded-sm"
                onClick={facebookAuth}
              >
                <FaFacebookF size={25} color="#316FF6" />
                Facebook
              </button>
            </div>
            <div className="mt-2">
              <p>
                Don't have an account?{" "}
                <Link to="/register">
                  <span className="text-lg text-slate-500 cursor-pointer">
                    Create Account
                  </span>
                </Link>{" "}
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;