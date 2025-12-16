import React from 'react'
import Imagecomp from './Imagecomp'
import FormComponent from './FormComponent'

const Main = () => {
  return (
    <div className='bg-[#2b2738] h-[85%] w-[70%] rounded-lg flex'>
        <div className='h-[95%] w-1/2 m-3 p-0'>
          <Imagecomp/>
        </div>
        <div className='w-1/2 flex items-center justify-center'>
          <FormComponent/>
        </div>
    </div>
  )
}

export default Main