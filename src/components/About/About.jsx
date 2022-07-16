import React from "react";
import "./About.scss";
import pic from "./myImage_2.png";

const About = () => {
  return (
    <div className="containerAbout">
      <div className="aboutTextContainer">
        <h3 className="aboutText">
          I am Web Developer and Machine learner. I love to solve problems and
          build fun projects. 🌻
          <br />
          <br />I am persuing B.Tech (CS) from Chitkara University [3rd Year]
        </h3>
        <p></p>
      </div>
      <div className="aboutImageContainer">
        <div
          className="aboutImage"
          style={{
            backgroundImage: `url(${pic})`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default About;
