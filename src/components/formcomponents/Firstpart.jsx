import React from 'react'

const Firstpart = () => {
  return (
    <div className='flex flex-col justify-center items-start gap-1'>
        <h2 className='font-bold text-white text-2xl opacity-80 font-poppins'>Create an Account</h2>
        <div className='flex justify-center items-center'>
            <p className='font-light text-[10px] text-white opacity-50'>Already have an account? </p>
            <a className='font-light text-[10px] text-[#FF8AFF] underline' href="www.google.com">Log in</a>
        </div>
    </div>
  )
}

export default Firstpart