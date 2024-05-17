import React,{useEffect} from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import texaslab from '../../assets/Images/texaslab.png'

function ScrollToTopOnMount() {
  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, []); 

  return null; 
}

const Texaslab = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="bg-light">
        <div className="englab-banner">
          <h2>TEXAS INSTRUMENTS INNOVATION CENTRE</h2>
        </div>
      </div>

      <div className="container">
      <div className="lab-incharge">
        <div className="col-lg-6">
        <div className="lab-staffdetails">
          <p>Laboratory In-charge : Mr. K. Vigneshwaran AP/ECE</p>
          <p>Technical supporting staff : Mrs.M.Brindha</p>
        </div>
        </div>
      </div>
      </div>

      <div className="container">
      <div className="two-row-container">
        <div className="row-laboratory">
        <div className="row">
          <div className="col-lg-6">
          <img src={texaslab} alt="Image 1" className="deptlab-image" />
          </div>
          <div className="deptlab-content">
            <h3>Major Equipment :</h3>
            <ul>
              <li>
                Personal Computers.
              </li>
              <li>ASLK PRO Kit and Sensor Hub Booster Pack bundle</li>
              <li>CC110L Booster pack and TIVA TM4C123G Lauchpad Bundle.</li>
              <li>
                TIVA Development board and Ez430RF-2500 MSP430 Wireless
                Development Tools.
              </li>
              <li>MSP 430 G2 Launchpad and MSP 430 F5969 Launch Pad.</li>
              <li>
                SimpleLink Wi-Fi CC3100 and CC3200 BoosterPack and TM CC2650
                Wireless MCU LaunchPad Kit and MSP430F5529 LaunchPad Evaluation
                Kit.
              </li>
              <li>Sensor module and TI Breadboard with Power
                Management Lab Kit (PMLK).</li>
              <li>Code Composer Studio V 6.1.0, Energia
                IDE v17 and TINA Simulation Software.</li>
            </ul>
          </div>
        </div>
        </div>
        <div className="row-laboratory">
        <div className="row">
          <div className="deptlab-content">
            <h3>Utilization of the laboratory:</h3>
            <ul>
              <li>Project Laboratory for UG and PG.</li>
              <li>Conducting Texas Instruments workshop, seminars and Value Added Courses.</li>
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
  );
};

export default Texaslab;
