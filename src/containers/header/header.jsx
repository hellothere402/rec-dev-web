import React from 'react'
import './header.css'


const Header = () => {
  return (
    <div className="recycling__header section__padding" id="home">
      <div className="recycling__header-content">
        <h1 className="gradient__text">Join the movement. Do your part for the school, and the enviroment</h1>
        <p>Join the Movement, do your part for the enviroment and the school. In helping clean up the rubbish around Dunstan High School. </p>

        <div className="recycling__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Join the Movement</button>
        </div>

        <div className="recycling__header-content__people">
            // img of people //
        </div>
        <div className="recycling__header-img">
          // img of recycling //
        </div>
      </div>
    </div>
  )
}

export default Header