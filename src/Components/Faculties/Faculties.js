import React, { useEffect } from "react";
import malestaff from "../../assets/Images/malestaff.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

const Faculties = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div>

          <div className=" staff-container-right">
          <div className="container">
            <div className="row faculty">   
            <div className="col-lg-6 my-auto">          
            <div className="staff-content">          
              <h4 className="heading">xxxxx M.E, Phd (Head of Department) </h4>
              <p className="staff-para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.{" "}
              </p>
            </div>
            </div>
            <div className="col-lg-6 my-auto">
            <div className="staff-img">
              <img className="male-staff1" src={malestaff} alt="malestaff" />
            </div>
            </div>
            </div>
          </div>
          </div>
        

        <div className="staff-container-left">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 my-auto">
          <div className="staff-img">
            <img className="male-staff" src={malestaff} alt="malestaff" />
          </div>
          </div>
          <div className="col-lg-6 my-auto">
          <div className="staff-content">
            <h4 className="heading">
              xxxxx M.E, Phd (Assistant Head of Department){" "}
            </h4>
            <p className="staff-para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
          </div>
          </div>
          </div>
          </div>
        </div>

        <div className=" staff-container-right">
          <div className="container">
            <div className="row faculty">   
            <div className="col-lg-6 my-auto">          
            <div className="staff-content">          
              <h4 className="heading">xxxxx M.E, Phd (Assistant Professor) </h4>
              <p className="staff-para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.{" "}
              </p>
            </div>
            </div>
            <div className="col-lg-6 my-auto">
            <div className="staff-img1">
              <img className="male-staff1" src={malestaff} alt="malestaff" />
            </div>
            </div>
            </div>
          </div>
          </div>

          <div className="staff-container-left">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 my-auto">
          <div className="staff-img">
            <img className="male-staff" src={malestaff} alt="malestaff" />
          </div>
          </div>
          <div className="col-lg-6 my-auto">
          <div className="staff-content">
            <h4 className="heading">
              xxxxx M.E, Phd (Assistant Professor){" "}
            </h4>
            <p className="staff-para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
          </div>
          </div>
          </div>
          </div>
        </div>

        <div className=" staff-container-right">
          <div className="container">
            <div className="row faculty">   
            <div className="col-lg-6 my-auto">          
            <div className="staff-content">          
              <h4 className="heading">xxxxx M.E, Phd (Assistant Professor) </h4>
              <p className="staff-para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.{" "}
              </p>
            </div>
            </div>
            <div className="col-lg-6 my-auto">
            <div className="staff-img1">
              <img className="male-staff1" src={malestaff} alt="malestaff" />
            </div>
            </div>
            </div>
          </div>
          </div>

          <div className="staff-container-left">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 my-auto">
          <div className="staff-img">
            <img className="male-staff" src={malestaff} alt="malestaff" />
          </div>
          </div>
          <div className="col-lg-6 my-auto">
          <div className="staff-content">
            <h4 className="heading">
              xxxxx M.E, Phd (Assistant Professor){" "}
            </h4>
            <p className="staff-para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
          </div>
          </div>
          </div>
          </div>
        </div>

        <div className=" staff-container-right">
          <div className="container">
            <div className="row faculty">   
            <div className="col-lg-6 my-auto">          
            <div className="staff-content">          
              <h4 className="heading">xxxxx M.E, Phd (Assistant Professor) </h4>
              <p className="staff-para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.{" "}
              </p>
            </div>
            </div>
            <div className="col-lg-6 my-auto">
            <div className="staff-img1">
              <img className="male-staff1" src={malestaff} alt="malestaff" />
            </div>
            </div>
            </div>
          </div>
          </div>

          <div className="staff-container-left">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 my-auto">
          <div className="staff-img">
            <img className="male-staff" src={malestaff} alt="malestaff" />
          </div>
          </div>
          <div className="col-lg-6 my-auto">
          <div className="staff-content">
            <h4 className="heading">
              xxxxx M.E, Phd (Assistant Professor){" "}
            </h4>
            <p className="staff-para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
          </div>
          </div>
          </div>
          </div>
        </div>

        <div className=" staff-container-right">
          <div className="container">
            <div className="row faculty">   
            <div className="col-lg-6 my-auto">          
            <div className="staff-content">          
              <h4 className="heading">xxxxx M.E, Phd (Assistant Professor) </h4>
              <p className="staff-para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.{" "}
              </p>
            </div>
            </div>
            <div className="col-lg-6 my-auto">
            <div className="staff-img1">
              <img className="male-staff1" src={malestaff} alt="malestaff" />
            </div>
            </div>
            </div>
          </div>
          </div>

          <div className="staff-container-left">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 my-auto">
          <div className="staff-img">
            <img className="male-staff" src={malestaff} alt="malestaff" />
          </div>
          </div>
          <div className="col-lg-6 my-auto">
          <div className="staff-content">
            <h4 className="heading">
              xxxxx M.E, Phd (Assistant Professor){" "}
            </h4>
            <p className="staff-para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
          </div>
          </div>
          </div>
          </div>
        </div>

        <div className=" staff-container-right">
          <div className="container">
            <div className="row faculty">   
            <div className="col-lg-6 my-auto">          
            <div className="staff-content">          
              <h4 className="heading">xxxxx M.E, Phd (Assistant Professor) </h4>
              <p className="staff-para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.{" "}
              </p>
            </div>
            </div>
            <div className="col-lg-6 my-auto">
            <div className="staff-img1">
              <img className="male-staff1" src={malestaff} alt="malestaff" />
            </div>
            </div>
            </div>
          </div>
          </div>

          <div className="staff-container-left">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 my-auto">
          <div className="staff-img">
            <img className="male-staff" src={malestaff} alt="malestaff" />
          </div>
          </div>
          <div className="col-lg-6 my-auto">
          <div className="staff-content">
            <h4 className="heading">
              xxxxx M.E, Phd (Assistant Professor){" "}
            </h4>
            <p className="staff-para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
          </div>
          </div>
          </div>
          </div>
        </div>

        

        </div>

        <Footer />

      <ScrollToTopOnMount></ScrollToTopOnMount>
    </>
  );
};

export default Faculties;
