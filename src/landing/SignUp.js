import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Upload from "../assets/upload.jpg";
import axios from "axios";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase";

const SignUp = () => {
  const baseUrl = "http://localhost:5600/api";
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    profile: "",
    phoneNumber: "",
    department: "",
    address: "",
    emergencyContact: "",
    employmentType: "",
    gender: "",
  });

  const startUpload = (file, fileSize) => {
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file, {
      size: fileSize,
    });

    handleUploadTask(uploadTask);
  };

  const handleUploadTask = (uploadTask) => {
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        console.error("Error occurred during upload:", error);
      },
      () => {
        // Handle successful uploads on complete
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUserData({ ...userData, profile: downloadURL });
          console.log("File uploaded successfully. Download URL:", downloadURL);
        });
      }
    );
  };
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const [selectGender, setSelectGender] = useState("");
  const handleChangeGender = (e) => {
    setSelectGender(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("btn clicked");
    try {
      const userDataWithGender = { ...userData, gender: selectGender };
      const res = await axios.post(
        `${baseUrl}/users/register`,
        userDataWithGender
      );

      startUpload(selectedFile, selectedFile.size);
      setTimeout(() => {
        window.location.href = "/login";
      }, 15000);
    } catch (error) {
      console.log("unable to fetch user data", error);
    }
  };

  const [department, setDepartment] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/department/getAll`)
      .then((response) => response.json())
      .then((data) => {
        // Debugging statement
        setDepartment(data.departments);
      })
      .catch((error) => {
        console.log("something went wrong", error);
      });
  }, []);

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    event.target.value = "";
    console.log(file);
  };

  return (
    <div className="flex justify-center  shadow-lg h-screen  bg-gray-100  ">
      <div className="bg-white shadow-md rounded-md p-3 mt-2 ">
        <h2 className="text-2xl  font-bold text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className=" flex flex-col  items-start justify-start p-3">
            <div className="flex justify-around gap-5">
              <div className="flex flex-col">
                <label className=" text-gray-700 text-sm font-bold mb-2 capitalize">
                  email address
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="email"
                  onChange={handleChange}
                  value={userData.email}
                />
              </div>

              <div className="flex flex-col">
                <label className="text-gray-700 text-sm font-bold mb-2 capitalize">
                  password
                </label>
                <input
                  type="password"
                  className="shadow appearance-none border   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="password"
                  onChange={handleChange}
                  value={userData.password}
                />
              </div>
            </div>

            <div className="flex justify-around gap-5">
              <div className="flex flex-col">
                <label className=" text-gray-700 text-sm font-bold mb-2 capitalize">
                  firstName
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="firstName"
                  onChange={handleChange}
                  value={userData.firstName}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-700 text-sm font-bold mb-2 capitalize">
                  lastName
                </label>
                <input
                  type="text"
                  onChange={handleChange}
                  value={userData.lastName}
                  className="shadow appearance-none border   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="lastName"
                />
              </div>
            </div>

            <div className="flex justify-around gap-5">
              <div className="flex flex-col">
                <label className=" text-gray-700 text-sm font-bold mb-2 capitalize">
                  phoneNumber
                </label>
                <input
                  type="phone"
                  onChange={handleChange}
                  value={userData.phoneNumber}
                  className="shadow appearance-none border   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="phoneNumber"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-gray-700 text-sm font-bold mb-2 capitalize">
                  address
                </label>
                <input
                  type="text"
                  onChange={handleChange}
                  value={userData.address}
                  className="shadow appearance-none border   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="address"
                />
              </div>
            </div>

            <div className="flex justify-around gap-5">
              <div className="flex flex-col">
                <label className="text-gray-700 text-sm font-bold mb-2 capitalize">
                  confirm password
                </label>
                <input
                  type="password"
                  className="shadow appearance-none border   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="confirmPassword"
                  onChange={handleChange}
                  value={userData.confirmPassword}
                />
              </div>
              <div className="flex flex-col">
                <label>Department</label>
                <select
                  name="department"
                  value={userData.department}
                  onChange={handleChange}
                  className="shadow  border   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  {department.map((dept) => (
                    <option key={dept._id} value={dept.name}>
                      {dept.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex justify-around gap-5">
              <div className="flex flex-col">
                <label className="text-gray-700 text-sm font-bold mb-2 capitalize">
                  Emergency Contact
                </label>
                <input
                  type="phone"
                  onChange={handleChange}
                  value={userData.emergencyContact}
                  className="shadow appearance-none border   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="emergencyContact"
                />
              </div>
              <div className="flex flex-col">
                <label>Employment Type</label>
                <select
                  name="employmentType"
                  onChange={handleChange}
                  value={userData.employmentType}
                  className="shadow  border   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option>Full time</option>
                  <option>Regular</option>
                  <option>Partime</option>
                </select>
              </div>
            </div>
            <div></div>
            <div className="flex space-x-6 justify-center items-center">
              <label htmlFor="upload">
                <div className=" flex gap-6 mt-2 pt-2 items-center ">
                  <span className="cursor-pointer bg-green-300 p-2 text-white">
                    Upload Profile
                  </span>
                  <div
                    className="relative cursor-pointer bg-white rounded-full   border-2 border-gray-300 flex items-center justify-center"
                    style={{ height: "60px", width: "60px" }}
                  >
                    <img
                      src={
                        userData.profile ||
                        "https://i.pinimg.com/564x/58/79/29/5879293da8bd698f308f19b15d3aba9a.jpg"
                      }
                      alt="Profile"
                      className="w-full h-full object-cover rounded-full"
                    />
                    <input
                      id="upload"
                      type="file"
                      name="profile"
                      className="sr-only"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
              </label>
              <div>
                <p>Gender</p>
                <div className="flex justify-center items-center gap-3">
                  <label className="flex items-center gap-2 justify-center">
                    <span>male</span>
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      className=" 
                        w-7
                        h-5
                        cursor-pointer
                        "
                      checked={selectGender === "male"}
                      onChange={handleChangeGender}
                    />
                  </label>
                  <label className="flex items-center gap-2 justify-center">
                    <span>female</span>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      className=" 
                        w-7
                        h-5
                        cursor-pointer
                        "
                      checked={selectGender === "female"}
                      onChange={handleChangeGender}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center flex-col ">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              SignUp
            </button>
            <div className="mt-2">
              <p>
                Already have account?{" "}
                <Link to="/login">
                  <span className="text-lg text-slate-500 cursor-pointer">
                    Login
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

export default SignUp;
