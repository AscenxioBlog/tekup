import React from 'react'
import { IoStar } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import Pagination from './Pagination';

function MainHome() {
  return (
    
<div className=' '>
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
                  <button className=' h-[70px] w-[210px] bg-main text-white border-[white]'>Start a Project</button>
                </div>  
                <div className=' h-[92%] w-[30%] pl-[90px] pt-[810px]'>
                  <div className="flex items-center pl-[7px] mb-[15px]" >
    <img className="object-cover w-12 h-12 -mx-2 rounded-full ring ring-white white:ring-gray-900 border-3 border-white" src="/t4.jpg"  alt=""/>
    <img className="object-cover w-12 h-12 -mx-2 rounded-full ring ring-white white:ring-gray-900 border-3 border-white" src="/t3.jpg"  alt=""/>
    <img className="object-cover w-12 h-12 -mx-2 rounded-full ring ring-white white:ring-gray-900 border-3 border-white" src="/t2.jpg"  alt=""/>
    <img className="object-cover w-12 h-12 -mx-2 rounded-full ring ring-white white:ring-gray-900 border-3 border-white" src="/t1.jpeg" alt=""/>
    <div className="object-cover w-12 h-12 -mx-2 rounded-full ring ring-white white:ring-gray-900 flex items-center justify-center bg-white">14k</div>
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
        <div className=' h-[900px] bg-gray-200 W-full pt-[140px]'>
          <div>
              <p className=' font-semibold text-5xl text-center'>We deal with the aspects of</p>
              <p className=' font-semibold text-5xl text-center'>professional IT services</p>
          </div>
        <div className=' flex gap-4 justify-center mt-[30px]'>
          <Pagination total={4}/>
        </div>
        </div>

        <div className=' h-[800px] w-fulL flex justify-center items-center text-black gap-[90px]'>
          <div className=' h-[70%] w-[40%] bg-[url(/team.png)] bg-cover bg-center  home2'>
          <div className=' h-[230px] w-[200px] bg-white p-4 translate-y-[310px] translate-x-[20px] shadow-lg'>
            <div className=' h-[60%] w-full'><img src="position.png" className=" h-[100%] mb-2" /></div>
            <div className=' h-[40%] w-full pt-1'>100% Customer <br /> Satisfaction</div>
          </div>
          </div>
          <div className=' h-[70%] w-[40%]  pt-[60px]'>
            <p className=' mb-[40px] font-medium text-5xl'>Exclusive technology to <br /> provide IT solutions</p>
            <p className=' mb-[40px] text-[20px]'>We are architects of innovation, trailblazers of technological <br /> advancement, and partners in your success. As a dynamic and <br />forward-thinking organization</p>
            <p className=' font-medium flex gap-5 mb-3'><span className=' text-main'>✓</span> Easily Build Custom Reports And Dashboards</p>
            <p className=' font-medium flex gap-5 mb-3'><span className=' text-main'>✓</span> Legacy Software Modernization</p>
            <p className=' mb-[30px] font-medium flex gap-5 '><span className=' text-main'>✓</span> Software For The Open Enterprise</p>
            <button className=' h-[70px] w-[210px] bg-main text-white border-[white] text-[25px]'>More About</button>
          </div>
        </div>
        {/* <div className=' bg-amber-900 h-[400px] w-full'>

        </div> */}
    </div>
  )
}

export default MainHome