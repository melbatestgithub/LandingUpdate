import React from 'react'
import DeskImg from '../assets/help-desk-automation.webp'
import problem from '../assets/problem.png'
import barChart from '../assets/bar-chart.png'
import Plus from '../assets/plus.png'
import caution from '../assets/caution.png'

const Body = () => {
  return (
    <div>
    <div class="flex">
     <div>
       <h1 class="font-extrabold text-sky-700 text-5xl p-5 pt-[100px]">Powerful help desk software for the entire enterprise</h1>
       <p class="text-xl   px-5">Our feature-rich help desk software speeds up ticket resolution with the help of proactive automations and highly customizable workflows.</p>
     </div> 
     <img class="max-h-[500px]" src={DeskImg} alt="" />
   </div>
   <section>
   <h1 class="text-center p-5 tracking-wider text-3xl font-extrabold text-sky-900">Essential features available in this help desk software</h1>
   <div class="flex">
     <div class="border-2 m-5 shadow-2xl">
       <img class="max-w-[100px] mx-auto p-5 " src={caution} alt="" />
       <p class="text-center text-2xl text-sky-700">Incident management</p>
       <hr class="my-2 mx-3" />
       <p class="text-center text-lg px-5 pt-2 pb-10 leading-10">Reduce service disruptions, meet your <br /> SLAs, improve technicians' productivity,<br /> and manage the entire life cycle of a ticket.</p>
     </div>
     <div class="border-2 m-5 shadow-2xl">
       <img class="max-w-[100px] mx-auto p-5 " src={problem} alt="" />
       <p class="text-center text-2xl text-sky-700">Incident management</p>
       <hr class="my-2 mx-3" />
       <p class="text-center text-lg px-5 pt-2 pb-10 leading-10">Reduce service disruptions, meet your <br /> SLAs, improve technicians' productivity,<br /> and manage the entire life cycle of a ticket.</p>
     </div>
     <div class="border-2 m-5 shadow-2xl">
       <img class="max-w-[100px] mx-auto p-5 " src={barChart} alt="" />
       <p class="text-center text-2xl text-sky-700">Advanced Analytics</p>
       <hr class="my-2 mx-3" />
       <p class="text-center text-lg px-5 pt-2 pb-10 leading-10">Reduce service disruptions, meet your <br /> SLAs, improve technicians' productivity,<br /> and manage the entire life cycle of a ticket.</p>
     </div>
   </div>
 </section>
 <div>
   <h1 class="text-center font-extrabold text-6xl p-10 pb-8 text-sky-700">FAQ</h1>
   <p class="text-center text-2xl">Popular questions.</p>
   <div class="mb-10">
     <div class="flex space-x-10 mx-10 mt-10">
       <diV class="flex space-x-3 cursor-pointer border-2 border-sky-700 text-sky-700  px-[60px] py-3 rounded-lg font-extrabold text-2xl" >
         <img className="max-w-[30px]" src={Plus} alt="" />
         <p>What is It support</p>
         </diV>
         <diV class="flex space-x-3 cursor-pointer border-2 border-sky-700 text-sky-700  px-[60px] py-3 rounded-lg font-extrabold text-2xl" >
         <img className="max-w-[30px]" src={Plus} alt="" />
         <p>How to get it support</p>
         </diV>
         <diV class="flex space-x-3 cursor-pointer border-2 border-sky-700 text-sky-700  px-[60px] py-3 rounded-lg font-extrabold text-2xl" >
         <img className="max-w-[30px]" src={Plus} alt="" />
         <p>How much It cost</p>
         </diV>
     </div>
     <div class="flex space-x-10 mx-10 mt-10">
       <diV class="flex space-x-3 cursor-pointer border-2 border-sky-700 text-sky-700  px-[60px] py-3 rounded-lg font-extrabold text-2xl" >
         <img class="max-w-[30px]" src={Plus} alt=""/>
         <p>What is It support</p>
       </diV>
       <diV class="flex space-x-3 cursor-pointer border-2 border-sky-700 text-sky-700  px-[60px] py-3 rounded-lg font-extrabold text-2xl" >
         <img class="max-w-[30px]" src={Plus} alt=""/>
         <p>How to get it support</p>
       </diV>
       <diV class="flex space-x-3 cursor-pointer border-2 border-sky-700 text-sky-700  px-[60px] py-3 rounded-lg font-extrabold text-2xl" >
         <img class="max-w-[30px]" src={Plus} alt=""/>
         <p>How much It cost</p>
       </diV>
     </div>
     <div class="flex space-x-10 mx-10 mt-10">
        <diV class="flex space-x-3 cursor-pointer border-2 border-sky-700 text-sky-700  px-[60px] py-3 rounded-lg font-extrabold text-2xl" >
          <img class="max-w-[30px]" src={Plus} alt=""/>
          <p>What is It support</p>
        </diV>
        <diV class="flex space-x-3 cursor-pointer border-2 border-sky-700 text-sky-700  px-[60px] py-3 rounded-lg font-extrabold text-2xl" >
          <img class="max-w-[30px]" src={Plus} alt=""/>
          <p>How to get it support</p>
        </diV>
        <diV class="flex space-x-3 cursor-pointer border-2 border-sky-700 text-sky-700  px-[60px] py-3 rounded-lg font-extrabold text-2xl" >
          <img class="max-w-[30px]" src={Plus} alt=""/>
          <p>How much It cost</p>
        </diV>
      </div>
    </div>
  </div>
    </div>
  )
}
export default Body