import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Images/logo.png";

const Navbar = () => {
  return (
    // <div className="container">
    // <nav className="header">
    //   <div className="navbar">
    //     <a className="navbar-brand" href="/">
    //       <img className="image-navbar" src={Logo} alt="" />
    //     </a>

    //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //     <span className="navbar-toggler-icon"></span>
    //   </button>

    //   <div className="collapse navbar-collapse" id="navbarNav">
    //     <ul className="nav-header">
    //       <li className="nav-option">
    //         <Link to="/" className="nav-link">
    //           Home
    //         </Link>
    //       </li>

    //       <li className="nav-option">
    //         <Link to="/About" className="nav-link">
    //           About
    //         </Link>
    //       </li>

    //       <li className="nav-option">
    //         <Link to="/Management" className="nav-link">
    //           Management
    //         </Link>
    //       </li>

    //       <li className="nav-option">
    //         <Link to="/Achievements" className="nav-link">
    //           Achievements
    //         </Link>
    //       </li>

    //       <li className="nav-option">
    //         <Link to="/Placements" className="nav-link">
    //           Placement
    //         </Link>
    //       </li>
    //     </ul>
    //     </div>
    //   </div>
    // </nav>
    // </div>



    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img className="image-navbar" src={Logo} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/management" className="nav-link">
                Management
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/achievements" className="nav-link">
                Achievements
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/placements" className="nav-link">
                Placement
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}


export default Navbar;
