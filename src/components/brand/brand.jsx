import React from 'react'
import './brand.css';
import { atlassian, dropbox, shopify, google, slack } from './imports';

const Brand = () =>  (
  
    <div className="recycling__brand section__padding">
      <div>
        <img src={google} />
      </div>
      <div>
        <img src={slack} />
      <div>
        <img src={atlassian} />
      </div>
      <div>
        <img src={dropbox} />
      </div>
      <div>
        <img src={shopify} />
      </div>
    </div>
  </div>
  );

export default Brand;
