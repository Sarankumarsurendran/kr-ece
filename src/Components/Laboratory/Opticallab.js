import React, {useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import optical1 from '../../assets/Images/optical1.png'
import optical2 from '../../assets/Images/optical2.png'

function ScrollToTopOnMount() {
  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, []); 

  return null; 
}

const Opticallab = () => {
  return (
    <>
    <div>
     <Navbar />
    </div>
    <div className="bg-light">
      <div className="englab-banner">
        <h2>OPTICAL AND MICROWAVE LABORATORY</h2>
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
        <img src={optical1} alt="Image 1" className="deptlab-image1" />
        </div>
        <div className="deptlab-content">
          <h3>Major Equipment :</h3>
          <ul>
            <li>Fiber Optic Analog Transmitter & Receiver Trainer</li>
            <li>Optical Fiber Transceiver Trainer and Laser Communication Module</li>
            <li>
            LED Trainer, PD Trainer and Power Meter
            </li>
            <li>Microwave Training Kit (Klystron Power Supply)</li>
            <li>Optical Fiber Trainer Kit, Klystron Tube, Gunn Power Supply and Oscillator</li>
            <li>PIN Modulator, Isolator and Attenuator</li>
           <li>Slotted Section and Detector Mount, Termination and Movable Short</li>
           <li>Horn Antenna, H-Plane Tee, Magic Tee and E-Plane Tee</li>
           <li>VSWR Meter, Directional Coupler and Waveguide Stand</li>
          <li>Dual Channel oscilloscope Circulator</li>
          <li>Variable Attenuator and Klystron Mount</li>
          <li>Connectorisation and Splicing Training System</li>
          </ul>

          <h3>List of Experiments:</h3>
          <ul>
            <li>
            DC Characteristics of LED and PIN Photo diode and Mode Characteristics of Fibers.
            </li>
            <li>Measurement of connector and bending losses.</li>
            <li>
            Fiber optic Analog and Digital Link – Frequency response and eye diagram.
            </li>
            <li>
            Numerical Aperture determination and Attenuation Measurement in Fibers.
            </li>
            <li>
            Basic microwave parameter measurement such as VSWR, Frequency and Wavelength.
            </li>
            <li>
            Characteristics of Reflex klystron or Gunn diode and Directional Coupler.
            </li>
            <li>
            Radiation Pattern of Horn Antenna.
            </li>
            <li>Measurement of S- Parameter of microwave component, attenuation and power.</li>
          </ul>
        </div>
      </div>
      </div>
      <div className='row-laboratory'>
      <div className="row">
        <div className='col-lg-6'>
        <img src={optical2} alt="Image 2" className="deptlab-image" />
        </div>
        <div className="deptlab-content">
          <h3>Beyond the syllabus experiments:</h3>
          <ul>
            <li>Splicing and Connectorization.</li>
            <li>S-parameter Estimation of Microwave devices.</li>
          </ul>
          <h3>Utilization of the laboratory:</h3>
          <ul>
            <li>
            Optical And Microwave Laboratory for IV year ECE/VII sem.
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

export default Opticallab
