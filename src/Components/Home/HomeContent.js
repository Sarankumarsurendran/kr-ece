import React, { useState } from "react";
import { Link } from "react-router-dom";
import why from "../../assets/Images/why.png";
import staff from "../../assets/Images/staff.png";
import students from "../../assets/Images/students.png";
import alumni from "../../assets/Images/alumni.png";
import awards from "../../assets/Images/awards.png";
import faculties from "../../assets/Images/faculties.png";
import lab from "../../assets/Images/lab.png";
import lab1 from "../../assets/labimg/lab1.jpg";
import lab2 from "../../assets/labimg/lab2.jpg";
import lab3 from "../../assets/labimg/lab3.jpg";
import lab4 from "../../assets/labimg/lab4.png";
import lab5 from "../../assets/labimg/lab5.jpg";
import lab6 from "../../assets/labimg/lab6.jpg";
import lab7 from "../../assets/labimg/lab7.jpg";
import lab8 from "../../assets/labimg/lab8.jpg";
import lab9 from "../../assets/labimg/lab9.jpg";
import lab10 from "../../assets/labimg/lab10.jpg";
import lab11 from "../../assets/labimg/lab11.jpg";
import lab12 from "../../assets/labimg/lab12.png";
import lab13 from "../../assets/labimg/lab13.jpg";
import lab14 from "../../assets/labimg/lab14.jpg";
import lab15 from "../../assets/labimg/lab15.jpg";
import lab16 from "../../assets/labimg/lab16.jpg";
import lab17 from "../../assets/labimg/lab17.png";
import lab18 from "../../assets/labimg/lab18.png";
import lab19 from "../../assets/labimg/lab19.png";
import lab20 from "../../assets/labimg/lab20.jpg";
import lab21 from "../../assets/labimg/lab21.jpg";
import lap from "../../assets/Images/lap.png";
import youtube from "../../assets/Images/youtube.png";
import Homecarousel from "../Recruitercarousel/Homecarousel";
import Footer from "../Footer/Footer";

const HomeContent = () => {
  const [FacultiesCount, setFacultiesCount] = useState(30);
  const [StudentsCount, setStudentsCount] = useState(180);
  const [AlumniCount, setAlumniCount] = useState(2000);
  const [AwardsCount, setAwardsCount] = useState(200);

  return (
    <>
      <div className="container">
        <div class="row justify-content-center align-items-center">
          <div class="column">
            <div class="card1">
              <h6 class="vision-mission">Our Vision</h6>
              <p>
                To be distinguished as a prominent program in Electronics and
                Communication Engineering Studies by preparing students for
                Industrial Competitiveness and Societal Challenges.{" "}
              </p>
            </div>
          </div>

          <div class="column">
            <div class="card1">
              <h6 class="vision-mission">Our Mission</h6>
              <p className="mission-para">
                M1. To equip the students with latest technical, analytical and
                practical knowledge. <br></br> M2. To provide vibrant academic
                environment and Innovative Research culture. <br></br> M3. To
                provide opportunities for students to get Industrial Skills and
                internships to meet out the challenges of the society.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container">
        <div className="laptop">
          <div className="lap-pic">
            <img className="lap" src={lap} alt="lap-img" /> */}
      {/* <button class="you-tube" type="button">
              <img className="youtube" src={youtube} alt="youtube-img" />
            </button> */}
      {/* <a href="https://youtu.be/mx2G42nbL64?si=Llm9AVGtNK91Xl4t">
              <img className="youtube" src={youtube} alt="youtube-img" />
            </a>
            </div> */}
      {/* </div> */}
      {/* </div>
      </div> */}

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
          <img className="lap" src={lap} alt="lap-img" />
            <a
            target="_blank"
              className=""
              href="https://youtu.be/mx2G42nbL64?si=Llm9AVGtNK91Xl4t"
            >
              <div className="laptop">
                

                <img className="youtube-icon" src={youtube} alt="youtube-img" />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="ece-dept">
          <div className="row">
            <div className="col-lg-6">
              <div className="content">
                <div className="why-cont p-5">
                  <h2 className="heading">Why Choose ECE ?</h2>
                  <p className="ece-para">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="image">
                <img src={why} alt="chooseimage" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="count-container">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-6">
              <div className="count">
                <img className="count-icon" src={staff} alt="staff-img" />
                <p className="count-para">{`${FacultiesCount}+ Faculties`}</p>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="count">
                <img className="count-icon" src={students} alt="student-img" />
                <p className="count-para">{`${StudentsCount}+ Students`}</p>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="count">
                <img className="count-icon" src={alumni} alt="alumni-img" />
                <p className="count-para">{`${AlumniCount}+ Alumni`}</p>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="count">
                <img className="count-icon" src={awards} alt="awards-img" />
                <p className="count-para">{`${AwardsCount}+ Awards`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="fac-cont">
          <div className="row">
            <div className="col-lg-6">
              <div className="content">
                <div className="fac-content p-5">
                  <h2 className="heading">Our Certified Faculties</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.{" "}
                  </p>
                  <div></div>
                  <Link to="/Faculties">
                    <button
                      type="button"
                      className="btn mt-5 btn-primary know-btn"
                    >
                      Know More <i class="fa-solid fa-arrow-right"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faculty-image">
                <img src={faculties} alt="chooseimage" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="lab-container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="lab-content p-5">
                <h2 className="heading">Our Laboratory</h2>
                <p className="lab-para">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="lab-image">
                <img src={lab} alt="chooseimage" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="lab-row">
          <div class="row">
            <div class="col-md-4 d-flex">
              <div class="lab-card">
                <img src={lab1} class="card-img-top" alt="Placeholder Image" />
                <div class="card-body">
                  <h5 class="card-title">Engineering Practices Laboratory</h5>
                  <p class="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                  <div>
                    <Link to="/Engineeringlab">
                      <button
                        type="button"
                        className="btn mt-5 btn-primary know-btn"
                      >
                        Know More <i class="fa-solid fa-arrow-right"></i>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 d-flex">
              <div class="lab-card">
                <img src={lab2} class="card-img-top" alt="Placeholder Image" />
                <div class="card-body">
                  <h5 class="card-title">Digital System Laboratory</h5>
                  <br></br>
                  <p class="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                  <div>
                    <Link to="/Digitalsyslab">
                      <button
                        type="button"
                        className="btn mt-5 btn-primary know-btn"
                      >
                        Know More <i class="fa-solid fa-arrow-right"></i>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 d-flex">
              <div class="lab-card">
                <img src={lab3} class="card-img-top" alt="Placeholder Image" />
                <div class="card-body">
                  <h5 class="card-title">
                    Linear Integration Circuit Laboratory
                  </h5>
                  <p class="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                  <div>
                    <Link to="/Liclab">
                      <button
                        type="button"
                        className="btn mt-5 btn-primary know-btn"
                      >
                        Know More <i class="fa-solid fa-arrow-right"></i>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lab-row">
          <div class="row">
            <div class="col-md-4 d-flex">
              <div class="lab-card">
                <img src={lab4} class="card-img-top" alt="Placeholder Image" />
                <div class="card-body">
                  <h5 class="card-title">Communication System Laboratory</h5>
                  <p class="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                  <Link to="/Communicationlab">
                    <button
                      type="button"
                      className="btn mt-5 btn-primary know-btn"
                    >
                      Know More <i class="fa-solid fa-arrow-right"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-md-4 d-flex">
              <div class="lab-card">
                <img src={lab5} class="card-img-top" alt="Placeholder Image" />
                <div class="card-body">
                  <h5 class="card-title">
                    Microprocessor & Microcontroller Laboratory
                  </h5>
                  <p class="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.It has survived not only five centuries,
                    but also the leap into electronic. typesetting, remaining
                    essentially unchanged.
                  </p>
                  <Link to="/Mpmclab">
                    <button
                      type="button"
                      className="btn mt-5 btn-primary know-btn"
                    >
                      Know More <i class="fa-solid fa-arrow-right"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-md-4 d-flex">
              <div class="lab-card">
                <img src={lab6} class="card-img-top" alt="Placeholder Image" />
                <div class="card-body">
                  <h5 class="card-title">
                    Digital Signal Processing Laboratory
                  </h5>
                  <p class="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                  <Link to="/Dsplab">
                    <button
                      type="button"
                      className="btn mt-5 btn-primary know-btn"
                    >
                      Know More <i class="fa-solid fa-arrow-right"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lab-row">
          <div class="row">
            <div class="col-md-4 d-flex">
              <div class="lab-card">
                <img src={lab7} class="card-img-top" alt="Placeholder Image" />
                <div class="card-body">
                  <h5 class="card-title">VLSI Design Laboratory</h5>
                  <p class="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                  <Link to="/Vlsilab">
                    <button
                      type="button"
                      className="btn mt-5 btn-primary know-btn"
                    >
                      Know More <i class="fa-solid fa-arrow-right"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-md-4 d-flex">
              <div class="lab-card">
                <img src={lab8} class="card-img-top" alt="Placeholder Image" />
                <div class="card-body">
                  <h5 class="card-title">Computer Network Laboratory</h5>
                  <p class="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                  <Link to="/Cnlab">
                    <button
                      type="button"
                      className="btn mt-5 btn-primary know-btn"
                    >
                      Know More <i class="fa-solid fa-arrow-right"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-md-4 d-flex">
              <div class="lab-card">
                <img src={lab9} class="card-img-top" alt="Placeholder Image" />
                <div class="card-body">
                  <h5 class="card-title">Embedded Laboratory</h5>
                  <p class="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                  <Link to="/Embeddedlab">
                    <button
                      type="button"
                      className="btn mt-5 btn-primary know-btn"
                    >
                      Know More <i class="fa-solid fa-arrow-right"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lab-row">
          <div class="row">
            <div class="col-md-4 d-flex">
              <div class="lab-card">
                <img src={lab10} class="card-img-top" alt="Placeholder Image" />
                <div class="card-body">
                  <h5 class="card-title">Optical & Microwave Laboratory</h5>
                  <p class="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                  <Link to="/Opticallab">
                    <button
                      type="button"
                      className="btn mt-5 btn-primary know-btn"
                    >
                      Know More <i class="fa-solid fa-arrow-right"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-md-4 d-flex">
              <div class="lab-card">
                <img src={lab11} class="card-img-top" alt="Placeholder Image" />
                <div class="card-body">
                  <h5 class="card-title">Circuits & Devices Laboratory</h5>
                  <br></br>
                  <p class="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                  <Link to="/Cdlab">
                    <button
                      type="button"
                      className="btn mt-5 btn-primary know-btn"
                    >
                      Know More <i class="fa-solid fa-arrow-right"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-md-4 d-flex">
              <div class="lab-card">
                <img src={lab12} class="card-img-top" alt="Placeholder Image" />
                <div class="card-body">
                  <h5 class="card-title">Oops & DataStructure Laboratory</h5>
                  <p class="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                  <Link to="/Oopslab">
                    <button
                      type="button"
                      className="btn mt-5 btn-primary know-btn"
                    >
                      Know More <i class="fa-solid fa-arrow-right"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lab-row">
          <div class="row">
            <div class="col-md-4 d-flex">
              <div class="lab-card">
                <img src={lab13} class="card-img-top" alt="Placeholder Image" />
                <div class="card-body">
                  <h5 class="card-title">
                    Research & Development - I Laboratory
                  </h5>
                  <p class="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic.
                  </p>
                  <Link to="/Rd1lab">
                    <button
                      type="button"
                      className="btn mt-5 btn-primary know-btn"
                    >
                      Know More <i class="fa-solid fa-arrow-right"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-md-4 d-flex">
              <div class="lab-card">
                <img src={lab14} class="card-img-top" alt="Placeholder Image" />
                <div class="card-body">
                  <h5 class="card-title">
                    Research & Development - II Laboratory
                  </h5>
                  <p class="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic.
                  </p>
                  <Link to="Rd2lab">
                    <button
                      type="button"
                      className="btn mt-5 btn-primary know-btn"
                    >
                      Know More <i class="fa-solid fa-arrow-right"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-md-4 d-flex">
              <div class="lab-card">
                <img src={lab15} class="card-img-top" alt="Placeholder Image" />
                <div class="card-body">
                  <h5 class="card-title">
                    Texas Instruments Innovation Laboratory
                  </h5>
                  <p class="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic.
                  </p>
                  <Link to="/Texaslab">
                    <button
                      type="button"
                      className="btn mt-5 btn-primary know-btn"
                    >
                      Know More <i class="fa-solid fa-arrow-right"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lab-row">
          <div class="row">
            <div class="col-md-4 d-flex">
              <div class="lab-card">
                <img src={lab16} class="card-img-top" alt="Placeholder Image" />
                <div class="card-body">
                  <h5 class="card-title">Communication Systems Laboratory</h5>
                  <p class="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                  <Link to="/Comlab">
                    <button
                      type="button"
                      className="btn mt-5 btn-primary know-btn"
                    >
                      Know More <i class="fa-solid fa-arrow-right"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-md-4 d-flex">
              <div class="lab-card">
                <img src={lab17} class="card-img-top" alt="Placeholder Image" />
                <div class="card-body">
                  <h5 class="card-title">RF System Design Laboratory</h5>
                  <br></br>
                  <p class="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                  <Link to="/Rflab">
                    <button
                      type="button"
                      className="btn mt-5 btn-primary know-btn"
                    >
                      Know More <i class="fa-solid fa-arrow-right"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-md-4 d-flex">
              <div class="lab-card">
                <img src={lab18} class="card-img-top" alt="Placeholder Image" />
                <div class="card-body">
                  <h5 class="card-title">
                    Analog & Digital Circuits Laboratory
                  </h5>
                  <p class="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                  <Link to="/Adclab">
                    <button
                      type="button"
                      className="btn mt-5 btn-primary know-btn"
                    >
                      Know More <i class="fa-solid fa-arrow-right"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lab-row">
          <div class="row">
            <div class="col-md-4 d-flex">
              <div class="lab-card">
                <img src={lab19} class="card-img-top" alt="Placeholder Image" />
                <div class="card-body">
                  <h5 class="card-title">
                    Circuits & Simulation Integrated Laboratory
                  </h5>
                  <p class="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic.
                  </p>
                  <Link to="/Csilab">
                    <button
                      type="button"
                      className="btn mt-5 btn-primary know-btn"
                    >
                      Know More <i class="fa-solid fa-arrow-right"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-md-4 d-flex">
              <div class="lab-card">
                <img src={lab20} class="card-img-top" alt="Placeholder Image" />
                <div class="card-body">
                  <h5 class="card-title">Advanced VLSI Laboratory</h5>
                  <br></br>
                  <p class="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.It has survived not only five centuries,
                    but also the leap into electronic.
                  </p>
                  <Link to="/Advlsilab">
                    <button
                      type="button"
                      className="btn mt-5 btn-primary know-btn"
                    >
                      Know More <i class="fa-solid fa-arrow-right"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div class="col-md-4 d-flex">
              <div class="lab-card">
                <img src={lab21} class="card-img-top" alt="Placeholder Image" />
                <div class="card-body">
                  <h5 class="card-title">Project Laboratory</h5>
                  <br></br>
                  <p class="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.It has survived not only five centuries,
                    but also the leap into electronic.
                  </p>
                  <Link to="/Projlab">
                    <button
                      type="button"
                      className="btn mt-5 btn-primary know-btn"
                    >
                      Know More <i class="fa-solid fa-arrow-right"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="carousel-container">
        <div class="text-center mt-3">
          <h2 className="rec-style">Our Recruiters</h2>
        </div>
      </div>

      <div>
        <Homecarousel />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default HomeContent;
