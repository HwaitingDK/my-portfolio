import React from 'react'
import './About.scss';
import pic from './myImage.png';

const About = () => {
  return (
    <div className='containerAbout'>
      <div className='aboutText'>
        I am an enthusiastic developer + coder and an ordinary human being who loves to play with code. 
        <br />
        <br />
        Currently I am persuing B.Tech (CS) from Chitkara University [3rd Year]
        <br />
        <br />
        I love to solve problems and build fun projects. 🌻
      </div>
      <div className='aboutImage' style={{
        backgroundImage: `url(${pic})`,
        backgroundRepeat: 'no-repeat',
        width: '30vw',
        height: '60vh',
        marginRight: '5rem',
        marginTop: '5rem',
        backgroundSize: 'cover',
        transform: 'rotate(10deg)'
      }}>
      </div>
    </div>
  )
}

export default About;