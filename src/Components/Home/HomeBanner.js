import React from "react";
import banner from "../../assets/Images/banner.png";
import HomeContent from "./HomeContent";

const Homebanner = () => {
  return (
    <>
    
      <div>
        <div className="banner">
          <img className="image-banner" src={banner} alt="home-banner" />
        </div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="banner-text">
              <h1 className="dept">
                Electronics and Communication Engineering
              </h1>
              <h1 className="banner-content">
                "Lorem Ipsum is simply dummy text of the printing and
                typesetting industry."
              </h1>
            </div>
          </div>
        </div>
      </div>
    
      <HomeContent />
    </>
  );
};

export default Homebanner;
