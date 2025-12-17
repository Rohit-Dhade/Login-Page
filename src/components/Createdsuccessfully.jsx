import React from 'react'
import doneVideo from '../assets/Done.mp4'
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const Createdsuccessfully = () => {
  return (
    <div className='fixed inset-0 bg-white/90 backdrop-blur-2xl h-screen w-screen flex justify-center items-center'>
        <div className='bg-black h-[70%] w-[40%] rounded-lg flex shadow-2xl flex-col items-center justify-center gap-8'>
            <div className='w-[60%] h-[60%] flex items-center justify-center'>
                <video className='w-full h-full' src={doneVideo} muted autoPlay loop></video>
            </div>
            <div>
                <h2 className='text-white text-2xl flex gap-2 items-center'>Account Created Successfully <IoCheckmarkDoneCircle color='green'/></h2>
            </div>
        </div>
    </div>
  )
}

export default Createdsuccessfully