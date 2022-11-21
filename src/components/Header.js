/*eslint-disable*/
import React from 'react';
import adnan from './../assets/img/pass.jpg';
import ReactDOM from 'react-dom'
import AnchorLink from "react-anchor-link-smooth-scroll";

const Header = () => (<header className='flex-row-center'>
    <div className='icon flex-row-center'>
      <div className='imgwrapper'>
        <img className='myphoto' src={adnan} alt='AdnanPhoto'/>
      </div>
      <h4>Adnan Is-haq</h4>
    </div>
    <nav>
      <ul className='flex-row'>
        <li>
          <AnchorLink offset='150' href="#home">HOME</AnchorLink>
        </li>
        <li>
          <AnchorLink offset='150' href="#features">FEATURES</AnchorLink>
        </li>
        <li>
          <AnchorLink offset='150' href="#portfolio">PORTFOLIO</AnchorLink>
        </li>
        <li>
          <AnchorLink offset='150' href="#resume">RESUME</AnchorLink>
        </li>
        <li>
          <AnchorLink offset='150' href="#recommendation">RECOMMENDATION</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#articles" offset='150'>ARTICLES</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#contact">CONTACT</AnchorLink>
        </li>
      </ul>
    </nav>
    <div className='toggleLight'>
      {/* <i className='fas fa-sun'></i>
      <i className='fas fa-moon'></i> */}
      night mode
    </div>
  </header>);

export default Header;

/*night mode */
// const toggleLight = document.querySelector('.toggleLight');
// const body = document.querySelector('body');
// toggleLight.addEventListener('click', () => {
//   body.classList.toggle('light');
// });

