import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import eglab1 from "../../assets/Images/eglab1.png";
import eglab2 from "../../assets/Images/eglab2.png";
import Footer from "../Footer/Footer";

function ScrollToTopOnMount() {
  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, []); 

  return null; 
}

const Engineeringlab = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
<div className="bg-light">
<div className="englab-banner">
        <h2>ENGINEERING PRACTICES LABORATORY</h2>
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

      {/*  <div className="englab-container">
        <div className="lab-image">
          <img src={eglab1} alt="chooseimage" />
        </div>
        <div className="lab-content">
          <h2 className="heading">Our Laboratory</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.{" "}
          </p>
        </div>    
  </div> */}

      <div className="container">
      <div className="two-row-container">
        <div className="row-laboratory">
        <div className="row">
          <div className="col-lg-6">
          <img src={eglab1} alt="Image 1" className="deptlab-image" />
          </div>
          <div className="deptlab-content">        
          <h3>Major Equipment :</h3>
            <ul>
              <li>Cathode Ray Oscilloscope</li>
              <li>Function Generators</li>
              <li>Dual Regulated Power Supply</li>
            </ul>

            <h3>List of Experiments:</h3>
            <ul>
              <li>
                Study of Electronic components and equipments – Resistor, colour
                coding measurement of AC signal parameter (peak-peak, RMS
                period, frequency) using CR.
              </li>
              <li>Study of logic gates AND, OR, EOR and NOT.</li>
              <li>Generation of Clock Signal.</li>
              <li>Soldering practice – Components Devices and Circuits – Using general purpose PCB.</li>
              <li>Measurement of ripple factor of HWR and FWR.</li>
            </ul>
          </div>
        </div>
        </div>
        <div className="row-laboratory">
        <div className="row">
          <div className="col-lg-6">
          <img src={eglab2} alt="Image 2" className="deptlab-image" />
          </div>
          <div className="deptlab-content">
          <h3>Beyond the syllabus experiments:</h3>
            <ul>
              <li>Adder and Subtractor using basic ICs.</li>
            </ul>
            <h3>Utilization of the laboratory:</h3>
            <ul>
              <li>Engineering Practices Laboratory for I year ECE/II sem.</li>
            </ul>
          </div>
        </div>
      </div>
      </div>
      </div>
      
      <div>
        <Footer />
        <ScrollToTopOnMount />
      </div>
    </>
  );
};

export default Engineeringlab;
