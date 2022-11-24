import React from 'react'
import connect from './../assets/img/connect.jpg';
import angellist from './../assets/img/angellist.svg';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {

    const currentDate = new Date().getFullYear();
  return (
    <section id='contact' className='contact'>
         <div style={{textAlign: "center"}}>
            <h6 className='myprofile__subheading'>CONTACT</h6>
            <h1 className='myprofile__heading'>Contact With Me</h1>  
        </div>
        <div className='contact__container'>
            <div className='contact__item'>
                <div className='contact__img'>
                    <img src={connect}/>
                </div>
                <div className='contact__info flex-column'>
                    <p className='contact__name'>Adnan Is-haq</p>
                    <p className='contact__post'>Frontend Developer</p>
                    <p className='contact__desc'>
                        I am available for freelance and full time hire. If you have a project that you want to get started, think you need my help with something or just fancy saying hello, then get in touch.
                    </p>
                    <p>Phone: <a href='tel:+2348130036768'>+234 813 003 6768</a></p>
                    <p>Email: <a href="mailto:adnanishaqola@gmail.com">adnanishaqola@gmail.com</a></p>
                    <div className="hero__accs">
                    <div>
                        <p>FIND WITH ME</p>
                        <div className="hero__accs__social flex-row">
                            <a href="https://www.github.com/adnanolarmmi" target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
                            <a href="https://www.twitter.com/adnanishaqola/" target="_blank" rel="noopener  noreferrer"><TwitterIcon /></a>
                            <a href="https://www.linkedin.com/in/adnan-is-haq-olamilekan/" target="_blank" rel="noopener  noreferrer"><LinkedInIcon className="hero__social" /></a>
                            <a href="https://angel.co/u/adnan-is-haq" className="angellistContainer" target="_blank" rel="noopener  noreferrer">
                                <div className="angellist">
                                <img  src={angellist} alt='angellist' />  
                                </div>  
                            </a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className='contact__form'>
                <form action="https://formspree.io/f/mpzneaqq"
						method="post">
                    <div className='name'>
                        <label>YOUR NAME
                            <input name='name' type='text' placeholder='Name' required />
                        </label>
                        <label>PHONE NUMBER
                            <input name='phoneNumber' type='tel' placeholder='Telephone number' />
                        </label>
                    </div>
                    <div className='others'>
                        <label>EMAIL
                            <input name='email' type='email' placeholder='Email' required />
                        </label>
                        <label>SUBJECT
                            <input name='subject' type='text' placeholder='Subject' required />
                        </label>
                        <label>YOUR MESSAGE
                            <textarea name='message' placeholder='Message' required></textarea>
                        </label> 
                    </div>
                    <button className='contact__button' type='submit' >SAY HI TO ME</button>
                </form>
            </div>
        </div>
       <p style={{textAlign: "center", marginTop:"7rem"}}>&#169; {currentDate} - All Rights Reserved</p> 
    </section>
  )
}

export default Contact