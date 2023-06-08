import React from 'react'
import './brand.css';
import { atlassian, dropbox, shopify, google, slack } from './imports';

const Brand = () =>  (
  
    <div className="recycling__brand section__padding">
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  </div>
  );

export default Brand;
