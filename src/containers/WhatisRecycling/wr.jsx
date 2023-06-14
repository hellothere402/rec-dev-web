import React from 'react'
import { Feature } from '../../components';
import './wr.css'

const WhatisRecycling = () => (
    <div className="recycling__whatisrecycling section__margin" id="wr">
      <div className="recycling__whatisrecycling-feature">
        <Feature title="Big Question" text="" />
    </div>
    <div className="recycling__whatisrecycling-heading">
      <h1 className="gradient__text">What is recycling?</h1>
  
    </div>
    <div className="recycling__whatisrecycling-container">
      <Feature title="what is recycling?" text="Recycling is the process of converting waste materials into new materials and objects." />
      <Feature title="help the environment" text="Recycling is the process of converting waste materials into new materials and objects." />
      <Feature title="save the planet" text="Recycling is the process of converting waste materials into new materials and objects." />
      </div>
    </div>
  );

export default WhatisRecycling