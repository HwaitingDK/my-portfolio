import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="container">
      <div className="nameLine">
        <h1>Hi, I'm </h1>
        <h1 className="name">Dikshant</h1>
      </div>
      <div className="tagLine">
        <h1>Welcome to my portfolio</h1>
      </div>
      
      <div className="button">
        <CustomButton route='/about' style={{ marginLeft: "2.6rem" }} text={'Know More'}/>
      </div>
    </div>
  );
};

export default HomePage;