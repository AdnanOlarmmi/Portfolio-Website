/*eslint-disable */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import FormatQuoteOutlinedIcon from '@mui/icons-material/FormatQuoteOutlined';
import StarIcon from '@mui/icons-material/Star';
import {
  Navigation, Pagination, Scrollbar, A11y,
} from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css';

const RecArr = [
  {
    id: 1,
    imgUrl: 'https://avatars.githubusercontent.com/u/31209490?v=4',
    name: 'Mubarak Sulayman',
    post: 'Senior Frontend Developer',
    title: 'University Colleague',
    location: 'via Unilorin - Mar 4, 2014 - Aug 30, 2019',
    comment: 'A very sincere individual, always committed to all he does and love to explore knowledge.',
    urlloc: 'LINKEDIN',
  },
  {
    id: 2,
    imgUrl: 'https://ca.slack-edge.com/T47CT8XPG-U03P1MEPU13-a654676cdc34-512',
    name: 'Kareem Wilson',
    post: 'Full Stack Developer',
    title: 'Microverse Mentor Colleague',
    location: 'via Microverse Mentorship - 2022',
    comment: 'I worked with Adnan, and I learned a lot from him, he taught me how to search for jobs, and I also learned from him multi-tasking skills and how to take several paths to achieve what I want..',
    urlloc: 'LINKEDIN',
  },
];

const paginationStyle = {
  '--swiper-pagination-color': '#ff014f',
  '--swiper-pagination-bullet-inactive-color': '#6c757d',
  '--swiper-pagination-bullet-inactive-opacity': '0.4',
  '--swiper-pagination-bullet-size': '13px',
  '--swiper-pagination-bullet-horizontal-gap': '7px',
};

const navigationStyle = {

  '--swiper-navigation-size': '30px',
  '--swiper-navigation-color': 'ff014f',
};

const Recommendation = () => (
  <section id="recommendation" className="recommendation">
    <div style={{ textAlign: 'center' }}>
      <h6 className="myprofile__subheading">SEE WHAT PEOPLE HAVE TO SAY ABOUT MY HUMBLE SELF</h6>
      <h1 className="myprofile__heading">Recommendations</h1>
    </div>

    <Swiper
      style={{ ...paginationStyle, ...navigationStyle }}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      loop
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      {RecArr.map((rec) => (
        <SwiperSlide key={rec.id}>
          <div className="reco__container">
            <div className="reco__info">
              <div className="reco__img">
                <img src={rec.imgUrl} />
              </div>
              <div className="info">
                <p className="info__red">{rec.urlloc}</p>
                <p className="info__name">{rec.name}</p>
                <p className="info__post">{rec.post}</p>
              </div>
            </div>
            <div className="reco__work flex-column">
              <div className="quotation">
                <FormatQuoteOutlinedIcon style={{
                        transform: 'scale(9)', marginTop: '3rem', marginLeft: '5rem', opacity: '0.2', marginBottom: '5px',
                      }}
                      />
              </div>
              <div className="reco__minfo flex-column">
                <div className="reco__work--ot">
                        <div>
                    <p className="reco__work--title">{rec.title}</p>
                    <p className="reco__work--loc">{rec.location}</p>
                  </div>
                        <span className="stars">
                    <StarIcon style={{ color: '#ffab11', transform: 'scale(0.8)' }} />
                    <StarIcon style={{ color: '#ffab11', transform: 'scale(0.8)' }} />
                    <StarIcon style={{ color: '#ffab11', transform: 'scale(0.8)' }} />
                    <StarIcon style={{ color: '#ffab11', transform: 'scale(0.8)' }} />
                    <StarIcon style={{ color: '#ffab11', transform: 'scale(0.8)' }} />
                  </span>
                      </div>
                <p className="reco__work--desc">
                        {rec.comment}
                      </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default Recommendation;
