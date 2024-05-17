import React, {useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import cdlab1 from '../../assets/Images/cdlab1.png'
import cdlab2 from '../../assets/Images/cdlab2.png'


function ScrollToTopOnMount() {
  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, []); 

  return null; 
}

const Cdlab = () => {
  return (
    <>
    <div>
     <Navbar />
    </div>
    <div className="bg-light">
      <div className="englab-banner">
        <h2>CIRCUITS AND DEVICES LABORATORY</h2>
      </div>
    </div>
 
    <div className='container'>
    <div className="lab-incharge">
      <div className='col-lg-6'>
      <div className="lab-staffdetails">
        <p>Laboratory In-charge : Ms.S.Rajapriya,AP/ECE </p>
        <p>Technical supporting staff: Ms. A.RashmiJoyline</p>
      </div>
      </div>
    </div>
    </div>

    <div className='container'>
    <div className="two-row-container">
      <div className='row-laboratory'>
      <div className="row">
        <div className='col-lg-6'>
        <img src={cdlab1} alt="Image 1" className="deptlab-image1" />
        </div>
        <div className="deptlab-content">
          <h3>Major Equipment :</h3>
          <ul>
            <li>Cathode Ray Oscilloscope</li>
            <li>Function Generators</li>
            <li>
            Dual Regulated Power Supply
            </li>
          </ul>

          <h3>List of Experiments:</h3>
          <ul>
            <li>
            Characteristics of PN Junction Diode.
            </li>
            <li>Zener diode Characteristics& Regulator using Zener diode.</li>
            <li>
            Common Emitter input-output Characteristics.
            </li>
            <li>
            Common Base input-output Characteristics.
            </li>
            <li>
            FET Characteristics.
            </li>
            <li>
            Characteristics of Reflex klystron or Gunn diode and Directional Coupler.
            </li>
            <li>
            SCR Characteristics.
            </li>
            <li>Clipper and Clamper & FWR.</li>
            <li>
            Verifications Of Thevinin& Norton theorem.
            </li>
            <li>
            Verifications Of KVL & KCL.
            </li>
            <li>
            Verifications Of Super Position Theorem.
            </li>
            <li>
            Verifications of maximum power transfer & Verifications of reciprocity theorem.
            </li>
            <li>Determination Of Resonance Frequency of Series & Parallel RLC Circuits.</li>
            <li>Transient analysis of RL and RC circuits.</li>
          </ul>
        </div>
      </div>
      </div>
      <div className='row-laboratory'>
      <div className="row">
        <div className='col-lg-6'>
        <img src={cdlab2} alt="Image 2" className="deptlab-image" />
        </div>
        <div className="deptlab-content">
          <h3>Beyond the syllabus experiments:</h3>
          <ul>
            <li>RC Phase Shift Oscillator.</li>
          </ul>
          <h3>Utilization of the laboratory:</h3>
          <ul>
            <li>
            Circuits and Devices Laboratory for I year ECE/II sem.
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

export default Cdlab
