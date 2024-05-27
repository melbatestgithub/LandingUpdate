import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginStart, loginSuccess, loginFailure} from "../redux/userSlice";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

const Login = () => {
  const dispatch = useDispatch();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const baseUrl = "https://https-github-com-melbatestgithub-issue.onrender.com/api";

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      alert("Incorrect Username or password");
      window.location.reload();
    }
  };

  const googleAuth = () => {
    window.open("http://localhost:5600/auth/google");
  };

  const facebookAuth = () => {
    window.open("http://localhost:5600/auth/facebook");
  };

  return (
    <div className="flex justify-center  shadow-lg h-screen items-center bg-gray-100 ">
      <div className="bg-white shadow-md rounded-md p-8  ">
        <h2 className="text-2xl font-bold text-center">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-2 flex flex-col items-start justify-start p-5">
            <label className=" text-gray-700 text-sm  mb-2 capitalize">
              Email Address
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              onChange={handleChange}
              value={loginData.email}
            />
            <label className="text-gray-700 text-sm  mb-2 capitalize">
              Password
            </label>
            <input
              type="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="password"
              onChange={handleChange}
              value={loginData.password}
            />
          </div>
          <div className="flex  space-x-8 mb-2">
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
          <div className="flex items-center flex-col ">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
              Sign In
            </button>
            <p> or login with</p>
            <div className="flex gap-6 space-x-4">
              <button
                onClick={googleAuth}
                className="flex items-center justify-center gap-2 cursor-pointer bg-slate-100 px-3 py-2 mt-2 text-md font-bold rounded-sm "
              >
                <FcGoogle size={25} />
                Google
              </button>
              <button
                className="flex items-center justify-center gap-2 cursor-pointer bg-slate-100 px-3 py-2 mt-2 text-md font-bold rounded-sm "
                onClick={facebookAuth}
              >
                {" "}
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
