/*eslint-disable*/
import React, { useRef } from 'react';
import adnan from './../assets/img/pass.jpg';
import AnchorLink from "react-anchor-link-smooth-scroll";

const Header = () => {
const burgerRef = useRef();
const navRef = useRef();

const onClick = () => {
  for(let i=0; i<burgerRef.current.childNodes.length; i++) {
  burgerRef.current.childNodes[i].classList.toggle('change')
  }
  navRef.current.classList.toggle('open');
}

  return (<header className='flex-row-center'>
    <div className='icon flex-row-center'>
      <div className='imgwrapper'>
        <img className='myphoto' src={adnan} alt='AdnanPhoto'/>
      </div>
      <h4 className='myname'>Adnan Is-haq</h4>
    </div>
    <nav onClick={onClick} ref={navRef}>
      <ul className='nav'>
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
    <div onClick={onClick} ref={burgerRef} class="hamburger">
          <span class="bar first-bar"></span>
          <span class="bar second-bar"></span>
          <span class="bar third-bar"></span>
    </div>
    <div className='toggleLight'>
      night mode
    </div>
  </header>)};

export default Header;

/*night mode */
// const toggleLight = document.querySelector('.toggleLight');
// const body = document.querySelector('body');
// toggleLight.addEventListener('click', () => {
//   body.classList.toggle('light');
// });

