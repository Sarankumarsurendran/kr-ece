import React, {useEffect} from "react";
import diglab1 from "../../assets/Images/diglab1.png";
import diglab2 from "../../assets/Images/diglab2.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function ScrollToTopOnMount() {
  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, []); 

  return null; 
}

const Digitalsyslab = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="bg-light">
        <div className="englab-banner">
          <h2>DIGITAL SYSTEM LABORATORY</h2>
        </div>
      </div>

      <div className="container">
      <div className="lab-incharge">
        <div className="col-lg-6">
        <div className="lab-staffdetails">
          <p>Laboratory In-charge : Mr.P.Muralikrishnan, AP/ECE</p>
          <p>Technical supporting staff : Ms.A.Ramyakrishnan, AP/ECE</p>
        </div>
        </div>
      </div>
      </div>

      <div className="container">
      <div className="two-row-container">
        <div className="row-laboratory">
        <div className="row">
          <div className="col-lg-6">
          <img src={diglab1} alt="Image 1" className="deptlab-image1" />
          </div>
          <div className="deptlab-content">
            <h3>Major Equipment :</h3>
            <ul>
              <li>Personal Computer - INTEL PENTIUM DUAL CORE</li>
              <li>Digital IC Trainer Kit</li>
              <li>Digital IC Tester</li>
              <li>HDL simulator</li>
            </ul>

            <h3>List of Experiments:</h3>
            <ul>
              <li>Verification of Boolean Theorems using basic gates</li>
              <li>
                Design and implementation of combinational circuits using basic
                gates for arbitrary functions, code converters.
              </li>
              <li>Design and implement Half/Full Adder and Subtractor.</li>
              <li>
              Design and implement of various combinational circuits using MSI devices.
              </li>
              <li>Design and implement shift registers, synchronous and asynchronous counters.</li>
              <li>Coding combinational and sequential circuits using HDL.</li>
              <li>Design and implementation of a simple digital system.</li>
            </ul>
          </div>
        </div>
        </div>
        <div className="row-laboratory">
        <div className="row">
          <div className="col-lg-6">
          <img src={diglab2} alt="Image 2" className="deptlab-image" />
          </div>
          <div className="deptlab-content">
            <h3>Beyond the syllabus experiments:</h3>
            <ul>
              <li>Simple IC 4011 LED Flasher Circuit.</li>
              <li>Simulation of Sequential Circuits.</li>
            </ul>
            <h3>Utilization of the laboratory:</h3>
            <ul>
              <li>Digital Systems Laboratory for II year CSE /III sem.</li>
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

export default Digitalsyslab;
