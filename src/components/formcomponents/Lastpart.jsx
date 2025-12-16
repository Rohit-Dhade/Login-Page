import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const Lastpart = () => {
  return (
    <div className='flex flex-col gap-6 mt-1.5'>
        <button className='bg-[#6E54B5] h-7.5 text-white rounded-sm active:scale-98'>Create Account</button>
        {/* <p>---------- or register with --------------</p> */}
        <div className='flex items-center justify-between'>
            <button className='text-white flex border border-gray-500 rounded-sm justify-center items-center gap-2 pl-6 pr-6 active:scale-98'><FcGoogle /> Google</button>
            <button className='text-white flex border border-gray-500 rounded-sm justify-center items-center gap-2 pl-6 pr-6 active:scale-98'><FaApple color='white'/> Apple</button>
        </div>
    </div>
  )
}

export default Lastpart