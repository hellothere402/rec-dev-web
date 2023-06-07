import React from 'react'
import PossibiltyImage from '../../assets/possibility.png'
import './possibilty.css'

const Possibilty = () => (
    <div className="recycling__possibility section__padding" id="possibility">
      <div className="recycling__possibility-image">
        <img src={PossibiltyImage} alt="possibility" />
      </div>
      <div className="recycling__possibility-content">
        <h4>Join Now</h4>
        <h1 className="gradient__text">The chances <br /> for recycling are endless</h1>
        <p>oifhdoigndfodfifjnjkfnhjkfnhkfnjkfnhjkfnhkjgfnhkjfgnjkfnkjfnhjkfhnfgkjhnfgkjhnfgjkhnfgkhnfg</p>
        <h4>Join the movement now!</h4>
        </div>
    </div>
  )

export default Possibilty;