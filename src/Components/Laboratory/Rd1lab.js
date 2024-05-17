import React, {useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import randd1 from '../../assets/Images/randd1.png'

function ScrollToTopOnMount() {
  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, []); 

  return null; 
}


const Rd1lab = () => {
  return (
    <>
    <div>
     <Navbar />
    </div>
    <div className="bg-light">
      <div className="englab-banner">
        <h2>RESEARCH AND DEVELOPMENT LABORATORY-I</h2>
      </div>

    </div>

    <div className='container'>
    <div className="lab-incharge">
      <div className='col-lg-6'>
      <div className="lab-staffdetails">
        <p>Laboratory In-charge : Dr.M.Maheswari Professor/ECE</p>
        <p>Technical supporting staff : Mrs. J. Premalatha</p>
      </div>
      </div>
    </div>
    </div>

    <div className='container'>
    <div className="two-row-container">
      <div className='row-laboratory'>
      <div className="row">
        <div className='col-lg-6'>
        <img src={randd1} alt="Image 1" className="deptlab-image" />
        </div>
        <div className="deptlab-content">
          <h3>Major Equipment :</h3>
          <ul>
            <li>Personal Computers and LABVIEW</li>
            <li>Network Analyser and HFSS</li>
            <li>ADS (RF Deisgn& Simulation).</li>
            <li>
            MYRIO and MYDAQ.
            </li>
            <li>
            Antenna Measurement Kit and PSPICE.
            </li>
            <li>
            12V 65AH QUANTA VRLA/SMF BATTERY.
            </li>
            <li>
            CABINET 65AHB 12/28AHB20 NU BAT MSRACK.
            </li>
          </ul>
        </div>
      </div>
      </div>
      <div className='row-laboratory'>
      <div className="row">
        <div className="deptlab-content">
          <h3>Utilization of the laboratory:</h3>
          <ul>
            <li>
            Project Laboratory for UG and PG.
            </li>
            <li>
            Conducting Workshop, seminars and Value Added Courses.
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
    </div>
    <div>
      <Footer />
    </div>

    <ScrollToTopOnMount></ScrollToTopOnMount>
  </>
  )
}

export default Rd1lab

