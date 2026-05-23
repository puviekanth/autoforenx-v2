import { useState } from 'react'
import Home from './pages/home'
import Login from './pages/login'
import RegisterForm from './components/register-form';
import Upload from './components/upload';
import PreviousLogs from './pages/previous-logs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <>
    <Router>
      <section className='bg-[#0f172a] h-[100vh] w-[100vw]'>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/register' element={<RegisterForm />} />
          <Route path='/upload-logs' element={<Upload/>}/>
          <Route path='/previous' element={<PreviousLogs/>} />
        </Routes>
      </section> 
    </Router>
     
    
  
    </>
  )
}

export default App
