import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import l1 from "../../assets/Images/l1.png";
import l2 from "../../assets/Images/l2.png";
import l3 from "../../assets/Images/l3.png";
import l4 from "../../assets/Images/l4.png";
import l5 from "../../assets/Images/l5.png";
import l6 from "../../assets/Images/l6.png";
import l7 from "../../assets/Images/l7.png";
import l8 from "../../assets/Images/l8.png";
import l9 from "../../assets/Images/l9.png";
import l10 from "../../assets/Images/l10.png";
import l11 from "../../assets/Images/l11.png";
import l12 from "../../assets/Images/l12.png";
import l13 from "../../assets/Images/l13.png";
import l14 from "../../assets/Images/l14.png";
import l15 from "../../assets/Images/l15.png";
import l16 from "../../assets/Images/l16.png";
import l17 from "../../assets/Images/l17.png";
import l18 from "../../assets/Images/l18.png";
import l19 from "../../assets/Images/l19.png";
import l20 from "../../assets/Images/l20.png";
import l21 from "../../assets/Images/l21.png";
import l22 from "../../assets/Images/l22.png";
import l23 from "../../assets/Images/l23.png";
import l24 from "../../assets/Images/l24.png";

const Homecarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    
    <div className="carousel-container1">
      <div className="container">
      
        <Slider {...settings} >
          <div className="carousel">
            <img className="rec-logo" src={l1} alt="Slide 1" />
          </div>
          <div className="carousel">
            <img className="rec-logo" src={l2} alt="Slide 2" />
          </div>
          <div className="carousel">
            <img className="rec-logo" src={l3} alt="Slide 3" />
          </div>
          <div className="carousel">
            <img className="rec-logo" src={l4} alt="Slide 4" />
          </div>
          <div className="carousel">
            <img className="rec-logo" src={l5} alt="Slide 5" />
          </div>
          <div className="carousel">
            <img className="rec-logo" src={l6} alt="Slide 6" />
          </div>
          <div className="carousel">
            <img className="rec-logo" src={l7} alt="Slide 7" />
          </div>
          <div className="carousel">
            <img className="rec-logo" src={l8} alt="Slide 8" />
          </div>
          <div className="carousel">
            <img className="rec-logo" src={l9} alt="Slide 9" />
          </div>
          <div className="carousel">
            <img className="rec-logo" src={l10} alt="Slide 10" />
          </div>
          <div className="carousel">
            <img className="rec-logo" src={l11} alt="Slide 11" />
          </div>
          <div className="carousel">
            <img className="rec-logo" src={l12} alt="Slide 12" />
          </div>
          <div className="carousel">
            <img className="rec-logo" src={l13} alt="Slide 13" />
          </div>
          <div className="carousel">
            <img className="rec-logo" src={l14} alt="Slide 14" />
          </div>
          <div className="carousel">
            <img className="rec-logo" src={l15} alt="Slide 15" />
          </div>
          <div className="carousel">
            <img className="rec-logo" src={l16} alt="Slide 16" />
          </div>
          <div className="carousel">
            <img className="rec-logo" src={l17} alt="Slide 17" />
          </div>
          <div className="carousel">
            <img className="rec-logo" src={l18} alt="Slide 18" />
          </div>
          <div className="carousel">
            <img className="rec-logo" src={l19} alt="Slide 19" />
          </div>
          <div className="carousel">
            <img className="rec-logo" src={l20} alt="Slide 20" />
          </div>
          <div className="carousel">
            <img className="rec-logo" src={l21} alt="Slide 21" />
          </div>
          <div className="carousel">
            <img className="rec-logo" src={l22} alt="Slide 22" />
          </div>
          <div className="carousel">
            <img className="rec-logo" src={l23} alt="Slide 23" />
          </div>
          <div className="carousel">
            <img className="rec-logo" src={l24} alt="Slide 24" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Homecarousel;
