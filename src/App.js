import React from 'react';

import { Footer,Blog,Possibilty,Features,Header,WhatisRecycling} from './containers';
import { Navbar,Cta,Brand} from './components';

import './App.css';

const App = () => (
    <div className="App">
      <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatisRecycling />
    <Features />
    <Possibilty />
    <Cta />
    <Blog />
    <Footer />
  </div>

  );

export default App;