import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import techno from './../assets/img/techno.gif';
import bookredux from './../assets/img/bookredux.gif';
import calc from './../assets/img/calc.gif';
import foody from './../assets/img/foody.gif';
import leader from './../assets/img/leader.gif';
import todo from './../assets/img/todo.gif';
import awesome from './../assets/img/awesome.gif';
import space from './../assets/img/space.gif'


const portfolioArr = [
    {
        id: 1,
        img: techno,
        type: 'JavaScript',
        likes: '5',
        subheading: 'TechnoPrenuer Conference App.',
        git: 'https://github.com/AdnanOlarmmi/Technopreneur',
        url: 'https://adnanolarmmi.github.io/Technopreneur/',
        alt: 'TechnoPrenuer Conference App'
    },
    {
        id: 2,
        img: bookredux,
        type: 'React-Redux',
        likes: '5',
        subheading: 'An Online Book Store Connected to an API.',
        git: 'https://github.com/AdnanOlarmmi/Bookstore',
        url: 'https://adnanbookstore.netlify.app/',
        alt: 'Bookstore App',
    },
    {
        id: 3,
        img: foody,
        type: 'JavaScript',
        likes: '5',
        subheading: 'Food Catalogue App to Like and Comment.',
        git: 'https://github.com/AdnanOlarmmi/Foody',
        url: 'https://adnanolarmmi.github.io/Foody/',
        alt: 'Foody Restaurant App'
    },
    {
        id: 4,
        img: space,
        type: 'React-Redux',
        likes: '5',
        subheading: 'Rocket and Mission Reservation App.',
        git: 'https://github.com/AdnanOlarmmi/Space-Travelers-Hub',
        url: 'https://adnanquinspacetravelers.netlify.app/',
        alt: 'Space Travelers\' Hub App',
    },
    {
        id: 5,
        img: calc,
        type: 'React',
        likes: '5',
        subheading: 'A Calculator App Built with React.',
        git: 'https://github.com/AdnanOlarmmi/Math-Magicians',
        url: 'https://adnancalculator.netlify.app/',
        alt: 'Calculator App',
    },
    {
        id: 6,
        img: leader,
        type: 'JavaScript',
        likes: '5',
        subheading: 'A Scoreboard to Add and Display Scores.',
        git: 'https://github.com/AdnanOlarmmi/Leaderboard',
        url: 'https://adnanolarmmi.github.io/Leaderboard/',
        alt: 'Leaderboard App',
    },
    {
        id: 7,
        img: todo,
        type: 'JavaScript',
        likes: '5',
        subheading: 'A Todo List App to Add and Delete Tasks.',
        git: 'https://github.com/AdnanOlarmmi/To-Do-List-App',
        url: 'https://adnanolarmmi.github.io/To-Do-List-App/',
        alt: 'Todo List App',
    },
    {
        id: 8,
        img: awesome,
        type: 'JavaScript',
        likes: '5',
        subheading: 'A BookStore App to Add and Delete Books.',
        git: 'https://github.com/AdnanOlarmmi/Awesome-Books-Es6',
        url: 'https://adnanolarmmi.github.io/Awesome-Books-Es6/',
        alt: 'Awesome Books',
    },
]

const MyProfile = () => (
    <section id='portfolio' className='myprofile'>
        <h6 className='myprofile__subheading'>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h6>
        <h1 className='myprofile__heading'>My Portfolio</h1>
        <div className='myprofile__container'>
            {portfolioArr.map((item) => (
                <div key={item.id} className='myprofile__item flex-column'>
                    <div className='myprofile__item__img'>
                        <img src={item.img}
                            alt={item.alt} />
                    </div>
                    <div className='profile__info flex-row'>
                        <span className='profile__type'>{item.type}</span>
                        <a href={item.git} target="_blank" rel="noopener  noreferrer" class="profile__git"><GitHubIcon/></a>
                    </div>
                    <a  href={item.url} target="_blank" rel="noopener  noreferrer" className='myprofile__item__subheading'>
                    {item.subheading} <ArrowForwardIcon className='myprofile__arrow' />  
                    </a>
                </div>
            ))}
        </div>
    </section>
  );

export default MyProfile