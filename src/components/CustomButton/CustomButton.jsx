import React from 'react'
import { Link } from 'react-router-dom';
import './CustomButton.scss';

const CustomButton = ({ text }) => {
  return (
    <div className='buttonContainer'>
        <Link to="/about">
            <button className='button'>{text}</button>
        </Link>
    </div>
  )
}

export default CustomButton;