
import React from 'react';
import DeskImg from '../assets/help-desk-automation.webp';
import problem from '../assets/problem.png';
import barChart from '../assets/bar-chart.png';
import Plus from '../assets/plus.png';
import caution from '../assets/caution.png';

const Body = () => {
  return (
    <div>
      <div className="flex" id="features">
        <div>
          <h1 className="font-extrabold text-sky-700 text-4xl p-5 pt-[40px] font-sans">
            Powerful help desk software for the entire enterprise
          </h1>
          <p className="text-xl px-5 font-sans">
            Our feature-rich help desk software speeds up ticket resolution with the help of proactive automations and highly customizable workflows.
          </p>
        </div>
          <img className="max-h-[500px] w-[700px] " src={DeskImg} alt="" />
      </div>
      <section>
        <h1 className="text-center p-5 tracking-wider text-3xl font-extrabold text-sky-900 font-sans">
          Essential features available in this help desk software
        </h1>
        <div className="flex">
          <div className="border-2 m-5 shadow-2xl">
            <img className="max-w-[100px] mx-auto p-5" src={caution} alt="" />
            <p className="text-center text-2xl text-sky-700 font-sans">Incident management</p>
            <hr className="my-2 mx-3" />
            <p className="text-center text-lg px-5 pt-2 pb-10 leading-10 font-sans">
              Reduce service disruptions, meet your <br /> SLAs, improve technicians' productivity,<br /> and manage the entire life cycle of a ticket.
            </p>
          </div>
          <div className="border-2 m-5 shadow-2xl">
            <img className="max-w-[100px] mx-auto p-5" src={problem} alt="" />
            <p className="text-center text-2xl text-sky-700 font-sans">Problem management</p>
            <hr className="my-2 mx-3" />
            <p className="text-center text-lg px-5 pt-2 pb-10 leading-10 font-sans">
              Reduce service disruptions, meet your <br /> SLAs, improve technicians' productivity,<br /> and manage the entire life cycle of a ticket.
            </p>
          </div>
          <div className="border-2 m-5 shadow-2xl">
            <img className="max-w-[100px] mx-auto p-5" src={barChart} alt="" />
            <p className="text-center text-2xl text-sky-700 font-sans">Advanced Analytics</p>
            <hr className="my-2 mx-3" />
            <p className="text-center text-lg px-5 pt-2 pb-10 leading-10 font-sans">
              Reduce service disruptions, meet your <br /> SLAs, improve technicians' productivity,<br /> and manage the entire life cycle of a ticket.
            </p>
          </div>
        </div>
      </section>
      <div id="faq">
        <h1 className="text-center font-extrabold text-6xl p-10 pb-8 text-sky-700 font-sans">FAQ</h1>
        <p className="text-center text-2xl font-sans">Popular questions.</p>
        <div className="mb-10">
          <div className="flex space-x-10 mx-10 mt-10">
            <div className="flex space-x-3 cursor-pointer border-2 border-sky-700 text-sky-700 px-[60px] py-3 rounded-lg font-extrabold text-2xl font-sans">
              <img className="max-w-[30px] h-[30px]" src={Plus} alt="" />
              <p>What is IT support</p>
            </div>
            <div className="flex space-x-3 cursor-pointer border-2 border-sky-700 text-sky-700 px-[20px] py-3 rounded-lg font-extrabold text-2xl font-sans">
              <img className="max-w-[30px] h-[30px]" src={Plus} alt="" />
              <p>How to get IT support</p>
            </div>
            <div className="flex space-x-3 cursor-pointer border-2 border-sky-700 text-sky-700 px-[60px] py-3 rounded-lg font-extrabold text-2xl font-sans">
              <img className="max-w-[30px] h-[30px]" src={Plus} alt="" />
              <p>How much IT cost</p>
            </div>
          </div>
          <div className="flex space-x-10 mx-10 mt-10">
            <div className="flex space-x-3 cursor-pointer border-2 border-sky-700 text-sky-700 px-[60px] py-3 rounded-lg font-extrabold text-2xl font-sans">
              <img className="max-w-[30px]  h-[30px]" src={Plus} alt="" />
              <p>What is IT support</p>
            </div>
            <div className="flex space-x-3 cursor-pointer border-2 border-sky-700 text-sky-700 px-[60px] py-3 rounded-lg font-extrabold text-2xl font-sans">
              <img className="max-w-[30px] h-[30px]" src={Plus} alt="" />
              <p>How to get IT support</p>
            </div>
            <div className="flex space-x-3 cursor-pointer border-2 border-sky-700 text-sky-700 px-[60px] py-3 rounded-lg font-extrabold text-2xl font-sans">
              <img className="max-w-[30px] h-[30px]" src={Plus} alt="" />
              <p>How much IT cost</p>
            </div>
          </div>
          <div className="flex space-x-10 mx-10 mt-10">
            <div className="flex space-x-3 cursor-pointer border-2 border-sky-700 text-sky-700 px-[60px] py-3 rounded-lg font-extrabold text-2xl font-sans">
              <img className="max-w-[30px] h-[30px]" src={Plus} alt="" />
              <p>What is IT support</p>
            </div>
            <div className="flex space-x-3 cursor-pointer border-2 border-sky-700 text-sky-700 px-[60px] py-3 rounded-lg font-extrabold text-2xl font-sans">
              <img className="max-w-[30px] h-[30px]" src={Plus} alt="" />
              <p>How to get IT support</p>
            </div>
            <div className="flex space-x-3 cursor-pointer border-2 border-sky-700 text-sky-700 px-[60px] py-3 rounded-lg font-extrabold text-2xl font-sans">
              <img className="max-w-[30px] h-[30px]" src={Plus} alt="" />
              <p>How much IT cost</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;