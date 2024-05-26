import React from "react";
import { TiHome } from "react-icons/ti";
import { IoIosSettings } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { FaRocketchat } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { Link } from "react-router-dom";
import { logout } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
const Sidebar = () => {
  const navigate=useNavigate()
const dispatch=useDispatch()
  const handleLogout=()=>{
    dispatch(logout())
    navigate("/login")
  }
  return (
    <div className="flex h-screen fixed top-16  left-0 overflow-y-auto shadow-xl "  style={{width:"18%"}}>
    <div className="bg-gray-800 text-white  pt-3 h-full  sidebar ">
      <nav className="overflow-y-auto px-2 ">
        <ul className="flex flex-col gap-3 ">
          <Link to="/ItStaffMembers">
            <li className="flex p-2 items-center hover:bg-slate-800 hover:text-white cursor-pointer  ">
              {" "}
              <TiHome size={26} />
              <p className="ml-2 text-xl font-bold">Home</p>
            </li>
          </Link>

          <Link to="/ItStaffMembers/notification">
            <li className="flex p-2  items-center  hover:bg-slate-800 hover:text-white cursor-pointer">
              {" "}
              <IoMdNotifications size={26} />
              <p className="ml-2 text-xl font-bold"> Assigned Issue</p>
            </li>
          </Link>
          <Link to="/ItStaffMembers/profile">
            <li className="flex p-2  items-center  hover:bg-slate-800 hover:text-white cursor-pointer">
              {" "}
              <IoIosSettings size={26} />
              <p className="ml-2 text-xl font-bold"> Accounts</p>
            </li>
          </Link>
          <Link to="/ItStaffMembers/chatPage">
            <li className="flex p-2  items-center  hover:bg-slate-800 hover:text-white cursor-pointer">
              {" "}
              <FaRocketchat size={26} />
              <p className="ml-2 text-xl font-bold"> Message</p>
            </li>
          </Link>

          <li className="flex p-2  items-center  hover:bg-slate-800 hover:text-white cursor-pointer" onClick={handleLogout}>
            {" "}
            <LuLogOut size={26} />
            <p className="ml-2 text-xl  hover:bg-slate-800 hover:text-white cursor-pointer font-bold">
              {" "}
              Logout
            </p>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  );
};
export default Sidebar;
