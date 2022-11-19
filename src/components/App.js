import React from 'react';
import {
  BrowserRouter as Router,
  Routes, Route,

} from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import MyProfile from './MyProfile';


const App = () => (
  <Router>
    <Header />
    {/* <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/myprofile" element={<MyProfile />} />
    </Routes> */}
    <Hero />
    <Features />
    <MyProfile />
  </Router>
);

export default App;
