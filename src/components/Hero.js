import React from "react";
import adnan from './../assets/img/mainpic.png'
import angellist from './../assets/img/angellist.svg';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { experienceYears } from "./MyResume";

const Hero = () => (
  <section id="home" className="hero flex-row">
    <div className="hero__content">
      <p className="hero__welcome">
        WELCOME TO MY PORTFOLIO WEBSITE
      </p>
      <h1 className="hero__title">Hi, I'm <span className="hero__name">Is-haq Adnan </span>a Full stack Developer.</h1>
      <p className="hero__subtitle">
      I'm a software engineer with over {experienceYears+2} years of experience developing great software, as well as a Full stack developer with over {experienceYears} years of experience developing web applications, designing and developing user interfaces, testing, debugging, and mentoring junior developers on best coding practices. I've worked with JavaScript, React, Redux, Node, and a variety of other web technologies to create web applications. I am passionate about developing scalable software, as well as user-friendly and responsive websites, and I enjoy learning new technologies. I am a quick learner who is eager to learn new technologies. I am a team player who is always willing to assist my teammates. I am a self-motivated individual who is always eager to take on new challenges.
      </p>
      <div className="hero__accs">
        <div>
            <p>FIND WITH ME</p>
            <div className="hero__accs__social flex-row">
                <a href="https://www.github.com/adnanolarmmi" target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
                <a href="https://www.twitter.com/adnanishaqola/" target="_blank" rel="noopener  noreferrer"><TwitterIcon /></a>
                <a href="https://www.linkedin.com/in/adnan-is-haq-olamilekan/" target="_blank" rel="noopener  noreferrer"><LinkedInIcon className="hero__social" /></a>
                <a href="" className="angellistContainer">
                    <div className="angellist">
                      <img  src={angellist} alt='angellist' />  
                    </div>  
                </a>
            </div>
        </div>
        <div>
        
        </div>
      </div>
    </div>
    <div className="hero___img">
        <img src={adnan} alt='Adnan Is-haq' />
    </div>
  </section>
);

export default Hero;