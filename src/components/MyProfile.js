import React from 'react'
import pass from './../assets/img/pass.jpg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const MyProfile = () => (
    <section>
        <h6 className='myprofile__subheading'>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h6>
        <h1 className='myprofile__heading'>My Portfolio</h1>
        <div className='flex-row myprofile__container'>
            <div className='myprofile__item flex-column'>
                <div className='myprofile__item__img'>
                    <img src={pass} alt='' />
                </div>
                <div>
                    <span>Video</span>
                    <span>221</span>
                </div>
                <h3 className='myprofile__subheading'>
                        Online Food Delivery Mobile App Design. <ArrowForwardIcon className='myprofile__arrow' />
                </h3>
            </div>
            <div className='myprofile__item flex-column'>
                <div className='myprofile__item__img'>
                    <img src={pass} alt='' />
                </div>
                <div>
                    <span>Video</span>
                    <span>221</span>
                </div>
                <h3 className='myprofile__subheading'>
                        Online Food Delivery Mobile App Design. <ArrowForwardIcon className='myprofile__arrow' />
                </h3>
            </div>
            <div className='myprofile__item flex-column'>
                <div className='myprofile__item__img'>
                    <img src={pass} alt='' />
                </div>
                <div>
                    <span>Video</span>
                    <span>221</span>
                </div>
                <h3 className='myprofile__subheading'>
                        Online Food Delivery Mobile App Design. <ArrowForwardIcon className='myprofile__arrow' />
                </h3>
            </div>
        </div>
    </section>
  );

export default MyProfile