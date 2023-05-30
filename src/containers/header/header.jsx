import React from 'react'
import './header.css'
import people from '../../assets/people.png'


const Header = () => (

    <div className="recycling__header section__padding" id="home">
      <div className="recycling__header-content">
        <h1 className="gradient__text"> Join the movement. Do your part for the school, and the enviroment</h1>
        <p>Join the Movement, do your part for the enviroment and the school. In helping clean up the rubbish around Dunstan High School. </p>

        <div className="recycling__header-content__input">
         
        </div>

        <div className="recycling__header-content__people">
            <img src={people} alt='people' />
            <p>Join these people in the movement!</p>
        </div>
        
        <div className="recycling__header-img">
          
        </div>
      </div>
    </div>
  );

export default Header