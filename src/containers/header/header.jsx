import React from 'react'
import './header.css'
import imagesremovebgpreview from '../../assets/images-removebg-preview.png'


const Header = () => (

    <div className="recycling__header section__padding" id="home">
      <div className="recycling__header-content">
        <h1 className="gradient__text"> One Can, One Bottle, One Planet: Start Recycling! </h1>
        <p>Recycling is not just a mere act of sorting out your waste; it's a meaningful step towards protecting our Earth for future generations. As a high school student, you have a unique power to make a significant difference in your community and even the world. When you recycle, you help to reduce the strain on our planet's finite resources, mitigate climate change, and contribute to a cleaner, healthier environment. Moreover, it fosters a sense of responsibility, leadership, and awareness about sustainability. Think about it - each piece of paper, plastic, or glass you recycle is one less item damaging our planet. So, let's start recycling today; not only will you be promoting an eco-friendly school environment, but you'll also be part of a global change, making a tangible impact that transcends beyond the walls of your classroom. Your actions can inspire others, and together, you can help ensure the world you inherit is one you're proud to call home. </p>

        <div className="recycling__header-content__input">
          <input type="email" placeholder="Your Email" />
          <button type="button">Stay up to date</button>
         
        </div>

        <div className="recycling__header-content__people">
      
            <p></p>
        </div>
        
        <div className="recycling__header-img">
          <img src={imagesremovebgpreview} alt="header" />
         
        </div>
      </div>
    </div>
  );

export default Header