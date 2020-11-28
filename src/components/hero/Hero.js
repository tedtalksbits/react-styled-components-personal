import React from 'react';
import './Hero.css';
import video from '../../assets/video/video.mp4';

function Hero() {
   return (
      <div className='hero'>
         <div className="hero__container">
            <div className="hero__cta">
               <h1 className='hero__heading'>Invest in your future</h1>
               <a href="" className='hero__button'>
                  Get Started
                  <box-icon name='right-arrow-alt' animation='fade-right'></box-icon>
               </a>
            </div>
            <div className="hero__video-wrap">
               <video src={video} autoPlay loop muted className='hero__video' type='video/mp4'></video>
            </div>
         </div>
      </div>
   )
}

export default Hero;
