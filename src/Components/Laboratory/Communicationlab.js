import React, {useEffect} from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import clab1 from "../../assets/Images/clab1.png";
import clab2 from "../../assets/Images/clab2.png";

function ScrollToTopOnMount() {
  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, []); 

  return null; 
}

const Communicationlab = () => {
  return (
    <div>
      <>
        <div>
          <Navbar />
        </div>

        <div className="bg-light">
          <div className="englab-banner">
            <h2>COMMUNICATION SYSTEMS LABORATORY</h2>
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
            <img src={clab1} alt="Image 1" className="deptlab-image1" />
            </div>
            <div className="deptlab-content">
              <h3>Major Equipment :</h3>
              <ul>
                <li>
                  Antenna Trainer system, Amplitude Modulation Transmitter and
                  Demodulation Receiver Kit.
                </li>
                <li>
                  Frequency Modulation Transmitter and Demodulation Receiver
                  Kit, PAM ,TDM Modulation, Demodulation and Demultiplexing Kit.
                </li>
                <li>
                  PAM/PWM/PPM Modulator/Demodulator KitPulse Code Modulation &
                  Demodulation Kit, Data Conditioning andReconditioning &
                  Carrier Modulation and Demodulation Kit(CRO).
                </li>
                <li>
                  Delta/Sigma Delta &Adaptive Delta Modulation,Demodulation Kit,
                  QPSK/DQPSK Modulation & Demodulation Kit.
                </li>
                <li>
                  Digital Storage Oscilloscope and Decade Inductance Box, VCO
                  Using IC 565,Phase Detector Using IC565.
                </li>
                <li>
                  FM Transmitter Receiver Kit and Frequency Division Mux/Demux,
                  Kit PCM Mod/Demod Kit
                </li>
              </ul>

              <h3>List of Experiments:</h3>
              <ul>
                <li>
                  Signal Sampling and reconstruction, Time Division
                  Multiplexing.
                </li>
                <li>
                  AM & FM Modulator and Demodulator, Pulse Code Modulation and
                  Demodulation.
                </li>
                <li>
                  Delta Modulation and Demodulation, Observation (simulation) of
                  signal constellations of BPSK, QPSK and QAM.
                </li>
                <li>
                  Line coding schemes, Simulation of FSK, PSK and DPSK schemes.
                </li>
                <li>
                Simulation of Linear Block Codes, communication link and Zero forcing & LMS algorithm.
                </li>
              </ul>
            </div>
          </div>
          </div>
          <div className="row-laboratory">
          <div className="row">
            <div className="col-lg-6">
            <img src={clab2} alt="Image 2" className="deptlab-image" />
            </div>
            <div className="deptlab-content">
              <h3>Beyond the syllabus experiments:</h3>
              <ul>
                <li>Frequency division, Multiplexer and Demultiplexer .</li>
                <li>PAM, PPM, PWM.</li>
              </ul>
              <h3>Utilization of the laboratory:</h3>
              <ul>
                <li>
                Communication Systems Laboratory for ECE III year/V sem.
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

export default Communicationlab;
