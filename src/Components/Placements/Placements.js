import React, {useEffect} from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Navbar from "../Navbar/Navbar";
import Placement from "../../assets/Images/placement.png";
import dummy from "../../assets/Images/dummy.jpg";
import Footer from "../Footer/Footer";

function ScrollToTopOnMount() {
  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, []); 

  return null; 
}

const Placements = () => {
  return (
    <>
      <div className="bg-light">
        <div className="placement-banner">
          <h2 className="banner-size fw-bold">PLACEMENT</h2>
        </div>
      </div>

      <div>
        <Navbar />
      </div>

      <div className="container">
        <div className="row-placement">
          <div class="row justify-content-center align-items-center">
            <div class="column1">
              <div class="card2">
                <h6 class="vision-mission">Vision</h6>
                <p>
                  The Training and Placement Centre will focus on the integral
                  training and development of the students to match global
                  standards, the centre will also emphasis on facilitating the
                  students with every opportunity possible to achieve their
                  career goals through various internship schemes and placements
                  to students.{" "}
                </p>
              </div>
            </div>

            
            <div class="column2">
              <div class="card2">
                <h6 class="vision-mission">Mission</h6>
                The Centre for Training and Placement will help the
                undergraduate, postgraduate students of KRCE through counseling,
                instructions and training for development of desired skills
                essential for suitable job profile and inviting the Corporate
                Industries for campus placement.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
      <div className="about-placement">
        <div className="row">
          <div className="col-lg-6">
        <div className="content p-5">
          <h2 className="heading">About KRCE Placement</h2>
          <p className="place-cont">
            Placement Cell at KRCE is providing ample opportunities for the
            young minds to sharpen their intellect and to mould soft skills
            through regular training programmes, interaction with leaders from
            industry and academia and industry interface through industrial
            visits and projects. Having crossed the threshold into the
            department, students are exposed to an unmatched learning
            experience, which develops their analytical thinking, and stimulates
            in them the acumen to excel in the toughest of competition, finally
            bringing out of them the very best technocrats. There are a large
            number of organization with which we have enjoyed lasting and
            fruitful relationship. These have been visiting the campus year
            after year for recruiting the fresh talent.{" "}
          </p>
        </div>
        </div>
        <div className="col-lg-6">
        <div className="placementimage">
          <img src={Placement} alt="chooseimage" />
        </div>
        </div>
        </div>
      </div>
      </div>

      <div className="place-package">
        <h3 className="ach-heading">
          Our Students got Selected at Top notch MNC Companies with Highest
          Package
        </h3>
      </div>

      <div className="placement">
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
          <img className="pack-img1" src={dummy} alt="image" />
          <p className="batch">10 Lpa</p>
          <p className="batch">2019-2023batch</p>
        </div>
        <div className="rank-img">
          <img  className="pack-img1" src={dummy} alt="image" />
          <p className="batch">7 Lpa</p>
          <p className="batch">2019-2023batch</p>
        </div>
        <div className="rank-img">
          <img  className="pack-img1" src={dummy} alt="image" />
          <p className="batch">10 Lpa</p>
          <p className="batch">2019-2023batch</p>
        </div>
        <div className="rank-img">
          <img  className="pack-img1" src={dummy} alt="image" />     
          <p className="batch">7 Lpa</p>
          <p className="batch">2019-2023batch</p>
        </div>
      </OwlCarousel>
      </div>


      <div className="place-package">
        <h3 className="ach-heading">
          Medium Package
        </h3>
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
          <img  className="pack-img1" src={dummy} alt="image" />
          <p className="batch">5 Lpa</p>
          <p className="batch">2019-2023batch</p>
        </div>
        <div className="rank-img">
          <img  className="pack-img1" src={dummy} alt="image" />
          <p className="batch">4 Lpa</p>
          <p className="batch">2019-2023batch</p>
        </div>
        <div className="rank-img">
          <img  className="pack-img1" src={dummy} alt="image" />
          <p className="batch">6 Lpa</p>
          <p className="batch">2019-2023batch</p>
        </div>
        <div className="rank-img">
          <img  className="pack-img1" src={dummy} alt="image" />
          <p className="batch">4 Lpa</p>
          <p className="batch">2019-2023batch</p>
        </div>
      </OwlCarousel>

      <div className="place-package">
        <h3 className="ach-heading">
          Lowest Package
        </h3>
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
          <img  className="pack-img1" src={dummy} alt="image" />
          <p className="batch">3 Lpa</p>
          <p className="batch">2019-2023batch</p>
        </div>
        <div className="rank-img">
          <img  className="pack-img1" src={dummy} alt="image" />
          <p className="batch">2.5 Lpa</p>
          <p className="batch">2019-2023batch</p>
        </div>
        <div className="rank-img">
          <img  className="pack-img1" src={dummy} alt="image" />
          <p className="batch">3 Lpa</p>
          <p className="batch">2019-2023batch</p>
        </div>
        <div className="rank-img">
          <img  className="pack-img1" src={dummy} alt="image" />
          <p className="batch">3.5 Lpa</p>
          <p className="batch">2019-2023batch</p>
        </div>
      </OwlCarousel>

      <Footer />

      <ScrollToTopOnMount></ScrollToTopOnMount>
    </>
  );
};

export default Placements;
