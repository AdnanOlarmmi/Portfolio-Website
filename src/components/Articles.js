/*eslint-disable */
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarIcon from '@mui/icons-material/Star';
import jsimg from '../assets/img/jsimg.jpg';
import redux from '../assets/img/redux.jpg';

const articleArr = [
  {
    id: 1,
    img: jsimg,
    type: 'JavaScript',
    subheading: '8 Tips to Master JScript: From Debugging to Scalability.',
    url: 'https://medium.com/@olarmmi/8-tips-to-master-javascript-from-debugging-to-scalability-f4f1e2eda5e0',
    alt: 'JavaScript Tips',
  },
  {
    id: 2,
    img: redux,
    type: 'Redux',
    subheading: '“Understand Redux as a beginner” — A Practical Guide for Beginners',
    url: 'https://medium.com/@olarmmi/understand-redux-as-a-beginner-a-practical-guide-for-beginners-a852d8123cfb',
    alt: 'Redux Tips',
  },

];

const Articles = () => (
  <section id="articles" className="myprofile">
    <h6 className="myprofile__subheading">HERE ARE SOME OF MY WRITE UPS</h6>
    <h1 className="myprofile__heading">My Articles</h1>
    <div className="flex-row myprofile__container">
      {articleArr.map((item) => (
        <div key={item.id} className="myprofile__item flex-column">
          <div className="myprofile__item__img">
            <img
              src={item.img}
              alt={item.alt}
            />
          </div>
          <div className="profile__info flex-row">
            <span className="profile__type">{item.type}</span>
            <span><StarIcon style={{ color: '#ffab11', transform: 'scale(0.8)' }} /></span>
          </div>
          <a href={item.url} target="_blank" rel="noopener  noreferrer" className="myprofile__item__subheading">
            {item.subheading}
            {' '}
            <ArrowForwardIcon className="myprofile__arrow" />
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Articles;
