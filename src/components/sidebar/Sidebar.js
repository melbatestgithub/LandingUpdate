import React from "react";
import './sidebar.css'
import { TiHome } from "react-icons/ti";
import { GoIssueClosed } from "react-icons/go";
import { CiBookmarkCheck } from "react-icons/ci";
import { IoIosSettings } from "react-icons/io";
import { MdFeedback } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { FaRocketchat } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { MdHistory } from "react-icons/md";
import { Link,useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"
import { logout } from "../../redux/userSlice";
const Sidebar = () => {
  const dispatch=useDispatch()
  const navigate = useNavigate();
  const handleLogout=()=>{
    dispatch(logout())
    navigate("/login");

  }
  return (
    <div className="flex h-screen fixed top-16  left-0 overflow-y-auto shadow-xl    "  style={{width:"16%"}}>
      <div className="bg-gray-800 text-white  pt-3 h-full  sidebar ">
        <nav className="overflow-y-auto px-2 ">
          <ul className="flex flex-col gap-3 ">
            <Link to="/dashboard">
              <li className="flex p-2 items-center hover:bg-slate-800 hover:text-white cursor-pointer  ">
                {" "}
                <TiHome size={26} />
                <p className="ml-2 text-xl font-bold">Home</p>
              </li>
            </Link>

            <Link to="/dashboard/submitIssue">
              <li className="flex p-2  items-center  hover:bg-slate-800 hover:text-white cursor-pointer">
                {" "}
                <GoIssueClosed size={26} />
                <p className="ml-2 text-xl font-bold">Submit Issue</p>
              </li>
            </Link>

            <Link to="/dashboard/checkIssueStatus">
              <li className="flex p-2  items-center  hover:bg-slate-800 hover:text-white cursor-pointer">
                {" "}
                <CiBookmarkCheck size={26} />
                <p className="ml-2 text-xl font-bold"> Issue Status</p>
              </li>
            </Link>
            <Link to="/dashboard/profile">
              <li className="flex p-2  items-center  hover:bg-slate-800 hover:text-white cursor-pointer">
                {" "}
                <IoIosSettings size={26} />
                <p className="ml-2 text-xl font-bold"> Accounts</p>
              </li>
            </Link>

            <Link to="/dashboard/feedback">
              <li className="flex p-2 items-center  hover:bg-slate-800 hover:text-white cursor-pointer">
                {" "}
                <MdFeedback size={26} />
                <p className="ml-2 text-xl font-bold"> Feedback</p>
              </li>
            </Link>
            {/* <Link to="/dashboard/notification">
              <li className="flex p-2 items-center  hover:bg-slate-800 cursor-pointer">
                {" "}
                <IoMdNotifications size={26} />
                <p className="ml-2 text-xl"> See Notification</p>
              </li>
            </Link> */}

            <Link to="/dashboard/chatPage">
              <li className="flex p-2  items-center  hover:bg-slate-800 hover:text-white cursor-pointer">
                {" "}
                <FaRocketchat size={26} />
                <p className="ml-2 text-xl font-bold"> Message</p>
              </li>
            </Link>
            <Link to="/dashboard/history">
              <li className="flex p-2  items-center  hover:bg-slate-800 hover:text-white cursor-pointer">
                {" "}
                <MdHistory size={26} />
                <p className="ml-2 text-xl  hover:bg-slate-800 hover:text-white cursor-pointer font-bold">
                  {" "}
                  History
                </p>
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
