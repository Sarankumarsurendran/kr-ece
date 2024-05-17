import React, {useEffect} from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import vlsi1 from '../../assets/Images/vlsi1.png'
import vlsi2 from'../../assets/Images/vlsi2.png'

function ScrollToTopOnMount() {
  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, []); 

  return null; 
}

const Vlsilab = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="bg-light">
        <div className="englab-banner">
          <h2>VLSI DESIGN LABORATORY</h2>
        </div>
      </div>

      <div className="container">
      <div className="lab-incharge">
        <div className="col-lg-6">
        <div className="lab-staffdetails">
          <p>Laboratory In- charge: Ms. P. Surya AP/ECE</p>
          <p>Technical supporting staff: Ms. P. Surya AP/ECE</p>
        </div>
        </div>
      </div>
      </div>

      <div className="container">
      <div className="two-row-container">
        <div className="row-laboratory">
        <div className="row">
          <div className="col-lg-6">
          <img src={vlsi1} alt="Image 1" className="deptlab-image1" />
          </div>
          <div className="deptlab-content">
            <h3>Major Equipment :</h3>
            <ul>
              <li>Personal Computer - INTEL PENTIUM DUAL CORE</li>
              <li>SPARTAN 3 Universal Multivendor Kit</li>
              <li>
                Interfacing Card-1 Traffic Controller Card, Interfacing Card-2
              </li>
              <li>7-Segment Display Interface Card</li>
              <li>CADENCE UNIVERSITY BUNDLE</li>
              <li>SPARTAN 6 Trainer kit</li>
              <li>CYCLONE IV Trainer Kit</li>
            </ul>

            <h3>List of Experiments:</h3>
            <ul>
              <li>
                HDL based design entry and simulation of simple counters, state
                machines, adders (min 8 bit) and multipliers.
              </li>
              <li>Synthesis, P&R and post P&R simulation of the components.</li>
              <li>
                Hardware fusing and testing of each of the blocks using either
                chipscope feature (Xilinx) or the signal tap feature (Altera).
              </li>
              <li>
                FIR Filter design, IIR filter and Multirate filters and
                equalization using MATLAB .
              </li>
              <li>
                Invoke the PLL and demonstrate the use of the PLL module for
                clock generation in FPGAs.
              </li>
              <li>
                Design and simulation of a simple 5 transistor differential
                amplifier. Measure gain, ICMR, and CMRR.
              </li>
              <li>
              Layout generation, parasitic extraction and resimulation of the circuit .
              </li>
              <li>Synthesis and Standard cell based design of an circuits.</li>
              <li>Identification of critical paths, power consumption.</li>
              <li>P&R, power and clock routing, and post P&R simulation.</li>
              <li>Analysis of results of static timing analysis.</li>
            </ul>
          </div>
        </div>
        </div>
        <div className="row-laboratory">
        <div className="row">
          <div className="col-lg-6">
          <img src={vlsi2} alt="Image 2" className="deptlab-image" />
          </div>
          <div className="deptlab-content">
            <h3>Beyond the syllabus experiments:</h3>
            <ul>
              <li> Basic Gates Implementation using GDI (Cadence).</li>
            </ul>
            <h3>Utilization of the laboratory:</h3>
            <ul>
              <li>
              VLSI Design Laboratory for III year ECE/VIsem.
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
      </div>
      <div>
        <Footer />
        <ScrollToTopOnMount></ScrollToTopOnMount>
      </div>
    </>
  );
};

export default Vlsilab;
