import React from 'react'
import pass from './../assets/img/pass.jpg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const MyProfile = () => (
    <section id='portfolio' className='myprofile'>
        <h6 className='myprofile__subheading'>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h6>
        <h1 className='myprofile__heading'>My Portfolio</h1>
        <div className='flex-row myprofile__container'>
            <div className='myprofile__item flex-column'>
                <div className='myprofile__item__img'>
                    <img src={pass} alt='' />
                </div>
                <div className='profile__likes flex-row'>
                    <span>Video</span>
                    <span>
                        <span class="icon__like"></span>
                        <span class="like__count">232</span>
                    </span>
                </div>
                <h3 className='myprofile__item__subheading'>
                        Online Food Delivery Mobile App Design. <ArrowForwardIcon className='myprofile__arrow' />
                </h3>
            </div>
            <div className='myprofile__item flex-column'>
                <div className='myprofile__item__img'>
                    <img src={pass} alt='' />
                </div>
                <div className='profile__likes flex-row'>
                    <span>Video</span>
                    <span>
                        <span class="icon__like"></span>
                        <span class="like__count">232</span>
                    </span>
                </div>
                <h3 className='myprofile__item__subheading'>
                        Online Food Delivery Mobile App Design. <ArrowForwardIcon className='myprofile__arrow' />
                </h3>
            </div>
            <div className='myprofile__item flex-column'>
                <div className='myprofile__item__img'>
                    <img src={pass} alt='' />
                </div>
                <div className='profile__likes flex-row'>
                    <span>Video</span>
                    <span>
                        <span class="icon__like"></span>
                        <span class="like__count">232</span>
                    </span>
                </div>
                <h3 className='myprofile__item__subheading'>
                        Online Food Delivery Mobile App Design. <ArrowForwardIcon className='myprofile__arrow' />
                </h3>
            </div>
        </div>
    </section>
  );

export default MyProfile