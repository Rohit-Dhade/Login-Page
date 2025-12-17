import React from 'react'
import Imagecomp from './Imagecomp'
import FormComponent from './FormComponent'

const Main = () => {
  return (
    <div className='bg-[#2b2738] h-[85%] w-[70%] rounded-lg flex'>
        <div className='h-full w-1/2'>
          <Imagecomp/>
        </div>
        <div className='pt-3 w-1/2 flex items-center justify-center'>
          <FormComponent/>
        </div>
    </div>
  )
}

export default Main