import React, { useState } from 'react';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';
import Soft from './Soft';

export const experienceYears =  new Date().getFullYear() - 2019;

const MyResume = () => {



 const resumes  = [ {
    name: 'Education',
    component: Education
 },
{
    name: 'Skills',
    component: Skills
}, 
{
    name: 'Experience',
    component: Experience
},
{
    name: 'Soft Skills',
    component: Soft
}];

const [activeSlide, setActiveSlide] = React.useState(resumes[0].component);

const handleClick = (index) => {
    const newSlide = resumes[index].component;
    setActiveSlide(newSlide);
    return activeSlide === resumes[index].component ? 'active' : '';
}

  return (
    <section id='resume' className='myresume flex-column'>
        <h6 className='myprofile__subheading'>{experienceYears}+ YEARS OF EXPERIENCE</h6>
        <h1 className='myprofile__heading'>My Resume</h1>
        <div className='myresume__item flex-row' >
            {resumes.map((resume, index)=>{
            return <span className={`myresume__heading ${activeSlide.props.dataSet===resume.name? 'active':''}`} onClick={()=>{handleClick(index)}}>{resume.name==='Skills'?'Professional Skills':resume.name}</span>
        })}
        </div>
        <div>{activeSlide}</div>
    </section>
  )
}

export default MyResume