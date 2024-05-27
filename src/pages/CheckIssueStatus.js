import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CheckIssueStatus = () => {
  const [issueId, setIssueId] = useState("");
  const [issueDetails, setIssueDetails] = useState(null);
  const [showDetails, setShowDetails] = useState(false); // State to control whether to show issue details

  const handleCheckStatus = async () => {
    const baseUrl = "https://https-github-com-melbatestgithub-issue.onrender.com/api";
    try {
      const res = await axios.get(`${baseUrl}/issue/singleIssue/${issueId}`);
      if (res.data.success) {
        setIssueDetails(res.data.issue);
        setShowDetails(true);
      } else {
        console.error("Error fetching issue details:", res.data.message);
        // Handle error, e.g., display an error message to the user
      }
    } catch (error) {
      console.error("Error fetching issue details:", error);
      // Handle error, e.g., display an error message to the user
    }
  };
  const getStatusColor = (status) => {
    switch (status) {
      case "approved":
        return "bg-green-400"; // Yellow color for pending status
          
      case "InProgress":
        return "text-blue-500"; // Blue color for in progress status
      case "Completed":
        return "text-green-500"; // Green color for completed status
      default:
        return "text-gray-500"; // Default color for other statuses
    }
  };
  const handleReload=()=>{
    window.location.reload()
  }

  return (
    <div className="flex justify-center items-center flex-col pl-20 py-20" style={{marginLeft:"5rem"}}>
      <div className="">
        <h3 className="text-center capitalize text-2xl font-semibold">
          Check Issue Status
        </h3>
        <p className="text-gray-800">
          Here you can check issue status. Before checking, you must have
          created the issue. If you haven't created one yet, click here{" "}
          <Link to="/dashboard/submitIssue">
            <span className="text-blue-700 cursor-pointer">create issue</span>
          </Link>
        </p>
        <div className="">
          <p>You can check the issue status by using Issue Id</p>
          <div className="flex items-center p-3">
            <label >Enter Issue Id</label>
            <input
            style={{width:"50%"}}
              className=" shadow appearance-none border rounded  ml-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
              value={issueId}
              required
              onChange={(e) => setIssueId(e.target.value)}
            />
            <button
              className="mt-2 ml-3 bg-blue-700 hover:bg-blue-800 py-2 px-6 text-white font-semibold rounded cursor-pointer"
              onClick={handleCheckStatus}
            >
              Check Status
            </button>
          </div>
        </div>
      </div>

      {/* Display issue details */}
      {showDetails && issueDetails && (
        <div className="bg-gray-100 p-4 rounded-lg my-4">
          <h2 className="text-xl font-semibold mb-2">Issue Details</h2>
          <div className="absolute right-20 bottom-0">
            <button
              onClick={handleReload}
              className="bg-red-500 px-6 py-2 hover:bg-red-700 text-white"
            >
              Close
            </button>
          </div>
          {Object.entries(issueDetails).map(([key, value]) => (
            <div key={key} className="flex mb-2">
              <p className="font-semibold w-32">{key}:</p>
              <p className={getStatusColor(value)}>{value}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CheckIssueStatus;
