import React, {useEffect} from "react";
import lic1 from '../../assets/Images/lic1.png'
import lic2 from '../../assets/Images/lic2.png'
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

function ScrollToTopOnMount() {
  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, []); 

  return null; 
}

const Liclab = () => {
  return (
    <div>
      <>
        <div>
          <Navbar />
        </div>

        <div className="bg-light">
          <div className="englab-banner">
            <h2>LINEAR INTEGRATED CIRCUITS LABORATORY</h2>
          </div>
        </div>

        <div className="container">
        <div className="lab-incharge">
          <div className="col-lg-6">
          <div className="lab-staffdetails">
            <p>Laboratory Incharge: Mrs. J. RoselinSuganthi, AP/ECE</p>
            <p>Technical supporting staff: Mrs. M. Brindha, AP/ECE</p>
          </div>
          </div>
        </div>
        </div>
        
        <div className="container">
        <div className="two-row-container">
          <div className="row-laboratory">
          <div className="row">
            <div className="col-lg-6">
            <img src={lic1} alt="Image 1" className="deptlab-image1" />
            </div>
            <div className="deptlab-content">
              <h3>Major Equipment :</h3>
              <ul>
                <li>IC Tester</li>
                <li>Dual Regulated Power Supply</li>
                <li>Dual Oscilloscope (CRO)</li>
                <li>DDS Function Generator</li>
                <li>Analog System Design Kit(ASLK-Pro)</li>
              </ul>

              <h3>List of Experiments:</h3>
              <ul>
                <li>
                  Design and testing of Inverting, Non inverting and
                  Differential amplifiers.
                </li>
                <li>
                  Design and testing of Integrator, differentiator and
                  Instrument amplifiers.
                </li>
                <li>
                  Design and testing of Active low pass, High pass and band pass
                  filters.
                </li>
                <li>
                  Design and testing of Astable&Monostablemultivibrators and
                  Schmitt Trigger Phase shift and Wien bridge oscillators using
                  op amp.
                </li>
                <li>
                  Design and testing of Astable and Monostablemultivibrators
                  using NE555 Timer.
                </li>
                <li>
                  Design and testing of PLL characteristics and its use as
                  Frequency Multiplier.
                </li>
                <li>
                  Design and testing of DC power supply using LM317 and LM723.
                </li>
                <li>Study of SMPS.</li>
                <li>
                  Simulation of various amplifiers, D/A, A/D converters, Analog
                  Multiplier, CMOS Inverter, NAND and NOR.
                </li>
              </ul>
            </div>
          </div>
          </div>
          <div className="row-laboratory">
          <div className="row">
            <div className="col-lg-6">
            <img src={lic2} alt="Image 2" className="deptlab-image" />
            </div>
            <div className="deptlab-content">
              <h3>Beyond the syllabus experiments:</h3>
              <ul>
                <li>Pulse width modulation using IC 555.</li>
                <li>Adder and Subtractor using IC 741.</li>
              </ul>
              <h3>Utilization of the laboratory:</h3>
              <ul>
                <li>Linear Integrated Circuits Laboratory for ECE II year/IV sem.</li>
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

export default Liclab;
