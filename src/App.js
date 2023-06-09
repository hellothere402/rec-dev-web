import React from 'react';
import { Footer,Blog,Recyclingpos,Features,Header,WhatisRecycling} from './containers';
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
    <Recyclingpos/>
    <Cta />
    <Blog />
    <Footer />
  </div>

  );

export default App;