import React from 'react'
import sustainability from '../../assets/sustainability-13-09142-g001.webp'
import './recyclingpos.css'

const Recyclingpos = () => (
    <div className="recycling__possibility section__padding" id="possibility">
      <div className="recycling__possibility-image">
        <img src={sustainability} alt="possibility" />
      </div>
      <div className="recycling__possibility-content">
        
        <h1 className="gradient__text">Learn about <br /> the processes of Recycling <br /> at Dunstan High School</h1>
          <p>The following image illustrating the process of Recycling rubbish at Dunstan High School</p>
        
        </div>
    </div>
  )

export default Recyclingpos;