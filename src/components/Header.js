/*eslint-disable*/
import React from 'react';
import { Link } from 'react-router-dom';
import adnan from './../assets/img/pass.jpg';

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
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/features">FEATURES</Link>
        </li>
        <li>
          <Link to="/portfolio">PORTFOLIO</Link>
        </li>
        <li>
          <Link to="/resume">RESUME</Link>
        </li>
        <li>
          <Link to="/recommendation">RECOMMENDATION</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
        <li>
          <Link to="/articles">ARTICLES</Link>
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

