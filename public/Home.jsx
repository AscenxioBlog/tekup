import React from 'react'
import { IoStar } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

function Home() {
  return (
    <div>
<div className=' flex justify-between h-[60px] items-center pl-[70px] pr-[70px] bg-blue-700'>
  <nav className=' flex text-white gap-1.5 text-[15px]'> <FaLocationDot className=' text-2xl'/>2774 Oak Drive, Plattsburgh, New York</nav>
  <nav className=' flex gap-[40px]'>
    <p className=' flex text-white gap-1.5 text-[15px]'> <IoIosCall  className=' text-2xl'/>518-564-3200</p>
    <p className=' flex text-white gap-1.5 text-[15px]'> <IoMdMail  className=' text-2xl'/>tekup@example.com</p>
  </nav>
</div>
        <div className=' h-[1200px] w-full bg-[url(/home.JPG)] bg-cover  home1'>
              <div className=' h-[8%] w-full'>
                 <section className=' flex h-[100%] w-full justify-between border-b-1 border-white items-center px-[50px]'>
        <div className=' h-[100%] w-[80px] flex gap-2 text-white font-bold items-center'> 
          <img src="/logo.png" alt="logo" className=' h-[50px] w-full'/> 
        </div>
        <p className=' h-[100%] font-medium font-[Afacad, san-serif] text-white text-4xl items-center flex'>Tekup</p>

        <nav className=' h-[100%] flex  justify-end w-full items-center'>
          <ol className=' flex gap-[50px] text-white h-[100%] items-center'>
            <li className='bb1 relative group h-[100%] flex items-center'><a href="" className='   w-[70px] flex items-center justify-start gap-[9px] '>
              <p className='h-[100%] items-center flex'>Demo</p>
              <p className=' pb-[6px] h-[100%] flex items-center'>⌄</p>
              <nav className="subnav absolute text-[16px] right-[-40px] hidden group-hover:block bg-amber-900 h-[430px] mt-[525px] ">
                 <ul className="ull list-none leading-[40px]">
                    <li className=' w-[150px] hover:text-blue-700 border-b-2 border-transparent hover:border-blue-700 ml-3 mr-[40px] text-left pl-[10px] font-semibold'><a href="">Main demo</a></li>
                    <li className=' w-[150px] hover:text-blue-700 border-b-2 border-transparent hover:border-blue-700 ml-3 mr-[40px] text-left pl-[10px] font-semibold'><a href="">IT Tech</a></li>
                    <li className=' w-[150px]  hover:text-blue-700 border-b-2 border-transparent hover:border-blue-700 ml-3 mr-[40px] text-left pl-[10px] font-semibold'><a href="">Tech Agency</a></li>
                    <li className=' w-[150px]  hover:text-blue-700 border-b-2 border-transparent hover:border-blue-700 ml-3 mr-[40px] text-left pl-[10px] font-semibold'><a href="">Startup Home</a></li>
                    <li className=' w-[150px]  hover:text-blue-700 border-b-2 border-transparent hover:border-blue-700 ml-3 mr-[40px] text-left pl-[10px] font-semibold'><a href="">IT Consulting</a></li>
                    <li className=' w-[200px]  hover:text-blue-700 border-b-2 border-transparent hover:border-blue-700 ml-3 mr-[40px] text-left pl-[10px] font-semibold'><a href="">Software Company</a></li>
                    <li className=' w-[150px]  hover:text-blue-700 border-b-2 border-transparent hover:border-blue-700 ml-3 mr-[40px] text-left pl-[10px] font-semibold'><a href="">Digital Agency</a></li>
                    <li className=' w-[150px]  hover:text-blue-700 border-b-2 border-transparent hover:border-blue-700 ml-3 mr-[40px] text-left pl-[10px] font-semibold'><a href="">Tech Company</a></li>
                    <li className=' w-[150px]  hover:text-blue-700 border-b-2 border-transparent hover:border-blue-700 ml-3 mr-[40px] text-left pl-[10px] font-semibold'><a href="">IT Solutions</a></li>
                    <li className=' w-[150px]  hover:text-blue-700 border-b-2 border-transparent hover:border-blue-700 ml-3 mr-[40px] text-left pl-[10px] font-semibold'><a href="">SASS Tech</a></li>

                 </ul>
                </nav>
              </a></li>

              <li className='bb1 relative group h-[100%] flex items-center'><a href="" className='  h-[30px] w-[70px] flex items-center justify-start gap-[9px] '>
              <p className=' h-[100%] flex items-center'>Pages</p>
              <p className=' pb-[6px] h-[100%] flex items-center'>⌄</p>
              <nav className="subnav absolute text-[16px] right-[-40px] hidden group-hover:block bg-amber-900 h-[340px] mt-[435px] ">
                 <ul className="ull list-none leading-[40px]">
                    <li className=' w-[150px] hover:text-blue-700 border-b-2 border-transparent hover:border-blue-700 ml-3 mr-[40px] text-left pl-[10px] font-semibold'><a href="">About</a></li>
                    <li className=' w-[150px] hover:text-blue-700 border-b-2 border-transparent hover:border-blue-700 ml-3 mr-[40px] text-left pl-[10px] font-semibold'><a href="">FAQ</a></li>
                    <li className=' w-[150px]  hover:text-blue-700 border-b-2 border-transparent hover:border-blue-700 ml-3 mr-[40px] text-left pl-[10px] font-semibold'><a href="">Pricing</a></li>
                    <li className=' w-[150px]  hover:text-blue-700 border-b-2 border-transparent hover:border-blue-700 ml-3 mr-[40px] text-left pl-[10px] font-semibold'><a href="">Testimonial</a></li>
                    <li className=' w-[200px]  hover:text-blue-700 border-b-2 border-transparent hover:border-blue-700 ml-3 mr-[40px] text-left pl-[10px] font-semibold group1'><a href="" className=' flex justify-between'>Team <p>▹</p></a>
                    <nav className="subnav absolute text-[16px] right-[-202px]  bg-amber-900 h-[90px] mt-[-32px] hidden group1-hover:block">
                 <ul className="ull list-none leading-[40px] ">
                    <li className=' w-[150px] hover:text-blue-700 border-b-2 border-transparent hover:border-blue-700 ml-3 mr-[40px] text-left pl-[10px] font-semibold'><a href="">Teams</a></li>
                    <li className=' w-[150px] hover:text-blue-700 border-b-2 border-transparent hover:border-blue-700 ml-3 mr-[40px] text-left pl-[10px] font-semibold'><a href="">Teams Details</a></li>
                 </ul>
                </nav>
                    </li>
                    <li className=' w-[200px]  hover:text-blue-700 border-b-2 border-transparent hover:border-blue-700 ml-3 mr-[40px] text-left pl-[10px] font-semibold'><a href="">Portfolio</a></li>
                    <li className=' w-[150px]  hover:text-blue-700 border-b-2 border-transparent hover:border-blue-700 ml-3 mr-[40px] text-left pl-[10px] font-semibold'><a href="">E-commerce</a></li>
                    <li className=' w-[150px]  hover:text-blue-700 border-b-2 border-transparent hover:border-blue-700 ml-3 mr-[40px] text-left pl-[10px] font-semibold'><a href="">404 Page</a></li>


                 </ul>
                </nav>
              </a></li>

              <li className='bb1 relative group h-[100%] flex items-center'><a href="" className='  h-[30px] w-[90px] flex items-center justify-start gap-[9px] '>
              <p className=' h-[100%] flex items-center'>Services</p>
              <p className=' pb-[6px] h-[100%] flex items-center'>⌄</p>
              <nav className="subnav absolute text-[16px] right-[-40px] hidden group-hover:block bg-amber-900 h-[90px] mt-[182px] ">
                 <ul className="ull list-none leading-[40px]">
                    <li className=' w-[150px] hover:text-blue-700 border-b-2 border-transparent hover:border-blue-700 ml-3 mr-[40px] text-left pl-[10px] font-semibold'><a href="">Services</a></li>
                    <li className=' w-[150px] hover:text-blue-700 border-b-2 border-transparent hover:border-blue-700 ml-3 mr-[40px] text-left pl-[10px] font-semibold'><a href="">Service Detail</a></li>
                 </ul>
                </nav>
              </a></li>

              <li className='bb1 relative group h-[100%] flex items-center'><a href="" className='  h-[30px] w-[55px] flex items-center justify-start gap-[9px] '>
              <p className=' h-[100%] flex items-center'>Blog</p>
              <p className=' pb-[6px] h-[100%] flex items-center'>⌄</p>
              <nav className="subnav absolute text-[16px] right-[-40px] hidden group-hover:block bg-amber-900 h-[130px] mt-[222px] ">
                 <ul className="ull list-none leading-[40px]">
                    <li className=' w-[150px] hover:text-blue-700 border-b-2 border-transparent hover:border-blue-700 ml-3 mr-[40px] text-left pl-[10px] font-semibold'><a href="">Blog</a></li>
                    <li className=' w-[150px] hover:text-blue-700 border-b-2 border-transparent hover:border-blue-700 ml-3 mr-[40px] text-left pl-[10px] font-semibold'><a href="">Blog 2</a></li>
                    <li className=' w-[150px]  hover:text-blue-700 border-b-2 border-transparent hover:border-blue-700 ml-3 mr-[40px] text-left pl-[10px] font-semibold'><a href="">Blogs Details</a></li>
                 </ul>
                </nav>
              </a></li>

            <li className='h-[100%] flex items-center'><a href="" className='  h-[30px] w-[70px] flex items-center  justify-center  align-middle  text-center gap-[9px]' >Contact</a></li>
          </ol>
        </nav>
       </section>
              </div>
              <div className=' h-[90%] w-full flex place-items-center gap-0'>
                <div className=' h-[90%] w-[70%] pl-[40px] pt-[490px] text-white'>
                  <p className=' font-extrabold text-7xl'>Optimize Your </p>
                  <p className=' font-extrabold text-7xl'>enterprise with our </p>
                  <p className=' font-extrabold text-7xl mb-4'>leading guidance</p>
                  <p className=' font-normal text-[20px]'> We are architects of innovation, trailblazers of technological advancement, and </p>
                  <p className=' font-normal text-[20px] mb-[40px]'>partners in your success. As a dynamic and forward-thinking</p>
                  <button className=' h-[70px] w-[210px] bg-blue-800 text-white border-[white]'>Start a Project</button>
                </div>  
                <div className=' h-[92%] w-[30%] pl-[90px] pt-[710px]'>
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
export default Home





















