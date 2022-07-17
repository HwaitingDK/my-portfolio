import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './CustomButton.scss';

import { saveAs } from 'file-saver'

const DownloadImage = () => {
  const download = () => {
    saveAs('https://drive.google.com/file/d/1bx1jgqtRsLHnbhm6WJ0QSHAhr0CrMyvn/view?usp=sharing') // Put your image url here.
  }
  
  return (<button className='button' onClick={download}>Download Resume</button>)
}


const CustomButton = ({ text, route, downloadCv, extraStyle }) => {
  const navigate = useNavigate();
  return (
    <div className= {!extraStyle ? 'buttonContainer' : 'buttonContainer extraStyle'}>
        {
          downloadCv ? (
            <DownloadImage />
          ) : (
            <Link to={route}>
                <button className='button'>{text}</button>
            </Link>
          )
        }
    </div>
  )
}

export default CustomButton;