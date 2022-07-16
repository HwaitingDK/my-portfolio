import React from "react";
import { images } from "../../constants";
import Footer from "../Footer/Footer";
import "./About.scss";
import pic from "./myImage_2.png";


const About = () => {
  return (
    <>
      <div className="app__about app__flex">
        <div>
          <div className="app__about-imageContainer app__flex">
            <div className="app__about-image">
              <img src={pic} alt="myImage" />
            </div>
          </div>
          <div className="app__about-item app__flex">
            <div className="app__about-content">
              <p style={{ display: 'inline' }}>
                I am
              </p>
              <p style={{ display: 'inline', color: '#01bdae', marginLeft: '0.5rem' }}>
                Web Developer
              </p>
              <p >
                and
              </p>
              <p style={{ display: 'inline', color: '#01bdae'}}>
                Machine learner. 
                <br />
                <br />
              </p>
              <p>
                I love to solve problems
                and build fun projects. 🌻
                <br />
                <br />I am persuing B.Tech (CS) from Chitkara University [3rd
                Year]
              </p>
            </div>
          </div>
        </div>
        <div className="aboutSkillsContainer">
          <p className="head-text">Programming Languages & Libraries</p>
          {[
            'cpp',
            'css',
            'git',
            'html',
            'javascript',
            'node',
            'python',
            'react',
            'redux',
            'sass',
          ].map((element, index) => (
            <div key={index} className="aboutSkill">
              <img className="aboutSkillItem" src={images[element]} alt="cpp" />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
