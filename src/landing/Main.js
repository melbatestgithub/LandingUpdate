import React from "react";
import MOE from "../assets/MOE.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Body from "./Body";
const Main = () => {
  return (
    <div>
    <div className="flex justify-between p-3 bg-sky-500 ">
      <div className="flex  items-center gap-2">
        <img src={MOE} className=" w-20 h-25" />
        <div className="flex flex-col">
          <p className="text-white text-lg font-semibold">
            Minstry Of Education
          </p>
          <p className="text-white text-lg font-semibold">የትምህርት ሚኒስትሪ</p>
        </div>
      </div>
      <div className="flex justify-end items-center gap-5 px-3">
        <Link to="/register">
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Sign Up
          </button>
        </Link>

        <Link to="/login">
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Login
          </button>
        </Link>
      </div>
    </div>
    <div className="p-10">
    <Body/>
    <Footer/>
    </div>
    </div>
   
  );
};
export default Main;
