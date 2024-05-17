import React, {useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import cn1 from '../../assets/Images/cn1.png'
import cn2 from '../../assets/Images/cn2.png'
import Footer from '../Footer/Footer'

function ScrollToTopOnMount() {
  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, []); 

  return null; 
}

const Cnlab = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="bg-light">
        <div className="englab-banner">
          <h2>COMPUTER NETWORKS LABORATORY</h2>
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
          <img src={cn1} alt="Image 1" className="deptlab-image1" />
          </div>
          <div className="deptlab-content">
            <h3>Major Equipment :</h3>
            <ul>
              <li>Personal Computers</li>
              <li>Cisco Packet Tracer</li>
              <li>
                LSIM
              </li>
              <li>NSIM</li>
              <li>Turbo C</li>
              <li>LAN Trainer kit</li>
              <li>Tel Net</li>
            </ul>

            <h3>List of Experiments:</h3>
            <ul>
              <li>
              Implementation of Error Detection / Error Correction Techniques.
              </li>
              <li>Implementation of Stop and Wait Protocol and sliding window.</li>
              <li>
              Implementation and study of Goback-N and selective repeat protocols.
              </li>
              <li>
              Implementation of HDLC.
              </li>
              <li>
              Study of socket programming and client – server model.
              </li>
              <li>
              Socket programming for Echo/Ping/Talk Commands.
              </li>
              <li>
              Study the performance of network with CSMA/CA protocol and compare with CSMA/CD.
              </li>
              <li>Create network topology – star, bus and ring.</li>
              <li>Implementation of distance vector.</li>
              <li>Implementation of link state routing algorithm.</li>
              <li>Study of Network simulator (NS) and simulation of Congestion Control Algorithms using NS.</li>
              <li>Encryption and Decryption.</li>
            </ul>
          </div>
        </div>
        </div>
        <div className='row-laboratory'>
        <div className="row">
          <div className='col-lg-6'>
          <img src={cn2} alt="Image 2" className="deptlab-image" />
          </div>
          <div className="deptlab-content">
            <h3>Beyond the syllabus experiments:</h3>
            <ul>
              <li>Creation of Wireless Networking model using TCL Script.</li>
            </ul>
            <h3>Utilization of the laboratory:</h3>
            <ul>
              <li>
              Computer Networks Laboratory for III year ECE/VIsem.
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

export default Cnlab
