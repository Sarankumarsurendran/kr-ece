import React, {useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import emb1 from '../../assets/Images/emb1.png'
import emb2 from '../../assets/Images/emb2.png'

function ScrollToTopOnMount() {
  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, []); 

  return null; 
}

const Embeddedlab = () => {
  return (
    <>
      <div>
       <Navbar />
      </div>
      <div className="bg-light">
        <div className="englab-banner">
          <h2>EMBEDDED LABORATORY</h2>
        </div>
      </div>

      <div className='container'>
      <div className="lab-incharge">
        <div className='col-lg-6'>
        <div className="lab-staffdetails">
          <p>Laboratory In- charge: Mr. R. Balamurugan AP/ECE</p>
          <p>Technical supporting staff: Ms. A. Ramya Krishnan AP/ECE</p>
        </div>
        </div>
      </div>
      </div>

      <div className='container'>
      <div className="two-row-container">
        <div className='row-laboratory'>
        <div className="row">
          <div className='col-lg-6'>
          <img src={emb1} alt="Image 1" className="deptlab-image1" />
          </div>
          <div className="deptlab-content">
            <h3>Major Equipment :</h3>
            <ul>
              <li> IAR Embedded Workbench for 8051</li>
              <li>Zigbee Learning Kit-I</li>
              <li>
              Z-Debugger,USB Dongle, Sensor Modules
              </li>
              <li>ARM Cortex – M3 Board</li>
              <li>16Channel 8-bit ADC Interface and Dual DAC Interface</li>
              <li>Calculator type keyboard interface</li>
             <li>I2C(Inter Integrated Circuit) Interface and Real Time Clock Interface</li>
             <li>Stepper Motor Interface with Stepper Motor & Power Adapter</li>
             <li>TXTR Interface using PT100 with ADC</li>
            <li>Wireless Interface and Zigbee</li>
            <li>Debugger cum Programmer</li>
            <li>QUANTA Battery and Fixed Power Supply</li>
            </ul>

            <h3>List of Experiments:</h3>
            <ul>
              <li>
              Study of ARM evaluation system.
              </li>
              <li>Interfacing ADC and DAC, LED and PWM.</li>
              <li>
              Interfacing real time clock and serial port.
              </li>
              <li>
              Interfacing keyboard and LCD.
              </li>
              <li>
              Interfacing EPROM and interrupt.
              </li>
              <li>
              Study of Mailbox and Interrupt performance characteristics of ARM and FPGA.
              </li>
              <li>
               Flashing of LEDS.
              </li>
              <li>Implementing zigbee protocol with ARM.</li>
            </ul>
          </div>
        </div>
        </div>
        <div className='row-laboratory'>
        <div className="row">
          <div className='col-lg-6'>
          <img src={emb2} alt="Image 2" className="deptlab-image" />
          </div>
          <div className="deptlab-content">
            <h3>Beyond the syllabus experiments:</h3>
            <ul>
              <li>Signal Generation using Arduino.</li>
              <li>Sensors Activation using Arduino.</li>
            </ul>
            <h3>Utilization of the laboratory:</h3>
            <ul>
              <li>
              Embedded Laboratory for IV year ECE/VIIIsem.
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

export default Embeddedlab
