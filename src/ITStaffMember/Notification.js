import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaDownload } from "react-icons/fa";
import './notification.css'

const Notification = () => {
  const [assignedIssues, setAssignedIssues] = useState([]);
  const userEmail = JSON.parse(localStorage.getItem("user")).others.email;
  //    

  useEffect(() => {
    getAssignedIssue();
  }, []);

  const baseUrl = "http://localhost:5600/api";

  const getAssignedIssue = async () => {
    try {
      const res = await axios.get(
        `${baseUrl}/issue/getAssignedIssue?email=${userEmail}`
      );
      setAssignedIssues(res.data.assignedIssue);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleAccept = async(issueId) => {
    // Handle logic for accepting the issue
    await axios.put(`${baseUrl}/issue/updateAssignedIssueStatus`,{
      issueId:issueId,
      status:"Solved"
    });
    setAssignedIssues(prev=>prev.map(issue=>issue._id===issueId?{...issue,status:"Solved"}:issue))
    window.location.reload()
    console.log("Accept issue with ID:", issueId);
  };

  const handleReject = (issueId) => {
    // Handle logic for rejecting the issue
    console.log("Reject issue with ID:", issueId);
  };

  return (
    <div className="">
      <div className="flex flex-col px-10">
      <div className="my-2">
        <button className="bg-black text-white font-bold px-4 py-2 rounded-md flex items-center gap-3 hover:bg-gray-700"> 
        <FaDownload size={25}/>
        Download Reports
        </button>   
        </div>
        <h3 className="text-center text-xl font-semibold">Assigned Issues</h3>
        {/* Map through assignedIssues and display each issue */}
        {assignedIssues.map((issue, index) => (
          <div
            key={index}
            className=" shadow-lg rounded-lg bg-white my-6 px-4 py-8 container                                                            "
            style={{ width: "100%" }}
          >
            {/* Render issue details */}
            <div className="flex gap-5 bg-white cursor-pointer p-2 my-2 rounded-md">
              <p>Issue title:</p>
              <p>{issue.title}</p>
            </div>
            <div className="flex gap-5 bg-white cursor-pointer p-2 my-2 rounded-md">
              <p>Category:</p>
              <p>{issue.category}</p>
            </div>
            <div className="flex gap-5 bg-white cursor-pointer p-2 my-2 rounded-md">
              <p>Description:</p>
              <p>{issue.description}</p>
            </div>
            <div className="flex gap-5 bg-white cursor-pointer p-2 my-2 rounded-md">
              <p>Status:</p>
              <p className="text-green-500">{issue.status}</p>
            </div>
            {/* Add buttons for accepting/rejecting the issue */}
            <div className="flex justify-around mt-2 w-80">
              {issue.status === "Solved" ? (
                <button
                  disabled
                  className="bg-green-300 py-2 px-6 text-white font-semibold rounded "
                >
                  Solved
                </button>
              ) : (
                <button
                  onClick={() => handleAccept(issue._id)}
                    className="bg-green-500 hover:bg-green-600 py-2 px-6 text-white font-semibold rounded cursor-pointer"
                  type="button"
                >
                  Accept
                </button>
              )}

              <button
                onClick={() => handleReject(issue._id)}
                className="bg-red-500 hover:bg-red-600 py-2 px-6 text-white font-semibold rounded cursor-pointer"
                type="button"
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
