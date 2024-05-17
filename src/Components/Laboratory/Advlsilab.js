import React, {useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import advlsi1 from '../../assets/Images/advlsi1.png'

function ScrollToTopOnMount() {
  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, []); 

  return null; 
}

const Advlsilab = () => {
  return (
    <div>
      <>
        <div>
          <Navbar />
        </div>

        <div className="bg-light">
          <div className="englab-banner">
            <h2>ADVANCED VLSI LABORATORY</h2>
          </div>
        </div>

        <div className='container'>
        <div className="lab-incharge">
          <div className='col-lg-6'>
          <div className="lab-staffdetails">
            <p>LaboratoryIn-charge: Dr.B. Viswanathan ASP/ECE</p>
            <p>Technical supporting staff: Mrs.M.Brindha</p>
          </div>
          </div>
        </div>
        </div>

        <div className='container'>
        <div className="two-row-container">
        <div className="row-laboratory">
          <div className="row">
            <div className='col-lg-6'>
            <img src={advlsi1} alt="Image 1" className="deptlab-image" />
            </div>
            <div className="deptlab-content">
              <h3>Major Equipment :</h3>
              <ul>
                <li>Personal Computers</li>
                <li>Xilinx Zynq Ultrascale+ MPSOC ZCU104</li>
                <li>Xilinx Kintex -7 KC705 Evaluation Kit</li>
                <li>Xilinx Zynq-7000 ZC702 Evaluation Kit</li>
                <li>Digilent Zedboard</li>
                <li>Genesys 2 Kintex 7 Development Board</li>
                <li>Digilent Nexys Video</li>
                <li>Digilent Zybo Z7-20</li>
                <li>Xilinx Vivado Software</li>
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
                <li>Conducting Xilinx FPGA workshop, seminars & Value-Added Courses.</li>
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
  )
}

export default Advlsilab
