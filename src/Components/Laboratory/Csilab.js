import React, {useEffect} from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import csi1 from '../../assets/Images/csi1.png'
import csi2 from '../../assets/Images/csi2.png'

function ScrollToTopOnMount() {
  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, []); 

  return null; 
}

const Csilab = () => {
  return (
    <div>
      <>
        <div>
         <Navbar />
        </div>

        <div className="bg-light">
          <div className="englab-banner">
            <h2>CIRCUITS AND SIMULATION INTEGRATED LABORATORY</h2>
          </div>
        </div>

        <div className="container">
        <div className="lab-incharge">
          <div className="col-lg-6">
          <div className="lab-staffdetails">
            <p>Laboratory In-charge : Mr. A.Syed Husain AP/ECE</p>
            <p>Technical supporting staff: Mrs. J. Premalatha</p>
          </div>
          </div>
        </div>
        </div>

        <div className="container">
        <div className="two-row-container">
          <div className="row-laboratory">
          <div className="row">
            <div className="col-lg-6">
            <img src={csi1} alt="Image 1" className="deptlab-image1" />
            </div>
            <div className="deptlab-content">
              <h3>Major Equipment :</h3>
              <ul>
                <li>Cathode Ray Oscilloscope</li>
                <li>Function Generator</li>
                <li>Single Regulated Power Supply</li>
                <li>Dual Regulated Power Supply</li>
                <li>Decade Resistance Box,Condenser Box</li>
                <li>Decade Inductance Box</li>
                <li>
                  Digital Ammeter, Voltmeter, Multimeter and Orcade Software
                </li>
                <li>Decade Condenser Box</li>
                <li>Digital LCR Meter</li>
              </ul>

              <h3>List Of Experiments:</h3>
              <ul>
                <li>
                  Calculation of Frequency response, Input and output impedance
                  for Series and Shunt feedback amplifiers.  Simulation of
                  Voltage and Current Time base circuits
                </li>
                <li>
                  Design and analysis of RC Phase shift oscillator and Wien
                  Bridge Oscillator.
                </li>
                <li>
                  Design and analysis of Hartley Oscillator and Colpitts
                  Oscillator.
                </li>
                <li>Design and analysis of Single Tuned Amplifier.</li>
                <li>
                  Design and analysis of RC Integrator and Differentiator
                  circuits.
                </li>
                <li>Design and analysis of Clippers and Clampers.</li>
                <li>
                  Design and analysis of Free Running Blocking Oscillators.
                </li>
                <li>
                  Simulation of Tuned Collector, Twin-T, Double and Stagger
                  tuned Oscillator.
                </li>
                <li>
                   Simulation of BistableMultivibrator, and
                  MonostableMultivibrator with emitter timing and base timing.
                </li>
                <li>
                Simulation of Schmitt Trigger circuit with Predictable hysteresis.
                </li>
                <li>
                Simulation of Voltage and Current Time base circuits.
                </li>
              </ul>
            </div>
          </div>
          </div>
          <div className="row-laboratory">
          <div className="row">
            <div className="col-lg-6">
            <img src={csi2} alt="Image 2" className="deptlab-image" />
            </div>
            <div className="deptlab-content">
              <h3>Beyond the syllabus experiments:</h3>
              <ul>
                <li>Free Running Blocking Oscillator.</li>
                <li>Voltage and Current time Base circuit.</li>
              </ul>
              <h3>Utilization of the laboratory:</h3>
              <ul>
                <li>
                Circuits And Simulation Integrated Laboratory for ECE II year/IV sem.
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

export default Csilab;
