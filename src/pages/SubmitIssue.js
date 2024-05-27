import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const SubmitIssue = () => {
  const baseUrl = "https://https-github-com-melbatestgithub-issue.onrender.com/api";
  const [selectedDate, setSelectedDate] = useState(null);
  const [issueDetail, setIssueDetail] = useState({
    title: "",
    category: "",
    department: "",
    description: "",
    roomNumber: "",
    date: "",
  });

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setIssueDetail((prevIssueDetail) => ({
      ...prevIssueDetail,
      date: date,
    }));
  };

  const handleChange = (e) => {
    setIssueDetail({ ...issueDetail, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      // Ensure that all required data is passed in the request payload
      const { title, category, department, description, roomNumber, date } =
        issueDetail;
      if (
        !title ||
        !category ||
        !department ||
        !description ||
        !roomNumber ||
        !date
      ) {
        throw new Error("Please fill in all required fields.");
      }

   const userId = JSON.parse(localStorage.getItem("user")).others._id;
  //  const userId = 123

   // Check if the "others" object exists and contains the user ID
   
   console.log(userId);
  
      // Include user ID in the request payload
      const issueData = {
        ...issueDetail,
        userId: userId,
      };
      await axios.post(`${baseUrl}/issue/newIssue`, issueData);
      alert("Issue submitted successfully");
      window.location.reload();
    } catch (error) {
      console.error("Unable to submit issue:", error.message);
      alert("Unable to submit issue. Please try again later.");
    }
  };


  return (
    <div className="flex  justify-center p-20 items-center my-4 " style={{ width: "70%" }}>
      <form onSubmit={handleSave}>
        <div className="flex flex-col">
          <h3 className="text-center text-2xl capitalize font-semibold ">
            Create new Issue
          </h3>
          <div>
            <label>Title</label>
            <input
              type="text"
              placeholder="Enter title"
              onChange={handleChange}
              name="title"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
            />
            <label>Category</label>
            <input
              type="text"
              placeholder="Enter category"
              onChange={handleChange}
              name="category"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
            />
            <label>Department</label>
            <input
              type="text"
              placeholder="Enter department"
              onChange={handleChange}
              name="department"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
            />
            <label>Room Number</label>
            <input
              type="text"
              placeholder="Enter room number"
              onChange={handleChange}
              name="roomNumber"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
            />
            <div className="flex flex-col " style={{ width: "40%" }}>
              <label>Select Date</label>
              <DatePicker
                dateFormat="dd/MM/yyyy"
                selected={selectedDate}
                isClearable
                onChange={handleDateChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
              />
            </div>
            <div className="flex flex-col">
              <label className="my-3 font-semibold">Description</label>
              <textarea
                placeholder="Write detail about issue you have faced..."
                onChange={handleChange}
                name="description"
                required
                className="px-5 shadow appearance-none border rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="flex justify-around mt-2">
              <button
                className="bg-blue-700 hover:bg-blue-800 py-2 px-6 text-white font-semibold rounded cursor-pointer"
                type="submit"
              >
                Save
              </button>
              <p className="bg-red-700 hover:bg-red-800 py-2 px-6 text-white font-semibold rounded cursor-pointer">
                Cancel
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SubmitIssue;
