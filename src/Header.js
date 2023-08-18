import React, { useState } from 'react';
import personImage from '../src/assets/avatars.jpg';
import cvImage from '../src/assets/Resume.png'; // Replace 'your-cv.png' with the actual CV image filename
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import './Header.css';

const Header = () => {
  const [showResume, setShowResume] = useState(false);

  const toggleResume = () => {
    setShowResume(!showResume);
  };

  return (
    <header className="header-container py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Text */}
          <div className="col-lg-6">
            <h1 className="name">Izhar Ali</h1>
            <h2 className="job-title">Jr. DevOps Engineer and Designer</h2>
            <p className="description">
              Freelancer providing services for programming and design content needs. Join me down below and let's get
              cracking!
            </p>

            <div className="text-center text-lg-start">
              <button className="btn btn-outline-dark me-3">Contact</button>
              <button className="btn btn-outline-dark" onClick={toggleResume}>
                Resume
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="col-lg-6 text-center">
            <div className="profile-picture mx-auto mb-4 rounded-circle">
              <img src={personImage} alt="Person" className="img-fluid rounded-circle" />
            </div>

            {/* Unique Style for CV */}
            <div className={`cv-container ${showResume ? 'show-cv' : ''}`}>
              <img src={cvImage} alt="My CV" className="cv-image" />
            </div>

            {/* Icons */}
            <div className="social-icons d-flex justify-content-center justify-content-lg-end">
              <ul className="list-unstyled text-lg-end">
                <li>
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <AiFillTwitterCircle />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/izhar-ali-/" target="_blank" rel="noopener noreferrer">
                    <AiFillLinkedin />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Izhar5528?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <AiFillGithub />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;






