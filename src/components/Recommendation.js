import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import pass from './../assets/img/pass.jpg';
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
        <img src={pass}/>
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