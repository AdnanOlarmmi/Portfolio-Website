import React from 'react';
import BackupIcon from '@mui/icons-material/Backup';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MenuIcon from '@mui/icons-material/Menu';

const Features = () => (
    <section id='features' className='features'>
        <h6 className='features__subheading'>Features</h6>
        <h1 className='features__heading'>What I do</h1>
        <div className="features__container flex-row">
            <div className='features__item flex-column'>
                <div className="features__container__icon"><BackupIcon className='back' /></div>
                <h3>Web Design</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
              
                    <ArrowForwardIcon className='features__container__icon arrow' />
              
            </div>
            <div className='features__item flex-column'>
                <div className="features__container__icon"><BackupIcon /></div>
                <h3>Web Design</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                <ArrowForwardIcon className='features__container__icon arrow' />
            </div>
            <div className='features__item flex-column'>
                <div className="features__container__icon"><BackupIcon /></div>
                <h3>Web Design</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                <ArrowForwardIcon className='features__container__icon arrow' /> 
            </div>
        </div>
    </section>
);

export default Features;