import React, {useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import oops1 from '../../assets/Images/oops1.png'
import oops2 from '../../assets/Images/oops2.png'

function ScrollToTopOnMount() {
  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, []); 

  return null; 
}


const Oopslab = () => {
  return (
    <>
    <div>
     <Navbar />
    </div>
    <div className="bg-light">
      <div className="englab-banner">
        <h2>OOPS AND DATA STRUCTURES LABORATORY</h2>
      </div>

    </div>

    <div className='container'>
    <div className="lab-incharge">
      <div className='col-lg-6'>
      <div className="lab-staffdetails">
        <p>Laboratory In-charge : Mr. U. SurendarAP/ECE</p>
        <p>Technical supporting staff : Ms. M.Mahalakshmi</p>
      </div>
      </div>
    </div>
    </div>

    <div className='container'>
    <div className="two-row-container">
      <div className='row-laboratory'>
      <div className="row">
        <div className='col-lg-6'>
        <img src={oops1} alt="Image 1" className="deptlab-image1" />
        </div>
        <div className="deptlab-content">
          <h3>Major Equipment :</h3>
          <ul>
            <li>Personal Computers</li>
            <li>C++ Compilers</li>
          </ul>

          <h3>Major Experiments:</h3>
          <ul>
            <li>
            Basic Programs for C++ Concepts.
            </li>
            <li>Array implementation of List Abstract Data Type (ADT).</li>
            <li>
            Linked list and cursor implementation of List ADT.
            </li>
            <li>
            Stack ADT Array and linked list implementations.
            </li>
            <li>
            Program source files for Stack Application 1 and 2.
            </li>
            <li>
            An appropriate header file for the Stack ADT.
            </li>
            <li>
            Implement any Stack Application using array implementation of Stack ADT.
            </li>
            <li>Implementation of Stack ADT.</li>
            <li>
            Implement another Stack Application using array and linked list implementations of Stack ADT.
            </li>
            <li>
            Queue ADT Array and linked list implementations.
            </li>
            <li>
            Search Tree ADT Binary Search Tree.
            </li>
            <li>
            Quick Sort.
            </li>
          </ul>
        </div>
      </div>
      </div>
      <div className='row-laboratory'>
      <div className="row">
        <div className='col-lg-6'>
        <img src={oops2} alt="Image 2" className="deptlab-image" />
        </div>
        <div className="deptlab-content">
          <h3>Utilization of the laboratory:</h3>
          <ul>
            <li>
            OOPS and Data Structures Laboratory for II ECE year / III Sem.
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

export default Oopslab
