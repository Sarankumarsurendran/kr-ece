import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import hack1 from "../../assets/Achievementimg/hack1.jpeg";
import hack2 from "../../assets/Achievementimg/hack2.jpeg";
import a1 from "../../assets/Achievementimg/a1.jpeg";
import a2 from "../../assets/Achievementimg/a2.jpeg";
import a3 from "../../assets/Achievementimg/a3.jpeg";
import a4 from "../../assets/Achievementimg/a4.jpeg";
import sih from "../../assets/Achievementimg/sih.jpeg";
import sih1 from "../../assets/Achievementimg/sih1.jpeg";
import sih2 from "../../assets/Achievementimg/sih2.jpeg";
import sih3 from "../../assets/Achievementimg/sih3.jpeg";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

const Achievements = () => {
  return (
    <div>
      <Navbar />

      <div className="bg-light">
        <div className="placement-banner">
          <h2 className="banner-size fw-bold">ACHIEVEMENTS</h2>
        </div>
      </div>

      <div className="ranking-students">
        <h3 className="ach-heading">Our Top Ranking Students</h3>
      </div>

      <OwlCarousel
        className="owl-theme"
        loop
        autoplay={true}
        items="2"
        dots={true}
        smartSpeed={2000}
        nav={false}
        margin={20}
        center={true}
        autoplayTimeout={5000}
        responsive={{
          360: {
            items: "1",
          },
          414: {
            items: "1",
          },
          670: {
            items: "2",
          },
          992: {
            items: "2",
          },
          1200: {
            items: "2",
          },
        }}
      >
        <div className="rank-img">
          <img className="pack-img" src={a1} />
        </div>
        <div className="rank-img">
          <img className="pack-img" src={a2} />
        </div>
        <div className="rank-img">
          <img className="pack-img" src={a3} />
        </div>
        <div className="rank-img">
          <img className="pack-img" src={a4} />
        </div>
      </OwlCarousel>

      <div className="ranking-students1">
        <h3 className="ach-heading1">Hackathon</h3>
      </div>

       <div className="Achievements-csl">
      <OwlCarousel
        className="owl-theme"
        loop
        autoplay={true}
        items="2"
        dots={true}
        smartSpeed={2000}
        nav={false}
        margin={20}
        center={true}
        autoplayTimeout={5000}
        responsive={{
          360: {
            items: "1",
          },
          414: {
            items: "1",
          },
          670: {
            items: "2",
          },
          992: {
            items: "2",
          },
          1200: {
            items: "2",
          },
        }}
      >
        <div className="rank-img">
          <img className="pack-img" src={hack1} />
        </div>
        <div className="rank-img">
          <img className="pack-img" src={hack2} />
        </div>
        <div className="rank-img">
          <img className="pack-img" src={sih} />
        </div>
        <div className="rank-img">
          <img className="pack-img" src={sih1} />
        </div>
        <div className="rank-img">
          <img className="pack-img" src={sih2} />
        </div>
        <div className="rank-img">
          <img className="pack-img" src={sih3} />
        </div>
      </OwlCarousel>
      </div>

      <div>
        <Footer />
      </div>

      <ScrollToTopOnMount></ScrollToTopOnMount>
    </div>
  );
};

export default Achievements;
