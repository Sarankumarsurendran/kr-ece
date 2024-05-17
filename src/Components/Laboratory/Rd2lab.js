import React,{useEffect} from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import randd2 from '../../assets/Images/randd2.png'

function ScrollToTopOnMount() {
  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, []); 

  return null; 
}

const Rd2lab = () => {
  return (
    <>
    <div>
     <Navbar />
    </div>
    <div className="bg-light">
      <div className="englab-banner">
        <h2>RESEARCH AND DEVELOPMENT LABORATORY-II</h2>
      </div>

    </div>

    <div className='container'>
    <div className="lab-incharge">
      <div className='col-lg-6'>
      <div className="lab-staffdetails">
        <p>Laboratory In-charge : Dr.C.Jeyalakshmi Professor/ECE</p>
        <p>Technical supporting staff :Ms.A. ReshmiJoyline</p>
      </div>
      </div>
    </div>
    </div>

    <div className='container'>
    <div className="two-row-container">
      <div className='row-laboratory'>
      <div className="row">
        <div className='col-lg-6'>
        <img src={randd2} alt="Image 1" className="deptlab-image" />
        </div>
        <div className="deptlab-content">
          <h3>Major Equipment :</h3>
          <ul>
            <li>Personal Computers with MATLAB.</li>
            <li>CADENCE</li>
            <li>AARON EDA.</li>
            <li>
            KEIL & FLASH MAGIC.
            </li>
            <li>
            ARM Processors.
            </li>
            <li>
            Network Simulator 2.
            </li>
            <li>
            NSIM and LSIM.
            </li>
            <li>
            Arduino and Rasberrypi.
            </li>
          </ul>
        </div>
      </div>
      </div>
      <div className='row-laboratory'>
      <div className="row">
        <div className="deptlab-content">
          <h3>Utilization of the laboratory:</h3>
          <ul>
            <li>
            Project Laboratory for UG and PG.
            </li>
            <li>
            Conducting Workshop, seminars and Value Added Courses.
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

export default Rd2lab
