import React, {useEffect} from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import sys1 from '../../assets/Images/sys1.png'
import sys2 from '../../assets/Images/sys2.png'

function ScrollToTopOnMount() {
  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, []); 

  return null; 
}

const Comlab = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="bg-light">
        <div className="englab-banner">
          <h2>COMMUNICATION SYSTEMS LABORATORY</h2>
        </div>
      </div>

      <div className='container'>
      <div className="lab-incharge">
        <div className='col-lg-6'>
        <div className="lab-staffdetails">
          <p>Laboratory In-charge : Mr. U. SurendarAP/ECE</p>
          <p>Technical supporting staff : Ms. Mrs.M.Brindha</p>
        </div>
        </div>
      </div>
      </div>

      <div className='container'>
      <div className="two-row-container">
        <div className='row-laboratory'>
        <div className="row">
          <div className='col-lg-6'>
          <img src={sys1} alt="Image 1" className="deptlab-image1" />
          </div>
          <div className="deptlab-content">
            <h3>Major Equipment :</h3>
            <ul>
              <li>Advanced Fiber Optic Trainer</li>
              <li>Antenna Trainer</li>
              <li>CDMA trainer for Channel Allocation</li>
              <li>Agilent ADS- RF Design & Simulation</li>
              <li>ADS and HFSS</li>
              <li>Network Analyzer</li>
            </ul>

            <h3>List of Experiments:</h3>
            <ul>
              <li>Measurement of transmission line parameters and S parameter estimation of Microwave devices.</li>
              <li>
              Design and testing of a Microstrip coupler.
              </li>
              <li>Generation & detection of binary digital modulation techniques.</li>
              <li>
              Digital Filter Design and Antenna Radiation Pattern measurement.
              </li>
              <li>Design of impedance matching network,</li>
              <li>Design of low pass, high pass, band pass and band stop filter at RF.</li>
              <li>Design and characterization of LNA, Mixer and VCO.</li>
            </ul>
          </div>
        </div>
        </div>
        <div className='row-laboratory'>
        <div className="row">
          <div className='col-lg-6'>
          <img src={sys2} alt="Image 2" className="deptlab-image" />
          </div>
          <div className="deptlab-content">
            <h3>Beyond the syllabus experiments:</h3>
            <ul>
              <li>Design of Sierpinski fractal antenna using MATLAB.</li>
            </ul>
            <h3>Utilization of the laboratory:</h3>
            <ul>
              <li>Communication Systems Laboratory for ME Communication Systems I year/I sem.</li>
            </ul>
          </div>
        </div>
      </div>
      </div>
      </div>
      <div>
        <Footer/>
      </div>

      <ScrollToTopOnMount></ScrollToTopOnMount>
    </>
  )
}

export default Comlab
