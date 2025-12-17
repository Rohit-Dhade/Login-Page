import React from 'react'
import doneVideo from '../assets/Done.mp4'
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { AiTwotoneCloseCircle } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const Createdsuccessfully = () => {
    const navigate = useNavigate();
  return (
    <div className='inset-0 bg-white/90 backdrop-blur-2xl h-screen w-screen flex justify-center items-center transition-all duration-700'>
        <div className='bg-black h-[70%] w-[40%] rounded-lg flex shadow-2xl flex-col items-center justify-center gap-8 relative'>
            <div onClick={()=>navigate('/home')} className='absolute top-1.5 right-2'><AiTwotoneCloseCircle size={30} /></div>
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