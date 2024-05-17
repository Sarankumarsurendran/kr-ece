import React,{useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import dsp1 from '../../assets/Images/dsp1.png'
import dsp2 from '../../assets/Images/dsp2.png'

function ScrollToTopOnMount() {
  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, []); 

  return null; 
}

const Dsplab = () => {
  return (
    <>
      <div>
        <Navbar/>
      </div>
<div className="bg-light">
<div className="englab-banner">
        <h2>DIGITAL SIGNAL PROCESSING LABORATORY</h2>
      </div>
</div>
    
      <div className='container'>
      <div className="lab-incharge">
        <div className='col-lg-6'>
        <div className="lab-staffdetails">
          <p>Laboratory In- charge: Ms. P. Surya AP/ECE</p>
          <p>Technical supporting staff: Ms. P. Surya AP/ECE</p>
        </div>
        </div>
      </div>
      </div>

      <div className='container'>    
      <div className="two-row-container">
        <div className='row-laboratory'>
        <div className="row">
          <div className='col-lg-6'>
          <img src={dsp1} alt="Image 1" className="deptlab-image1" />
          </div>
          <div className="deptlab-content">
            <h3>Major Equipment :</h3>
            <ul>
              <li>Personal Computer - INTEL PENTIUM DUAL CORE</li>
              <li>DSP Starter Kits- TMS320VC5416</li>
              <li>MATLAB R2015a</li>
              <li>Cathode Ray Oscilloscope TXTR Interface using PT100 with ADC</li>
            </ul>

            <h3>List of Experiments:</h3>
            <ul>
              <li>
              Generation of sequences (functional & random) & correlation using MATLAB.
              </li>
              <li>Linear and Circular Convolutions using MATLAB.</li>
              <li>Spectrum Analysis using DFT using MATLAB.</li>
              <li>FIR Filter design, IIR filter and Multirate filters and equalization using MATLAB .</li>
              <li>Study of architecture of DSP processor.</li>
              <li>MAC operations using various addressing modes using DSP processor.</li>
              <li>Linear, circular Convolution and FFT implementation using DSP processor .</li>
              <li>Waveform generation, IIR and FIR implementation.</li>
              <li>Study of Finite Word Length Effect.</li>
            </ul>
          </div>
        </div>
        </div>
        <div className='row-laboratory'>
        <div className="row">
          <div className='col-lg-6'>
          <img src={dsp2} alt="Image 2" className="deptlab-image" />
          </div>
          <div className="deptlab-content">
          <h3>Beyond the syllabus experiments:</h3>
            <ul>
              <li>Design of musical instrument tuning using filters.</li>
              <li>Design of Composite Video Signal Processing using DM6437.</li>
            </ul>
            <h3>Utilization of the laboratory:</h3>
            <ul>
              <li>Digital Signal Processing Laboratory for III year ECE/V sem.</li>
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

export default Dsplab
