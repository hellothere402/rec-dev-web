import React from 'react'
import { Feature } from '../../components';
import './wr.css'

const WhatisRecycling = () => (
    <div className="recycling__whatisrecycling section__margin" id="wr">
      <div className="recycling__whatisrecycling-feature">
        <Feature title="Big Question" text="" />
    </div>
    <div className="recycling__whatisrecycling-heading"> 
      <h1 className="gradient__text">What is recycling? How could I recycle? and what are the benefits?</h1>
  
    </div>
    <div className="recycling__whatisrecycling-container">
      <Feature title="what is recycling?" text="Recycling is the process of converting waste materials into new materials and objects." />
      <Feature title="How could I recycle?" text="Start by picking up your rubbish across the school and putting it into the bins allocated across the school." />
      <Feature title="Building a better world" text=" By Recycling, you will be building a better world that is more sustainable." />
      </div>
    </div>
  );

export default WhatisRecycling