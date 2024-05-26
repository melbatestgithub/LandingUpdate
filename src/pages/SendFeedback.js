import React from "react";
import { FaRegSave } from "react-icons/fa";
import { MdCancelPresentation } from "react-icons/md";
import axios from "axios";
import { useState } from "react";
const SendFeedback = () => {
  const [feedback, setFeedback] = useState({
    employeeFullName: "",
    department: "",
    email: "",
    message: "",
  });
  const baseUrl = "http://localhost:5600/api";

  const handleChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const userId=JSON.parse(localStorage.getItem("user")).others._id
    const userId=1234
    console.log(userId)
    const feedbackData={
      ...feedback,
      userId:userId
    }
    try {
      await axios.post(`${baseUrl}/feedback/createFeedback`, feedbackData);
      console.log(feedback);
      alert("Your Feedback is Submitted Successfully");
      window.location.reload();
    } catch (error) {
      console.log("Error is sending feedback", error);
    }
  };

  return (
    <div className="flex flex-col px-5">
      <div className="flex flex-col p-3">
        <h3 className="text-center capitalize font-semibold text-lg">
          Send Feedback about Service
        </h3>
        <form className="p-2" onSubmit={handleSubmit}>
          <div className="flex flex-col ">
            <label className="mb-2">Employee Full Name</label>
            <input
              type="text"
              placeholder="employee name"
              required
              name="employeeFullName"
              onChange={handleChange}
              style={{ width: "40%" }}
              className=" mb-2 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
            />
            <label className="mb-2">Employee email</label>
            <input
              type="email"
              placeholder="enter your email"
              required
              name="email"
              onChange={handleChange}
              style={{ width: "40%" }}
              className=" mb-2 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
            />
            <label className="mb-2">Employee Department</label>
            <input
              type="text"
              placeholder="enter your department"
              name="department"
              required
              onChange={handleChange}
              style={{ width: "40%" }}
              className=" mb-2 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
            />
            <label>Write message</label>
            <textarea
              type="text"
              placeholder="say something"
              required
              name="message"
              onChange={handleChange}
              style={{ width: "40%" }}
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
            ></textarea>
          </div>
          <div className="flex justify-between my-4" style={{ width: "40%" }}>
            <button
              className="flex gap-2 items-center bg-blue-700 hover:bg-blue-800 py-2 px-6 text-white font-semibold rounded cursor-pointer"
              type="submit"
            >
              {" "}
              <FaRegSave size={22} />
              Submit
            </button>
            <button className="flex gap-2 items-center bg-red-700 hover:bg-red-800 py-2 px-6 text-white font-semibold rounded cursor-pointer">
              {" "}
              <MdCancelPresentation size={22} />
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendFeedback;
