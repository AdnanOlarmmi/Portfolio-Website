import React, { Fragment, useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import MyProfile from './MyProfile';
import MyResume from './MyResume';
import Articles from './Articles';
import Recommendation from './Recommendation';
import Contact from './Contact';

const nightMode = {
  '--basic-color': '#212428',
  '--black-grey': '#878e99',
  '--name-color': '#fff',
  '--primary-boxshadow': '10px 10px 19px #1c1e22, -10px -10px 19px #262a2e',
  '--primary-background': 'linear-gradient(to right bottom, #212428, #16181c)',
  '--hover-background': 'linear-gradient(145deg, #1e2024, #23272b)',
  '--text-black': '#c4cfde',
  '--black-secondary': '#c4cfde',
  '--angelist': 'invert(91%) sepia(5%) saturate(842%) hue-rotate(182deg) brightness(91%) contrast(90%)'
}

const dayMode = {
  '--nothing-nothing': 'blue',

}



const App = () =>{ 
  
  const [isitnite, setNight] = useState(false);



  return (
  <div style={isitnite ? nightMode: dayMode}>
    <Header isitnite={isitnite} setNight={setNight} />
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
 
  </div>
)};

export default App;
