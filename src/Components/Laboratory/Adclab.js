import React, {useEffect} from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import adc1 from '../../assets/Images/adc1.png'
import adc2 from '../../assets/Images/adc2.png'


function ScrollToTopOnMount() {
  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, []); 

  return null; 
}

const Adclab = () => {
  return (
    <div>


      <>
        <div>
          <Navbar />
        </div>

        <div className="bg-light">
          <div className="englab-banner">
            <h2>ANALOG AND DIGITAL CIRCUITS LABORATORY</h2>
          </div>
        </div>

        <div className='container'>
        <div className="lab-incharge">
          <div className='col-lg-6'>
          <div className="lab-staffdetails">
            <p className='staff-name'>Laboratory In-charge : Mr. A.Syed Husain AP/ECE</p>
            <p className='staff-name'>Technical supporting staff: Mrs. J. Premalatha</p>
          </div>
          </div>
        </div>
        </div>
        
        <div className='container'>
        <div className="two-row-container">
          <div className='row-laboratory'>
          <div className="row">
            <div className='col-lg-6'>
            <img src={adc1} alt="Image 1" className="deptlab-image1" />
            </div>
            <div className="deptlab-content">
              <h3>Major Equipment :</h3>
              <ul>
                <li>Cathode Ray Oscilloscope</li>
                <li>Function Generator</li>
                <li>Single Regulated Power Supply</li>
                <li>Dual Regulated Power Supply</li>
                <li>Decade Resistance Box</li>
                <li>Decade Inductance Box</li>
                <li>Digital Ammeter, Voltmeter, Multimeter</li>
                <li>Decade Condenser Box</li>
                <li>Digital LCR Meter</li>
                <li>Fixed Power Supply</li>
                <li>Digital IC Trainer Kit</li>
                <li>Digital IC Tester</li>
              </ul>

              <h3>Major Experiments:</h3>
              <ul>
                <li>
                Design of Half Wave and Full Wave Rectifiers.
                </li>
                <li>
                Design of Filters, Power supplies.
                </li>
                <li>
                Design of Darlington Amplifier, Differential Amplifier.
                </li>
                <li>
                Design of Class A and Class B Power Amplifier.
                </li>
                <li>
                Design of Cascode/cascade Amplifier.
                </li>
                <li>
                Determination of bandwidth of single stage and multistage amplifiers.
                </li>
                <li>
                Spice Simulation of Common Emitter and Common Source amplifiers.
                </li>
                <li>Design and implementation of code converters using logic gates.</li>
              </ul>
            </div>
          </div>
          </div>
          <div className='row-laboratory'>
          <div className="row">
            <div className='col-lg-6'>
            <img src={adc2} alt="Image 2" className="deptlab-image" />
            </div>
            <div className="deptlab-content">
              <h3>Beyond the syllabus experiments:</h3>
              <ul>
                <li>Shift Register.</li>
                <li>Fire Alarm using Thermistor.</li>
              </ul>
              <h3>Utilization of the laboratory:</h3>
              <ul>
                <li>Analog and Digital Circuits Laboratory for II year ECE / III sem.</li>
              </ul>
            </div>
          </div>
        </div>
        </div>
        </div>
        <div>
          <Footer />
        </div>
      </>
      <ScrollToTopOnMount></ScrollToTopOnMount>
    </div>
  )
}

export default Adclab
