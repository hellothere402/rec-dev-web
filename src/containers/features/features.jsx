import React from 'react'
import './features.css'
import { Feature } from '../../components';

const FeaturesData = [
  {
    title: 'Learn how to recycle',
    text: 'Learn how to recycle, to make Dunstan High School a better place',
  },

  { title: 'Click on the resources tab', 
  text: 'Click on the resources tab to find out more about recycling, and how to do it',
},

  { title: 'Do you part',
  text: 'Do your part to make Dunstan High School a better place, by picking up the rubbish across the schools.',
},

  { title: 'Make a difference',
  text: 'Make a difference by recycling, and picking up rubbish across the school.',
},
];

const Features  = () => (
  <div className="recycling__features section__padding" id="features">
    <div className="recycling__features-heading">
      <h1 className="recycling__text">Look at the resources now!</h1>
      <p>Start to recycle now!</p>
    </div>
    <div className="recycling__features-container">
      {FeaturesData.map((item, index) => ( 
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;

  


