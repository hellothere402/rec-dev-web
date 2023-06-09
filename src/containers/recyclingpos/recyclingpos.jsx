import React from 'react'
import sustainability from '../../assets/sustainability-13-09142-g001.webp'
import './recyclingpos.css'

const Recyclingpos = () => (
    <div className="recycling__possibility section__padding" id="possibility">
      <div className="recycling__possibility-image">
        <img src={sustainability} alt="possibility" />
      </div>
      <div className="recycling__possibility-content">
        <h4>Join Now</h4>
        <h1 className="gradient__text">Learn about <br /> the processes at Dunstan High School</h1>
        <p>
            The process of recycling your waste.</p>
        <h4>Join the movement now!</h4>
        </div>
    </div>
  )

export default Recyclingpos;