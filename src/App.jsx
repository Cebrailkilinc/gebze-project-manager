import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

//Route import
import { Routes, Route } from "react-router-dom";

//Style import
import './App.css'

//Component import
import Home from './pages/Home';
import Navbar from './layouts/header/Navbar';
import Footer from './layouts/footer/Footer';
import AboutUs from './pages/AboutUs';
import AdminPage from './admin/AdminBar';


function App() {
  const [count, setCount] = useState(0)
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='font-thin' >
      <div>
        <Navbar />
        <AdminPage/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />   
          <Route path='/admin' element={<AdminPage/>} />       
        </Routes>      
        <Footer/>  
      </div>      
    </div>
  )
}

export default App
