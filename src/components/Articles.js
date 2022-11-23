import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import jsimg from './../assets/img/jsimg.jpg';
import StarIcon from '@mui/icons-material/Star';

const articleArr = [
    {
        id: 1,
        img: jsimg,
        type: 'JavaScript',
        subheading: '8 Tips to Master JScript: From Debugging to Scalability.',
        git: 'https://github.com/AdnanOlarmmi/Technopreneur',
        url: 'https://medium.com/@olarmmi/8-tips-to-master-javascript-from-debugging-to-scalability-f4f1e2eda5e0',
        alt: 'JavaScript Tips'
    },
    {
        id: 2,
        img: jsimg,
        type: 'React-Redux',
        subheading: 'An Online Book Store Conneas dfas cteds dffs to dsafa an API.',
        git: 'https://github.com/AdnanOlarmmi/Bookstore',
        url: 'https://adnanbookstore.netlify.app/',
        alt: 'Bookstore App',
    },
]

const Articles = () => (
    <section id='articles' className='myprofile'>
        <h6 className='myprofile__subheading'>HERE ARE SOME OF MY WRITE UPS</h6>
        <h1 className='myprofile__heading'>My Articles</h1>
        <div className='flex-row myprofile__container'>
            {articleArr.map((item) => (
                <div key={item.id} className='myprofile__item flex-column'>
                    <div className='myprofile__item__img'>
                        <img src={item.img}
                            alt={item.alt} />
                    </div>
                    <div className='profile__info flex-row'>
                        <span className='profile__type'>{item.type}</span>
                        <span><StarIcon style={{color: "#ffab11", transform:"scale(0.8)"}}/></span>
                    </div>
                    <a  href={item.url} target="_blank" rel="noopener  noreferrer" className='myprofile__item__subheading'>
                    {item.subheading} <ArrowForwardIcon className='myprofile__arrow' />  
                    </a>
                </div>
            ))}
        </div>
    </section>
)

export default Articles