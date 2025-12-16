import React from 'react'
import { BsArrowRight } from "react-icons/bs";

const Imagecomp = () => {
    return (
        <div className='h-full w-full'>
            <div className='bg-[url(https://i.pinimg.com/736x/15/74/ac/1574acbd3f71af74e57ab5756df6f022.jpg)] h-full w-full rounded-lg bg-cover bg-no-repeat relative'>
                <button className='absolute top-2 right-2 flex items-center justify-center gap-2 text-[11px] text-white opacity-70 rounded-2xl bg-[#5E539F]/20 pl-2 pr-2'>back to website <BsArrowRight color='white' /></button>
                <div className='flex flex-col justify-center items-center gap-2 text-white absolute bottom-2.5 left-[30%]'>
                    <div className='flex flex-col opacity-70'>
                        <h3>Capturing moments,</h3>
                        <h3>Creating memories</h3>
                    </div>
                    <div className='flex gap-3 items-center justify-center'>
                        <div className='w-7 h-0.5 bg-white rounded-2xl'></div>
                        <div className='w-7 h-0.5 bg-white rounded-2xl'></div>
                        <div className='w-7 h-0.5 bg-white rounded-2xl'></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Imagecomp