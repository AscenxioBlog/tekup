import React, { useEffect } from "react";
import { IoStar } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { GrLinkedinOption } from "react-icons/gr";
import Pagination from "./Pagination";
import Exploredots from "./Exploredots";
import Aos from "aos";
import "aos/dist/aos.css";
// import { motion } from "framer-motion";

function MainHome() {

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, [])

  return (
    <div className=" ">
      <div className=" flex justify-between h-[60px] items-center lg:pl-[70px] lg:pr-[70px] bg-main">
        <nav className=" flex text-white lg:gap-1.5 gap-1 lg:text-[15px] text-[9px]">
          {" "}
          <FaLocationDot className=" lg:text-2xl text-xl" />
          2774 Oak Drive, Plattsburgh, New York
        </nav>
        <nav className=" flex lg:gap-[40px] gap-2">
          <p className=" flex text-white lg:gap-1.5 gap-1 lg:text-[15px] text-[9px]">
            {" "}
            <IoIosCall className=" lg:text-2xl text-xl" />
            518-564-3200
          </p>
          <p className=" flex text-white lg:gap-1.5 gap-1 lg:text-[15px] text-[9px]">
            {" "}
            <IoMdMail className=" lg:text-2xl text-xl" />
            tekup@example.com
          </p>
        </nav>
      </div>
      <div className=" lg:h-[1200px] min-h-[1200px] bg-center w-full bg-[url(/home.JPG)] bg-cover  home1">
        <div className=" h-[100%] w-full flex place-items-center gap-0">
          <div className=" h-[90%] w-[70%] pl-[40px] pt-[560px] text-white" >
            <p className=" font-extrabold text-7xl" data-aos="fade-left" data-aos-duration="500">Optimize Your </p>
            <p className=" font-extrabold text-7xl" data-aos="fade-left" data-aos-duration="700">enterprise with our </p>
            <p className=" font-extrabold text-7xl mb-4" data-aos="fade-left" data-aos-duration="900">leading guidance</p>
            <p className=" font-normal text-[20px]" data-aos="fade-left">
              We are architects of innovation, trailblazers of technological
              advancement, and
            </p>
            <p className=" font-normal text-[20px] mb-[40px]" data-aos="fade-left">
              partners in your success. As a dynamic and forward-thinking
            </p>
            <button className=" h-[70px] w-[210px] bg-main text-white border-[white]" data-aos="fade-left">
              Start a Project
            </button>
          </div>
          <div className=" h-[92%] w-[30%] pl-[90px] pt-[810px]">
            <div className="flex items-center pl-[7px] mb-[15px] " data-aos="fade-up">
              <img
                className="object-cover w-12 h-12 -mx-2 rounded-full ring ring-white white:ring-gray-900 border-3 border-white"
                src="/t4.jpg"
                alt=""
              />
              <img
                className="object-cover w-12 h-12 -mx-2 rounded-full ring ring-white white:ring-gray-900 border-3 border-white"
                src="/t3.jpg"
                alt=""
              />
              <img
                className="object-cover w-12 h-12 -mx-2 rounded-full ring ring-white white:ring-gray-900 border-3 border-white"
                src="/t2.jpg"
                alt=""
              />
              <img
                className="object-cover w-12 h-12 -mx-2 rounded-full ring ring-white white:ring-gray-900 border-3 border-white"
                src="/t1.jpeg"
                alt=""
              />
              <div className="object-cover w-12 h-12 -mx-2 rounded-full ring ring-white white:ring-gray-900 flex items-center justify-center bg-white">
                14k
              </div>
            </div>
            <div className=" text-white" data-aos="fade-up">
              <p>Avg rating 4.8 makes us</p>
              <p className=" mb-[15px]"> world best agency.</p>
              <div className=" h-[30px] w-[120px]  flex gap-2">
                <div className=" text-2xl text-white">
                  <IoStar />
                </div>
                <div className=" text-2xl text-white">
                  <IoStar />
                </div>
                <div className=" text-2xl text-white">
                  <IoStar />
                </div>
                <div className=" text-2xl text-white">
                  <IoStar />
                </div>
                <div className=" text-2xl text-white">
                  <IoStar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" h-[900px] bg-gray-200 W-full pt-[140px]">
        <div >
          <p className=" font-semibold text-5xl text-center" data-aos="fade-left" data-aos-duration="600">
            We deal with the aspects of
          </p>
          <p className=" font-semibold text-5xl text-center" data-aos="fade-left" data-aos-duration="1000">
            professional IT services
          </p>
        </div>
        <div className=" flex gap-4 justify-center mt-[30px]">
          <Pagination total={4} />
        </div>
      </div>

      <div className=" h-[800px] w-fulL flex justify-center items-center text-black gap-[90px]">
        <div className=" h-[70%] w-[40%] bg-[url(/team.png)] bg-cover bg-center  home2" data-aos="fade-right">
          <div className=" h-[230px] w-[200px] bg-white p-4 translate-y-[310px] translate-x-[20px] shadow-lg" data-aos="fade-up">
            <div className=" h-[60%] w-full" data-aos="fade-up">
              <img src="position.png" className=" h-[100%] mb-2" />
            </div>
            <div className=" h-[40%] w-full pt-1" data-aos="fade-up">
              100% Customer <br /> Satisfaction
            </div>
          </div>
        </div>
        <div className=" h-[70%] w-[40%]  pt-[60px]">
          <p className=" mb-[40px] font-medium text-5xl" data-aos="fade-left">
            Exclusive technology to <br /> provide IT solutions
          </p>
          <p className=" mb-[40px] text-[20px]">
            We are architects of innovation, trailblazers of technological{" "}
            <br /> advancement, and partners in your success. As a dynamic and{" "}
            <br />
            forward-thinking organization
          </p>
          <p className=" font-medium flex gap-5 mb-3">
            <span className=" text-main">✓</span> Easily Build Custom Reports
            And Dashboards
          </p>
          <p className=" font-medium flex gap-5 mb-3">
            <span className=" text-main">✓</span> Legacy Software Modernization
          </p>
          <p className=" mb-[30px] font-medium flex gap-5 ">
            <span className=" text-main">✓</span> Software For The Open
            Enterprise
          </p>
          <button className=" h-[70px] w-[210px] bg-main text-white border-[white] text-[25px]">
            More About
          </button>
        </div>
      </div>

     {/* recent projects section */}
      <div className=" h-[550px] bg-gray-900 W-full flex  flex-col items-center ">
        <div className=" h-[300px] flex justify-center items-center">
          <p className=" font-semibold text-5xl text-center text-white" data-aos="fade-up">
            Explore our recent projects
          </p>
        </div>
        <div className=" absolute top-[3200px] flex gap-4 justify-center w-full overflow-hidden ">
          <Exploredots total={6} />
        </div>
      </div>

     {/* working progress section */}
      <div className=" h-[500px] mt-[300px]">
        <div className=" h-[100px] bg-white">
          <p className=" font-semibold text-5xl text-center" data-aos="fade-right">
            Our working process on how to <br /> grow your business
          </p>
        </div>
        <div className=" h-[400px] flex flex-3  gap-3">
          <div className=" h-full  w-[33%]">
            <div className=' h-[200px] flex justify-center items-center' data-aos="fade-up">
            <div className=' h-[150px] w-[150px] rounded-full bg-gray-100'>
              <div className=' h-[40px] w-[40px] rounded-full text-center flex items-center justify-center bg-white'>01</div>
            </div>
            </div>
            <div className=' h-[200px] text-center' data-aos="fade-up">
              <p className=" font-semibold text-2xl ">Initiation & Planning</p>
              <p>We are architects innovation trailblazers of  <br />technological advancement</p>
            </div>
          </div>
          <div className=" h-full w-[33%]">
            <div className=' h-[200px] flex justify-center items-center' data-aos="fade-up">
            <div className=' h-[150px] w-[150px] rounded-full bg-gray-100'>
               <div className=' h-[40px] w-[40px] rounded-full text-center flex items-center justify-center bg-white'>02</div>
            </div>
            </div>
            <div className=' h-[200px] text-center' data-aos="fade-up">
              <p className=" font-semibold text-2xl ">Execution & Development</p>
              <p>We are architects innovation trailblazers of  <br />technological advancement</p>
            </div>
          </div>
          <div className=" h-full w-[33%]">
            <div className=' h-[200px] flex justify-center items-center' data-aos="fade-up">
            <div className=' h-[150px] w-[150px] rounded-full bg-gray-100'>
               <div className=' h-[40px] w-[40px] rounded-full text-center flex items-center justify-center bg-white'>03</div>
            </div>
            </div>
            <div className=' h-[200px] text-center' data-aos="fade-up">
              <p className=" font-semibold text-2xl ">Testing & Maintenance</p>
              <p>We are architects innovation trailblazers of  <br />technological advancement</p>
            </div>
          </div>
        </div>
      </div>
     {/* Team section */}
      <div className=' h-[700px] bg-gray-100 flex justify-center'>
        <div className=' h-[80%] w-[90%] '>
          <div className=' h-[30%] w-full bg-gray-100 font-semibold text-5xl text-center flex justify-center items-center' data-aos="fade-right"> Meet the team behind <br /> techverse</div>
          <div className=' h-[70%] w-full  flex flex-4 gap-2'>
            <div className=' h-[100%] w-[100%] duration-300  cursor-pointer group '>
              <div className=' h-[80%] w-full relative  home3' data-aos="flip-right">
                 <div className=' h-[20%] w-[50%] bg-[transparent] invisible text-[transparent] translate-x-[75px] translate-y-[330px] group-hover:text-[black]  group-hover:visible
             group-hover:bg-[transparent]  group-hover:translate-y-[250px] transition-all duration-300 p-3 flex flex-3 gap-1'>
              <div className=' h-[40px] w-[40px] rounded-full text-[20px] flex justify-center items-center group-hover:bg-white hover:bg-[black] hover:text-white'><FaXTwitter /></div>
              <div className=' h-[40px] w-[40px] rounded-full text-[20px] flex justify-center items-center group-hover:bg-white hover:bg-[black] hover:text-white'><FiInstagram /></div>
             <div className=' h-[40px] w-[40px] rounded-full text-[20px] flex justify-center items-center group-hover:bg-white hover:bg-[black] hover:text-white'><GrLinkedinOption /></div>
             </div>
              </div>
              <div className=' h-[20%] w-full pt-[20px]'>
                <p className=' font-medium text-[22px]'>Marvin McKinney</p>
                <p className=' text-[15px]'>CEO & Founder</p>
              </div>
            </div>

            <div className=' h-[100%] w-[100%] duration-300  cursor-pointer group'>
              <div className=' h-[80%] w-full  relative  home4 'data-aos="flip-right">
                 <div className=' h-[20%] w-[50%] bg-[transparent] invisible text-[transparent] translate-x-[75px] translate-y-[330px] group-hover:text-[black]  group-hover:visible
             group-hover:bg-[transparent]  group-hover:translate-y-[250px] transition-all duration-300 p-3 flex flex-3 gap-1'>
              <div className=' h-[40px] w-[40px] rounded-full text-[20px] flex justify-center items-center group-hover:bg-white hover:bg-[black] hover:text-white'><FaXTwitter /></div>
              <div className=' h-[40px] w-[40px] rounded-full text-[20px] flex justify-center items-center group-hover:bg-white hover:bg-[black] hover:text-white'><FiInstagram /></div>
             <div className=' h-[40px] w-[40px] rounded-full text-[20px] flex justify-center items-center group-hover:bg-white hover:bg-[black] hover:text-white'><GrLinkedinOption /></div>
             </div>
              </div>
              <div className=' h-[20%] w-full pt-[20px]'>
                <p className=' font-medium text-[22px]'>Sophia Rodriguez</p>
                <p className=' text-[15px]'>Creative Director</p>
              </div>
            </div>

            <div className=' h-[100%] w-[100%] duration-300  cursor-pointer group'>
              <div className=' h-[80%] w-full relative  home5 'data-aos="flip-right">
                 <div className=' h-[20%] w-[50%] bg-[transparent] invisible text-[transparent] translate-x-[75px] translate-y-[330px] group-hover:text-[black]  group-hover:visible
             group-hover:bg-[transparent]  group-hover:translate-y-[250px] transition-all duration-300 p-3 flex flex-3 gap-1'>
              <div className=' h-[40px] w-[40px] rounded-full text-[20px] flex justify-center items-center group-hover:bg-white hover:bg-[black] hover:text-white'><FaXTwitter /></div>
              <div className=' h-[40px] w-[40px] rounded-full text-[20px] flex justify-center items-center group-hover:bg-white hover:bg-[black] hover:text-white'><FiInstagram /></div>
             <div className=' h-[40px] w-[40px] rounded-full text-[20px] flex justify-center items-center group-hover:bg-white hover:bg-[black] hover:text-white'><GrLinkedinOption /></div>
             </div>
              </div>
              <div className=' h-[20%] w-full pt-[20px]'>
                <p className=' font-medium text-[22px]'>Alexander Cameron</p>
                <p className=' text-[15px]'>Lead Developer</p>
              </div>
            </div>

           <div className=' h-[100%] w-[100%] duration-300  cursor-pointer group'>
              <div className=' h-[80%] w-full  relative  home6 ' data-aos="flip-right">
                 <div className=' h-[20%] w-[50%] bg-[transparent] invisible text-[transparent] translate-x-[75px] translate-y-[330px] group-hover:text-[black]  group-hover:visible
             group-hover:bg-[transparent]  group-hover:translate-y-[250px] transition-all duration-300 p-3 flex flex-3 gap-1'>
              <div className=' h-[40px] w-[40px] rounded-full text-[20px] flex justify-center items-center group-hover:bg-white hover:bg-[black] hover:text-white'><FaXTwitter /></div>
              <div className=' h-[40px] w-[40px] rounded-full text-[20px] flex justify-center items-center group-hover:bg-white hover:bg-[black] hover:text-white'><FiInstagram /></div>
             <div className=' h-[40px] w-[40px] rounded-full text-[20px] flex justify-center items-center group-hover:bg-white hover:bg-[black] hover:text-white'><GrLinkedinOption /></div>
             </div>
              </div>
              <div className=' h-[20%] w-full pt-[20px]'>
                <p className=' font-medium text-[22px]'>Brooklyn Simmons</p>
                <p className=' text-[15px]'>Product Designer</p>
              </div>
            </div>
          </div>
        </div>  
      </div>
      {/* recent blog */}
      <div className=" h-[800px] flex justify-center items-center">
        <div className=" h-[90%] w-[90%]">
        <div className=" h-[20%] w-[100%] flex justify-between pt-[20px]">
            <nav>
                <p className=" font-semibold text-5xl"  data-aos="fade-right" data-aos-duration="600">Recent blog & articles <br />about technology</p>
            </nav>
            <button className=" h-[70px] w-[210px] bg-main text-white border-[white] text-[25px] mt-[20px]">
            View All Posts
          </button>
        </div>
        <div className=" h-[80%] w-[100%] flex flex-3 gap-4">
            <div className=" h-[100%] w-[100%] border-2 border-gray-100 duration-500 group hover:shadow-xl/40" data-aos="fade-up"
     data-aos-anchor-placement="top-center">
                <div className=" h-[60%] w-full bg-pink-600 overflow-hidden">
                    <img src="t1.jpeg" className="  h-full w-full duration-500 group-hover:scale-110 " />
                </div>
                <div className=" h-[40%] w-full p-4">
                    <p className=" mb-[8px]">  Technology <span className=" text-[5px]">⚫️</span> 26 June 2025</p>
                    <p className=" text-[28px] hover:cursor-pointer font-semibold group-hover:text-main">Technology support allows <br />erie non-profit to serve</p>
                    <button className=" h-[50px] w-[100px] hover:cursor-pointer text-left text-black border-[white] text-[20px] mt-[25px] hover:text-main">
            Read More
          </button>
                </div>
            </div>
            
             <div className=" h-[100%] w-[100%] border-2 border-gray-100 duration-500 group hover:shadow-xl/40" data-aos="fade-up"
     data-aos-anchor-placement="top-center">
                <div className=" h-[60%] w-full bg-pink-600 overflow-hidden">
                    <img src="t1.jpeg" className="  h-full w-full duration-500 group-hover:scale-110 " />
                </div>
                <div className=" h-[40%] w-full p-4">
                    <p className=" mb-[8px]">  Technology <span className=" text-[5px]">⚫️</span> 12 August 2025</p>
                    <p className=" text-[28px] hover:cursor-pointer font-semibold group-hover:text-main">The act of knowledge & the <br />act of design thinking</p>
                    <button className=" h-[50px] w-[100px] hover:cursor-pointer text-left text-black border-[white] text-[20px] mt-[25px] hover:text-main">
            Read More
          </button>
                </div>
            </div>

             <div className=" h-[100%] w-[100%] border-2 border-gray-100 group duration-500 hover:shadow-xl/40" data-aos="fade-up"
     data-aos-anchor-placement="top-center">
                <div className=" h-[60%] w-full bg-pink-600 overflow-hidden">
                    <img src="t1.jpeg" className="  h-full w-full duration-500 group-hover:scale-110 " />
                </div>
                <div className=" h-[40%] w-full p-4">
                    <p className=" mb-[8px]">  Technology <span className=" text-[5px]">⚫️</span> 9 March 2025</p>
                    <p className=" text-[28px] hover:cursor-pointer font-semibold group-hover:text-main">Core on web vitals, a smas <br /> magazine case study</p>
                    <button className=" h-[50px] w-[100px] hover:cursor-pointer text-left text-black border-[white] text-[20px] mt-[25px] hover:text-main">
            Read More
          </button>
                </div>
            </div>
        </div>
        </div>
      </div>

      {/* Lets work together */}
      <div className=" h-[400px] w-[1300px] bg-main ml-[70px] flex flex-col items-center justify-center text-center">
        <p className=" font-semibold text-5xl text-white">Let’s work together</p>
        <p className=" text-[20px] mb-[20px] text-white">We are architects of innovation, trailblazers of advancement, and <br /> partners in your success. As a dynamic and forward</p>
         <button className=" h-[70px] w-[210px] bg-white text-black border-[white]">Start a Project</button>
      </div>
    </div>
  );
} 

export default MainHome;