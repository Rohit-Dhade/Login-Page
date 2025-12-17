import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import { useState , useEffect } from 'react';

const Imagecomp = () => {
    const [imageIndex, setimageIndex] = useState(0)
    const imageArray = [
        'https://i.pinimg.com/736x/9e/65/2b/9e652be084abb0f1c60b1d149d545219.jpg',
        'https://i.pinimg.com/1200x/40/ac/7a/40ac7af36ec675c636cbaf8b4216be85.jpg',
        'https://i.pinimg.com/736x/15/74/ac/1574acbd3f71af74e57ab5756df6f022.jpg'
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setimageIndex(prev => (prev + 1) % 3);
        }, 8000);
        return () => clearInterval(interval); 
    }, []);

    return (
        <div className='h-full w-full'>
            <div style={{ backgroundImage: `url(${imageArray[imageIndex]})` }} className='h-full w-full rounded-lg bg-cover bg-no-repeat relative transition-all duration-900'>
                <button className='absolute top-2 right-2 flex items-center justify-center gap-2 text-[11px] text-white opacity-70 rounded-2xl bg-[#5E539F]/20 pl-2 pr-2 cursor-pointer active:scale-95 transition'>back to website <BsArrowRight color='white' /></button>
                <div className='flex flex-col justify-center items-center gap-2 text-white absolute bottom-2.5 left-[30%]'>
                    <div className='flex flex-col opacity-70'>
                        <h3>Capturing moments,</h3>
                        <h3>Creating memories</h3>
                    </div>
                    <div className='flex gap-3 items-center justify-center'>
                        <div onClick={() => setimageIndex(0)} className={`cursor-pointer w-7 h-0.5 rounded-2xl transition-all duration-300 ${imageIndex == 0 ? 'bg-purple-400' : 'bg-gray-600'}`}></div>
                        <div onClick={() => setimageIndex(1)} className={`cursor-pointer w-7 h-0.5 rounded-2xl transition-all duration-300 ${imageIndex == 1 ? 'bg-purple-400' : 'bg-gray-600'}`}></div>
                        <div onClick={() => setimageIndex(2)} className={`cursor-pointer w-7 h-0.5 rounded-2xl transition-all duration-300 ${imageIndex == 2 ? 'bg-purple-400' : 'bg-gray-600'}`}></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Imagecomp