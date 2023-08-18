import React, { useState } from 'react';
import profile from '../src/assets/profile.jpg';
import './about.css';

const AboutMe = () => {
  const [showHalfParagraph, setShowHalfParagraph] = useState(true);

  const originalText = `Hello there! I'm thrilled to welcome you to my corner of the digital world. I'm a Junior DevOps Engineer with a passion for efficient systems and seamless user experiences. With a flair for both code and design, I bring a unique blend of technical expertise and creative thinking to the table. In the ever-evolving landscape of technology, I find joy in crafting solutions that bridge the gap between development and operations. My journey began with a fascination for coding and an eye for design, leading me to pursue a career that fuses these two disciplines into a harmonious symphony. From orchestrating automated deployment pipelines to meticulously designing user interfaces, I relish the challenge of creating cohesive and dynamic digital ecosystems. I thrive in collaborative environments where I can contribute my skills to streamline processes, enhance user interactions, and ultimately, elevate the overall product quality. With an insatiable curiosity, I am constantly exploring new tools and methodologies that empower me to stay at the forefront of the DevOps and design realms. As a continuous learner, I am excited to embrace each opportunity to grow, adapt, and create meaningful technological innovations. Join me on this exhilarating journey as I strive to bring innovation, efficiency, and aesthetic appeal to every project I undertake. Let's build a future where technology not only works seamlessly but also looks and feels exceptional.`;

  const toggleParagraph = () => {
    setShowHalfParagraph(!showHalfParagraph);
  };

  return (
    <section className="about-me py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-content">
              <h2 className="about-title">About Me</h2>
              <p className={`about-description ${showHalfParagraph ? 'short' : 'full'}`}>
                {showHalfParagraph ? originalText.split(' ').slice(0, originalText.split(' ').length / 2).join(' ') : originalText}
              </p>
              <button className="read-more-button" onClick={toggleParagraph}>
                {showHalfParagraph ? 'Read More' : 'Read Less'}
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="profile-image-container">
              <img className="img-fluid profile-image" src={profile} alt="profile" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;


