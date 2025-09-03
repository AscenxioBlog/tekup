import React from 'react'

function Extra({mypic, writeup} ) {
  return (

    <div className=' h-[400px] w-[300px] bg-white shadow-xl/20 p-[20px] hover:shadow-xl/40 duration-300 cursor-pointer'>
        <div className=' h-[100px] w-[100px]'>
            <img src={mypic} alt="" />
        </div>
        <div className=' h-[200px] bg-white flex items-end'>
             <img src={writeup} alt="" />
        </div>
    </div>

  )
}

export default Extra