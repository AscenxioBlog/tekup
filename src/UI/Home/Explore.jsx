import React from 'react'

function Explore(myimage) {

  return (
        <div className=' flex justify-center items-center'>

    <div className=' h-[460px] w-[470px] duration-300 cursor-pointer group '  >
        <div className=' h-full w-full flex justify-center bg-amber-900  relative' style={{backgroundImage: `url(${myimage})`}}>
            <div className=' absolute h-[25%] w-[95%] shadow-xl/20 invisible bg-[transparent] text-[transparent] translate-y-[340px] group-hover:text-[black]  group-hover:visible
             group-hover:bg-white  group-hover:translate-y-[280px] transition-all duration-300 p-3 text-left'>
                <p className=' font-medium text-2xl mb-2.5'>Cyber Security Analyst</p>
                <p className=' text-[15px] hover:text-main'>Technology</p>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Explore
