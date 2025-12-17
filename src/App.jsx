import React from 'react'
import Main from './components/Main'
import { Route,Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import Createdsuccessfully from './components/Createdsuccessfully'

const App = () => {
  return (
    <div className='bg-[#676179] h-screen w-screen flex justify-center items-center'>
        {/* <Main/> */}
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/create' element={<Createdsuccessfully/>}/>
        </Routes>
    </div>
  )
}

export default App