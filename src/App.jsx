
import { Route, Routes } from 'react-router-dom';
import './App.css';
import  Navbar  from './Components/Navbar.jsx';
import  Home from './Components/pages/Home.jsx';
import  About  from './Components/pages/About.jsx';
import  Services from './Components/pages/Services.jsx';
import  Contact  from './Components/pages/Contact.jsx';


function App() {
  

  return (
    <>
    <Navbar/>
   <Routes>
    <Route path="/about" element={<About />}/>
    <Route path="/services" element={<Services />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/" element={<Home />}/>
   </Routes>
    </ >
  )
}

export default App
