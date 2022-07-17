import React from "react";
import { Link } from "react-router-dom";
import "./CustomButton.scss";

import { saveAs } from "file-saver";

const DownloadImage = () => {
  const download = () => {
    saveAs(
      "https://drive.google.com/file/d/1bx1jgqtRsLHnbhm6WJ0QSHAhr0CrMyvn/view?usp=sharing"
    ); // Put your image url here.
  };

  return (
    <button className="button" onClick={download}>
      Download Resume
    </button>
  );
};

const CustomButton = ({
  text,
  route,
  downloadCv,
  extraStyle,
  projectLink,
  projectUrl,
  githubLink,
  githubUrl,
}) => {
  return (
    <div
      className={!extraStyle ? "buttonContainer" : "buttonContainer extraStyle"}
    >
      {downloadCv ? (
        <DownloadImage />
      ) : projectUrl ? (
        <a href={projectUrl}>
          <button className="button">
            {text}
          </button>
        </a>
      ) : githubUrl ? (
        <a href={githubUrl}>
          <button className="button">
            {text}
          </button>
        </a>
      ) : (
        <Link to={route}>
          <button className="button">{text}</button>
        </Link>
      )}
    </div>
  );
};

export default CustomButton;
