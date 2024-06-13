import React from "react";
import { TiHome } from "react-icons/ti";
import { GoIssueClosed } from "react-icons/go";
import { CiBookmarkCheck } from "react-icons/ci";
import { IoIosSettings } from "react-icons/io";
import { MdFeedback } from "react-icons/md";
import { FaRocketchat } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { MdHistory } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/userSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <div className="flex h-screen fixed top-26 left-0 overflow-y-auto shadow-xl font-sans" style={{ width: "16%" }}>
      <div className="bg-gray-800 text-white pt-3 h-full sidebar">
        <nav className="overflow-y-auto px-2">
          <ul className="flex flex-col gap-3">
            <NavLink to="/dashboard" icon={<TiHome size={26} className="text-gray-400 "/>} text="Home" className="text-gray-400 "/>
            <NavLink to="/dashboard/submitIssue" icon={<GoIssueClosed size={26} className="text-gray-400 "/>} text="Submit Issue" className="text-gray-400 "/>
            <NavLink to="/dashboard/checkIssueStatus" icon={<CiBookmarkCheck size={26} className="text-gray-400 "/>} text="Issue Status" />
            <NavLink to="/dashboard/profile" icon={<IoIosSettings size={26}className="text-gray-400 " />} text="Accounts" />
            <NavLink to="/dashboard/feedback" icon={<MdFeedback size={26} className="text-gray-400 "/>} text="Feedback" />
            <NavLink to="/dashboard/chatPage" icon={<FaRocketchat size={26} className="text-gray-400 "/>} text="Message" />
            <NavLink to="/dashboard/history" icon={<MdHistory size={26} className="text-gray-400 "/>} text="History" />
            <li className="flex p-2 items-center hover:bg-slate-800 hover:text-white cursor-pointer" onClick={handleLogout}>
              <LuLogOut size={26} className="text-gray-400 "/>
              <p className="ml-2 text-xl font-bold">Logout</p>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

// Custom NavLink component to handle active link styling
const NavLink = ({ to, icon, text }) => {
  const location = useLocation();

  return (
    <Link to={to}>
      <li className={`flex p-2 items-center cursor-pointer ${location.pathname === to ? 'bg-gray-700 text-white' : 'hover:bg-slate-800 hover:text-white'}`}>
        {icon}
        <p className="ml-2 text-xl font-bold">{text}</p>
      </li>
    </Link>
  );
};

export default Sidebar;