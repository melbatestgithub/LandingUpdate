import React from "react";
import MOE from "../assets/MOE.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Body from "./Body";
const Main = () => {
  return (
    <div>
      <nav>
    <div class="flex justify-between ">
      <div class=" flex">
      <img class="max-w-[100px] " src={MOE} alt=""/>
      <p class=" pt-5 text-sky-900 text-lg font-sans font-extrabold tracking-wider text-center ">Ministry of Education <br/> IT Support Portal</p>
      </div>
      <div>
      <ul class="flex py-5 space-x-8 px-6 pt-8  ">
        <li class="text-lg font-sans text-sky-700 font-extrabold">Features</li>
        <li class="text-lg font-sans text-sky-700 font-extrabold">FAQ</li>
        <li class="border-2 py-[3px] px-10 rounded-lg text-sky-700 text-lg font-sans font-extrabold ">Log In</li>
        <li class="border-2 px-10 py-[3px] text-white text-lg font-sans font-extrabold bg-sky-700 rounded-lg ">Sign Up</li>
      </ul>
    </div>
    </div>
  </nav>
    <div className="p-10">
    <Body/>
    <Footer/>
    </div>
    </div>
   
  );
};
export default Main;
