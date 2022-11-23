import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import front from './../assets/img/front.png';
import back from './../assets/img/back.png';
import full from './../assets/img/full.png';

const featuresAll = [
    {
        id: 1,
        icon: front,
        role: 'Front End',
        desc: 'Collaborating with clients to create a website\'s general layout and design. using programming languages like HTML5, CSS3, JavaScript, React, Redux and TypeScript to create website code. creating, maintaining, and making changes to user interfaces and websites.',
    },
    {
        id: 2,
        icon: back,
        role: 'Back End',
        desc: 'Working with different clients to create website\'s backend technologies such as authentication, api and databases. using programming languages like NodeJs, ExpressJs, Ruby, Ruby on Rails, MongoDB and Mongoose to create website\'s backend functionalities.',
    },
    {
        id: 3,
        icon: full,
        role: 'Full Stack',
        desc: 'Professionally, I am in charge of both front-end and back-end development processes. I create, design, and maintain fully functional platforms with databases or servers. I can address all the need app\'s need holistically.',
    }
]

const Features = () => (
    <section id='features' className='features'>
        <h6 className='features__subheading'>Features</h6>
        <h1 className='features__heading'>What I do</h1>
        <div className="features__container flex-row">
            {featuresAll.map((feature) => (
                <div className="features__item flex-column" key={feature.id}>
                    <div className="features__container__icon">
                        <img src={feature.icon
                        } alt={feature.icon} />
                    </div>
                    <h3 className="features__item__role">{feature.role}</h3>
                    <p className="features__item__desc">{feature.desc}</p>
                    <ArrowForwardIcon className='features__container__icon arrow' />
                </div>
            ))}
        </div>
    </section>
);

export default Features;