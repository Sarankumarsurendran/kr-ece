import React, {useEffect} from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import mpmc1 from '../../assets/Images/mpmc1.png';
import mpmc2 from '../../assets/Images/mpmc2.png';

function ScrollToTopOnMount() {
  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, []); 

  return null; 
}

const Mpmclab = () => {
  return (
    <div>
      <>
        <div>
          <Navbar />
        </div>

        <div className="bg-light">
          <div className="englab-banner">
            <h2>MICROPROCESSOR AND MICROCONTROLLER LABORATORY</h2>
          </div>
        </div>

        <div className="container">
        <div className="lab-incharge">
          <div className="col-lg-6">
          <div className="lab-staffdetails">
            <p>Laboratory In-charge : Mr.A.Balakumar, AP/ECE</p>
            <p>Technical supporting staff: Ms.A.Rashmijoyline, AP/ECE</p>
          </div>
          </div>
        </div>
        </div>

        <div className="container">
        <div className="two-row-container">
          <div className="row-laboratory">
          <div className="row">
            <div className="col-lg-6">
            <img src={mpmc1} alt="Image 1" className="deptlab-image1" />
            </div>
            <div className="deptlab-content">
              <h3>Major Equipment :</h3>
              <ul>
                <li>
                  8085 Microprocessor Kit and 8255 , 8253, 8279,8251 Interface
                </li>
                <li>8086 Microprocessor Kit and 8051 Microcontroller Kit</li>
                <li>
                  Stepper Motor and Traffic Light Interfacing Module, ADC and
                  DAC Interfacing Module
                </li>
                <li>
                  RS232 Serial Interface Cableand FRC Core Cable (50& 26) and
                  TASM Software
                </li>
                <li>
                  AC and DC Motor Controller Interface and 3 ¾ Digit Digital
                  Multimeter
                </li>
                <li>Digital Multiplexing And Display Card</li>
                <li>
                  Digital Clock Interface and Printer Interface Module Decade
                  Resistance Box
                </li>
              </ul>

              <h3>List of Experiments:</h3>
              <ul>
                <li>
                  Simple arithmetic operations: addition / subtraction /
                  multiplication / division and logic operations using 8085,
                  8086 microprocessors and 8051 microcontroller.
                </li>
                <li>
                  Sorting and searching a number in an array using 8085 and 8086
                  microprocessors.
                </li>
                <li>
                  Interfacing ADC and DAC with 8085 and 8086 microprocessors,
                  Interfacing Traffic Light Controller with 8085 and 8086
                  microprocessors.
                </li>
                <li>
                  Serial and parallel communication using 8085 and 8086
                  microprocessors, Interfacing keyboard with 8085 and 8086
                  microprocessors.
                </li>
                <li>
                  Code conversion using 8086 microprocessor Digital Clock,
                  Interface with 8086 microprocessor.
                </li>
                <li>
                Finding 2’s complement and square and cube of a number using 8051 microcontroller.
                </li>
                <li>
                Conversion of Unpacked BCD to ASCII using 8051 microcontroller.
                </li>
              </ul>
            </div>
          </div>
          </div>
          <div className="row-laboratory">
          <div className="row">
          <div className="col-lg-6">
            <img src={mpmc2} alt="Image 2" className="deptlab-image" />
            </div>
            <div className="deptlab-content">
              <h3>Beyond the syllabus experiments:</h3>
              <ul>
                <li>Experiments on 8086 Arithmetic Operations and Stepper motor Interfacing using 8086.</li>
                <li>Experiments on A/D and D/A converter using 8086.</li>
              </ul>
              <h3>Utilization of the laboratory:</h3>
              <ul>
                <li>
                Microprocessor and Microcontroller Laboratory for ECE III year/V sem.
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
      </>
      <ScrollToTopOnMount></ScrollToTopOnMount>
    </div>
  );
};

export default Mpmclab;
