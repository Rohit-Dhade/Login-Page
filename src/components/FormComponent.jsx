import React from 'react'
import Firstpart from './formcomponents/Firstpart'
import Middlepart from './formcomponents/Middlepart'
import Lastpart from './formcomponents/Lastpart'

const FormComponent = () => {
  return (
    <div className='flex flex-col  w-[75%] h-[90%]'>
        <Firstpart/>
        <Middlepart/>
        {/* <Lastpart/> */}
    </div>
  )
}

export default FormComponent