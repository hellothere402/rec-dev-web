import React from 'react'
import './features.css'
import { Feature } from '../../components';

const FeaturesData = [
  {
    title: 'Learn how to recycle',
    text: 'go to this link to learn how to recycle: https://www.thesca.org/connect/blog/how-recycle-and-why-you-should-do-it/',
  },

  { title: 'Learn more about recycling', 
  text: 'go to this link to learn more about recycling:https://www.britannica.com/science/recycling',
},

  { title: 'More resources',
  text: 'LEARN EVEN MORE ABOUT RECYCLING:https://brightly.eco/blog/what-is-recycling-and-why-is-it-important',
},

  { title: 'EVEN MORE RESOURCES',
  text: 'go to this link to learn more about recycling:https://www.twinkl.co.nz/teaching-wiki/recycling',
},
];

const Features  = () => (
  <div className="recycling__features section__padding" id="features">
    <div className="recycling__features-heading">
      <h1 className="recycling__text">Look at the resources to learn more.</h1>
    
    </div>
    <div className="recycling__features-container">
      {FeaturesData.map((item, index) => ( 
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;

  


