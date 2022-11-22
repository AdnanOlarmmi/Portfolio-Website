import React, { Fragment } from 'react';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import MyProfile from './MyProfile';
import MyResume from './MyResume';
import Articles from './Articles';
import Recommendation from './Recommendation';
import Contact from './Contact';

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
    <footer>
      <Contact />
    </footer>
 
  </Fragment>
);

export default App;
