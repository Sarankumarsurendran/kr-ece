import React, {useEffect} from "react";
import about from "../../assets/Images/about.png";
import Footer from "../Footer/Footer";

function ScrollToTopOnMount() {
  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, []); 

  return null; 
}

const Aboutpage = () => {
  return (
    <div>

      
      <div className="bg-light">
        <div className="englab-banner">
          <h2 className="ab-mg-pl-banner fw-bold">ABOUT</h2>
        </div>
      </div>

      <div className="container">
      <div className="row-container">
        <div className="row align-items-center">
        <div className="col-lg-6">
          <img className="about-pic" src={about} alt="about-Image" />       
        </div>
        <div className="col-lg-6">
        <div className="about-content p-5">
          <h2 className="abouthead-style">About Us</h2>
          <p className="aboutcont-style">
            Electronics and communication Engineering plays an evolutional role
            in everyday humanâ€™s life and thus it has a vital role in enriching
            the knowledge and career opportunities for students. The department
            has post graduation course M.E communication systems. Our faculty
            members are highly qualified and dedicated. Department of ECE has
            recognised research centre under Anna university, Chennai. Currently
            many research scholars are doing research under our research centre.
            The department of ECE has well equipped lab facility with the cost
            of 224 lakhs which includes industry supported labs such as Texas
            Innovation Centre, Advanced VLSI lab sponsored by AICTE MORDROB
            scheme and National Instrumentâ€™s Lab View.
          </p>
        </div>
        </div>
        </div>
      </div>
      </div>

      <Footer />

      <ScrollToTopOnMount></ScrollToTopOnMount>
    </div>
  );
};

export default Aboutpage;
