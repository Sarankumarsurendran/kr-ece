import React, {useEffect} from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import pro1 from "../../assets/Images/pro1.png";
import pro2 from "../../assets/Images/pro2.png";

function ScrollToTopOnMount() {
  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, []); 

  return null; 
}

const Projlab = () => {
  return (
    <div>
      <>
        <div>
          <Navbar />
        </div>

        <div className="bg-light">
          <div className="englab-banner">
            <h2>PROJECT LABORATORY</h2>
          </div>
        </div>

        <div className="container">
        <div className="two1-row-container">
          <div className="row-laboratory">
          <div className="row">
            <div className="col-lg-6">
            <img src={pro1} alt="Image 1" className="deptlab-image1" />
            </div>
            <div className="deptlab-content">
              <ul>
                <li>
                  Project laboratory is exclusively provided to the students to
                  carry out mini and major project work.
                </li>
                <li>
                  Computing facility with sufficient number of personal
                  computers with high speed Internet connectivity is available.
                </li>
                <li>
                  Students are encouraged to utilize the laboratory for
                  developing their project works/products during and beyond the
                  class hours.
                </li>
                <li>
                  Domain specific faculty members and technical staff are
                  available beyond the working hours to support students for
                  doing project work.
                </li>
                <li>
                  Project laboratory is equipped with educational tools to
                  create interest and better understanding of electronics.
                </li>
                <li>
                  Students are encouraged to do project work in domain wise with
                  the support of the facilities available in the laboratories
                  and Center of Excellence established in the Department namely
                  Texas Instruments laboratory.
                </li>
                <li>
                  Reference books, journals and technical magazines are shared
                  from main and department libraries.
                </li>
                <li>
                  Embedded system development software and tools with evaluation
                  board and necessary hardware items are available in the
                  laboratory to familiarize the students to work in embedded
                  systems.
                </li>
                <li>
                  Previous batches working models/projects and projects reports
                  are available in the laboratory.
                </li>
              </ul>
            </div>
            </div>
          </div>
          <div className="row-laboratory">
          <div className="row">
            <div className="col-lg-6">
            <img src={pro2} alt="Image 2" className="deptlab-image" />
            </div>
            <div className="deptlab-content">
              <h3>Major Equipments:</h3>
              <ul>
                <li>Work benches</li>
                <li>
                  Digital Storage Oscilloscopes and Cathode Ray Oscilloscopes
                </li>
                <li>Signal generators</li>
                <li>Power supplies</li>
                <li>
                  General purpose PCBs and necessary electronic components
                </li>
                <li>Simulation software</li>
                <li>Personal computers with Internet facility</li>
                <li>Embedded systems development boards</li>
                <li>
                  Micro C free version software tool and PIC18F4550 evaluation
                  board
                </li>
                <li>
                  Open source software- MATLAB, Keil-uVision, Xilinx, Code
                  Composer Studio and PSpice
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

export default Projlab;
