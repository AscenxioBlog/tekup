import React from 'react'
import { IoStar } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

function MainHome() {
  return (
    
<div>
<div className=' flex justify-between h-[60px] items-center pl-[70px] pr-[70px] bg-main'>
  <nav className=' flex text-white gap-1.5 text-[15px]'> <FaLocationDot className=' text-2xl'/>2774 Oak Drive, Plattsburgh, New York</nav>
  <nav className=' flex gap-[40px]'>
    <p className=' flex text-white gap-1.5 text-[15px]'> <IoIosCall  className=' text-2xl'/>518-564-3200</p>
    <p className=' flex text-white gap-1.5 text-[15px]'> <IoMdMail  className=' text-2xl'/>tekup@example.com</p>
  </nav>
</div>
        <div className=' h-[1200px] w-full bg-[url(/home.JPG)] bg-cover  home1'>
              <div className=' h-[100%] w-full flex place-items-center gap-0'>
                <div className=' h-[90%] w-[70%] pl-[40px] pt-[560px] text-white'>
                  <p className=' font-extrabold text-7xl'>Optimize Your </p>
                  <p className=' font-extrabold text-7xl'>enterprise with our </p>
                  <p className=' font-extrabold text-7xl mb-4'>leading guidance</p>
                  <p className=' font-normal text-[20px]'> We are architects of innovation, trailblazers of technological advancement, and </p>
                  <p className=' font-normal text-[20px] mb-[40px]'>partners in your success. As a dynamic and forward-thinking</p>
                  <button className=' h-[70px] w-[210px] bg-blue-800 text-white border-[white]'>Start a Project</button>
                </div>  
                <div className=' h-[92%] w-[30%] pl-[90px] pt-[810px]'>
                  <div class="flex items-center pl-[7px] mb-[15px]" >
    <img class="object-cover w-12 h-12 -mx-2 rounded-full ring ring-white white:ring-gray-900 border-3 border-white" src="/t4.jpg"  alt=""/>
    <img class="object-cover w-12 h-12 -mx-2 rounded-full ring ring-white white:ring-gray-900 border-3 border-white" src="/t3.jpg"  alt=""/>
    <img class="object-cover w-12 h-12 -mx-2 rounded-full ring ring-white white:ring-gray-900 border-3 border-white" src="/t2.jpg"  alt=""/>
    <img class="object-cover w-12 h-12 -mx-2 rounded-full ring ring-white white:ring-gray-900 border-3 border-white" src="/t1.jpeg" alt=""/>
    <div class="object-cover w-12 h-12 -mx-2 rounded-full ring ring-white white:ring-gray-900 flex items-center justify-center bg-white">14k</div>
</div>
<div className=' text-white'>
  <p>Avg rating 4.8 makes us</p>
  <p className=' mb-[15px]'> world best agency.</p>
  <div className=" h-[30px] w-[120px]  flex gap-2">
  <div className=' text-2xl text-white'><IoStar /></div>
  <div className=' text-2xl text-white'><IoStar /></div>
  <div className=' text-2xl text-white'><IoStar /></div>
  <div className=' text-2xl text-white'><IoStar /></div>
  <div className=' text-2xl text-white'><IoStar /></div>
</div>
</div>

</div>
              </div>
        </div>

    </div>

  )
}

export default MainHome