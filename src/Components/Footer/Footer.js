import React from "react";
import krcelogo from "../../assets/Images/krcelogo.png";
import naac from "../../assets/Images/naac.png";
import tnea from "../../assets/Images/tnea.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-row">
          <div class="row align-items-center">
            <div class="col-lg-4 col-md-4">
              <div className="logo">
                <a href="./">
                  <img className="footer-img" src={krcelogo} alt="KRCE" />
                </a>
              </div>
            </div>
            <div class="col-lg-2 col-md-4 col-6 naacimg">
              <img className="footernaac-img" src={naac} alt="NAAC" />
            </div>
            <div class="col-lg-2 col-md-4 col-6">
              <img className="footertnea-img" src={tnea} alt="NAAC" />
            </div>

            <div class="col-lg-3 col-md-6">
              <div className="contact">
                <h5 className="contact-footer">CONTACT US</h5>
                <p className="footer-mobile">+91 ************</p>
                <p className="footer-mobile">+91 ************</p>
                  <span className="footer-mobile">
                    <i class="fa-solid fa-envelope"></i>
                    {"\t"} ece@krce.in
                  </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
