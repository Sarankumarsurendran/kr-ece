import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Faculties from '../Components/Faculties/Faculties'
import About from './About'
import Engineeringlab from '../Components/Laboratory/Engineeringlab'
import Digitalsyslab from '../Components/Laboratory/Digitalsyslab'
import Liclab from '../Components/Laboratory/Liclab'
import Communicationlab from '../Components/Laboratory/Communicationlab'
import Mpmclab from '../Components/Laboratory/Mpmclab'
import Dsplab from '../Components/Laboratory/Dsplab'
import Vlsilab from '../Components/Laboratory/Vlsilab'
import Cnlab from '../Components/Laboratory/Cnlab'
import Embeddedlab from '../Components/Laboratory/Embeddedlab'
import Opticallab from '../Components/Laboratory/Opticallab'
import Cdlab from '../Components/Laboratory/Cdlab'
import Oopslab from '../Components/Laboratory/Oopslab'
import Rd1lab from '../Components/Laboratory/Rd1lab'
import Rd2lab from '../Components/Laboratory/Rd2lab'
import Texaslab from '../Components/Laboratory/Texaslab'
import Comlab from '../Components/Laboratory/Comlab'
import Rflab from '../Components/Laboratory/Rflab'
import Adclab from '../Components/Laboratory/Adclab'
import Csilab from '../Components/Laboratory/Csilab'
import Advlsilab from '../Components/Laboratory/Advlsilab'
import Projlab from '../Components/Laboratory/Projlab'
import Management from '../Components/Management/Management'
import Achievements from '../Components/Achievements/Achievements'
import Placements from '../Components/Placements/Placements'



const New = () => {
  return (
    <div>
          <>
    <HashRouter>    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/faculties" element={<Faculties />} />
        <Route path="/About" element={<About />} />
        <Route path="/Engineeringlab" element={<Engineeringlab />} />
        <Route path="/Digitalsyslab" element={<Digitalsyslab />} />
        <Route path="/Liclab" element={<Liclab />} />
        <Route path="/Communicationlab" element={<Communicationlab />} />
        <Route path="/Mpmclab" element={<Mpmclab />} />
        <Route path="/Dsplab" element={<Dsplab />} />
        <Route path='/vlsilab' element={<Vlsilab />} />
        <Route path='/Cnlab' element={<Cnlab />} />
        <Route path='/Embeddedlab' element={<Embeddedlab />} />
        <Route path='/Opticallab' element={<Opticallab />} />
        <Route path='/Cdlab' element={<Cdlab />} />
        <Route path='/Oopslab' element={<Oopslab />} />
        <Route path='/Rd1lab' element={<Rd1lab />} />
        <Route path='/Rd2lab' element={<Rd2lab />} />
        <Route path='/Texaslab' element={<Texaslab />} />
        <Route path='/Comlab' element={<Comlab />} />
        <Route path='/Rflab' element={<Rflab />} />
        <Route path='/Adclab' element={<Adclab />} />
        <Route path='/Csilab' element={<Csilab />} />
        <Route path='/Advlsilab' element={<Advlsilab />} />
        <Route path='/Projlab' element={<Projlab />} />
        <Route path='/Management' element={<Management />} />
        <Route path='/Achievements' element={<Achievements />} />
        <Route path='/Placements' element={<Placements />} />
        </Routes>
    </HashRouter>
    </>
    </div>
  )
}

export default New
