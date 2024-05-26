import React, { useState } from "react";
import { IoMdNotifications } from "react-icons/io";
import { CiLight } from "react-icons/ci";
import { Link } from "react-router-dom";
import { CiDark } from "react-icons/ci";
import { CiChat1 } from "react-icons/ci";
import "./Navbar.css"
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const firstName = JSON.parse(localStorage.getItem("user")).others.firstName;
  const lastName = JSON.parse(localStorage.getItem("user")).others.lastName;
  const department = JSON.parse(localStorage.getItem("user")).others.department;
  const user = JSON.parse(localStorage.getItem("user")).others;
  const fullName = `${firstName} ${lastName}`;

  let notificationLink = "/dashboard/notification";
  let profileLink = "/dashboard/profile";

  if (department.includes("IT Staff")) {
    notificationLink = "/ItStaffMembers/chatPage";
    profileLink = "/ItStaffMembers/profile";
  }

  return (
    <div className="bg-white p-4 fixed top-0 left-0 z-10 mt-0 w-full shadow-xl  ">
      <div className="flex justify-between items-center">
        <div className="flex gap-5 px-3">
          <span className="text-lg font-semibold">Welcome</span>
          <p className="text-black text-xl font-bold">{fullName}</p>
        </div>
        <div className="flex items-center space-x-6">
          {/* Hamburger menu icon */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg
                className="h-6 w-6 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {showMenu ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
          {/* Menu items */}
          <div className="flex items-center justify-end gap-5">
            <div className="cursor-pointer">
              <Link to={notificationLink}>
                <CiChat1 className="text-white relative  " color="black" size={28} />
                <span className=" absolute top-3 bg-red-800 rounded-full w-5 text-center text-white text-sm">
                  2
                </span>
              </Link>
            </div>
            <button className="cursor-pointer">
              <CiDark className="text-white relative" size={28} color="black" />
            </button>
            <div>
              <Link to={profileLink}>
                <img
                  src={user.profile}
                  className="rounded-full object-cover w-10 h-10"
                  alt="Profile"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
