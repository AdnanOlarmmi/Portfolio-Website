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
      <ul className='nav flex-row'>
        <li>
          <AnchorLink offset='110' href="#home">HOME</AnchorLink>
        </li>
        <li>
          <AnchorLink offset='110' href="#features">FEATURES</AnchorLink>
        </li>
        <li>
          <AnchorLink offset='110' href="#portfolio">PORTFOLIO</AnchorLink>
        </li>
        <li>
          <AnchorLink offset='110' href="#resume">RESUME</AnchorLink>
        </li>
        <li>
          <AnchorLink offset='110' href="#recommendation">RECOMMENDATION</AnchorLink>
        </li>
        <li>
          <AnchorLink offset='110' href="#articles">ARTICLES</AnchorLink>
        </li>
        <li>
          <AnchorLink offset='110' href="#contact">CONTACT</AnchorLink>
        </li>
      </ul>
    </nav>
    <div className='toggleLight'>
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

