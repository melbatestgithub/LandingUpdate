import React from 'react'
import MOE from '../assets/MOE.png'
import telegram from '../assets/telegram.png'
import social from '../assets/social.png'
import tiktok from '../assets/tiktok.png'
import ethiopia from '../assets/ethiopia.png'
import Fb from '../assets/fb.png'
const Footer = () => {
  return (
    <div>
  
     <div class="flex m-5 p-5">
      <div>
        <img class="max-w-[200px] ml-[50px]" src={MOE} alt="" />
        <p class="font-thin text-lg text-slate-700 tracking-wider  ">FDRE Ministry of Education is a <br /> Governmental Organization <br /> Headquartered in Arada sub-city,<br /> Addis Ababa, Ethiopia</p>
        <ul class="flex my-5 space-x-8 ">
          <li><img class="max-w-[40px]" src={Fb} alt="" /></li>
          <li><img class="max-w-[40px]" src={telegram} alt="" /></li>
          <li><img class="max-w-[40px]" src={social} alt="" /></li>
          <li><img class="max-w-[40px]" src={tiktok} alt="" /></li>
        </ul>
      </div>
      <div class="border-l-2 border-sky-700 mx-[60px] "></div>
      <div>
        <div>
          <h1 class="text-sky-700 font-extrabold text-xl pt-8">Useful Links</h1>
          <p class="font-thin text-lg  text-slate-700 pt-6">We value your input and want to hear <br />from you. If you have any questions or<br /> feedback about our services, please <br /> contact us.</p>
          <h1 class="text-sky-700 font-extrabold text-xl pt-4"> Working Hours</h1>
          <div class="font-thin text-lg  text-slate-700 pt-4"></div>
          <p>Monday to Friday</p>
          <p>8 AM - 5:30 PM</p>
        </div>
      </div>
      <div class="border-l-2 border-sky-700 mx-[60px] "></div>
      <div>
        <div>
          <h1 class="text-sky-700 font-extrabold text-xl pt-8">Contact Us</h1>
          <p class="font-thin text-lg  text-slate-700 pt-6">We value your input and want to hear <br />from you. If you have any questions or<br /> feedback about our services, please <br /> contact us.</p>
          <h1 class="text-sky-700 font-extrabold text-xl pt-4"> Working Hours</h1>
          <div class="font-thin text-lg  text-slate-700 pt-4"></div>
          <p>Monday to Friday</p>
          <p>8 AM - 5:30 PM</p>
        </div>
      </div>
    </div>
    <div class="flex space-x-3 pb-5 justify-center">
      <p class="text-center">©2024 FDRE Ministry of Education</p>
      <img class="max-w-[30px]" src={ethiopia} alt="" />
    </div>
 

    </div>
  )
}

export default Footer
