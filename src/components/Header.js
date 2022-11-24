/*eslint-disable*/
import React, { useRef } from 'react';
import adnan from './../assets/img/pass.jpg';
import AnchorLink from "react-anchor-link-smooth-scroll";

const Header = () => {
const burgerRef = useRef();
const navRef = useRef();
const cancel = useRef()
const headerArr = ['home', 'features', 'portfolio', 'resume', 'recommendation', 'articles', 'contact'];
const hamburger = ['first', 'second', 'third']
const onClick = () => {
  for(let i=0; i<burgerRef.current.childNodes.length; i++) {
  burgerRef.current.childNodes[i].classList.toggle('change')
  }
  navRef.current.classList.toggle('open');
  cancel.current.classList.toggle('cancel');
}

  return (<header className='flex-row-center'>
    <div className='icon flex-row-center'>
      <div className='imgwrapper'>
        <img className='myphoto' src={adnan} alt='AdnanPhoto'/>
      </div>
      <h4 className='myname'>Adnan Is-haq</h4>
    </div>
    <nav ref={navRef}>
      <ul className='nav'>
        {headerArr.map((item)=>(<li>
            <AnchorLink onClick={onClick} offset='110' href={`#${item}`}>{item.toLocaleUpperCase()}</AnchorLink>
          </li>)
        )}
      </ul>
    </nav>
    <div ref={cancel} onClick={onClick} className='burgerContainer'>
    <div ref={burgerRef} class="hamburger">
          {hamburger.map((bar)=>(<span class={`bar ${bar}-bar`}></span>)
          )}
    </div>
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

