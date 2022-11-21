import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import pass from './../assets/img/pass.jpg';
import FormatQuoteOutlinedIcon from '@mui/icons-material/FormatQuoteOutlined';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.min.css'
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css';

const paginationStyle = { 
"--swiper-pagination-color": "#ff014f",
"--swiper-pagination-bullet-inactive-color": "#6c757d",
"--swiper-pagination-bullet-inactive-opacity": "0.4",
"--swiper-pagination-bullet-size": "13px",
"--swiper-pagination-bullet-horizontal-gap": "7px",
}

const navigationStyle = {
   
    "--swiper-navigation-size": "30px",
    "--swiper-navigation-color": "ff014f",
}

const Recommendation = () => {
      return (
        <section id='recommendation' className='recommendation'>
            <div style={{textAlign: "center"}}>
              <h6 className='myprofile__subheading'>HERE WHAT PEOPLE HAVE TO SAY ABOUT MY HUMBLE SELF</h6>
        <h1 className='myprofile__heading'>Recommendations</h1>  
            </div>
            
    <Swiper style={{...paginationStyle, ...navigationStyle}}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop = {true}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div className='reco__container flex-row'>
        <div className='reco__info'>
            <div className='img'>
             <img src={pass}/>
            </div>
            <div className='info'>
                <p className='info__red'>RAINBOW THEMES</p>
                <p className='info__name'>Nevine Acotanza</p>
                <p className='info__post'>Chief Operating Office</p>
            </div>
        </div>
        <div className='reco__work'>
            <div className='quotation'>
            <FormatQuoteOutlinedIcon />
            </div>
            <div>
                <div className='reco__work--ot'>
                    <h4 className='reco__work--title'>Android App Development</h4>
                    <p className='reco__work--loc'>via Upwork - Mar 4, 2015 - Aug 30, 2021</p>
                </div>
                <p className='reco__work--desc'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    
    </Swiper>
    </section>
  );
}

export default Recommendation