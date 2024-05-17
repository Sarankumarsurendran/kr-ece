import React,{useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import rf1 from  '../../assets/Images/rf1.png'
import rf2 from '../../assets/Images/rf2.png'

function ScrollToTopOnMount() {
  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, []); 

  return null; 
}

const Rflab = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="bg-light">
        <div className="englab-banner">
          <h2>RF SYSTEM DESIGN LABORATORY</h2>
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
          <img src={rf1} alt="Image 1" className="deptlab-image1" />
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
            <li>
                Measurement of S parameters for a) Inductor b) Capacitor c)
                impedance matching circuits, filters using network analyzer.
              </li>
              <li>Design of λ/2, λ/4 micro strip transmission line..</li>
              <li>Designλ/4 micro strip transmission line.</li>
              <li>
                Design of microstrip inductor and Design of microstrip
                capacitor.
              </li>
              <li>Design of impedance matching network.</li>
              <li>
                Design of low pass, high pass, band pass and band stop filter at
                RF.
              </li>
              <li>Design and characterization of LNA, Mixer and VCO.</li>
              <li>Design and characterization of micro strip patch antennas.</li>
            </ul>
          </div>
        </div>
        </div>
        <div className='row-laboratory'>
        <div className="row">
          <div className='col-lg-6'>
          <img src={rf2} alt="Image 2" className="deptlab-image" />
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
        <Footer />
      </div>
      <ScrollToTopOnMount></ScrollToTopOnMount>
    </>
  )
}

export default Rflab
