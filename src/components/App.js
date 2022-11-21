import React, { Fragment } from 'react';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import MyProfile from './MyProfile';
import MyResume from './MyResume';
import Articles from './Articles';
import Recommendation from './Recommendation';

const App = () => (
  <Fragment>
    <Header />
    <main>
      <Hero />
      <Features />
      <MyProfile />
      <MyResume />
      <Recommendation/>
      <Articles />
    </main>
 
  </Fragment>
);

export default App;
