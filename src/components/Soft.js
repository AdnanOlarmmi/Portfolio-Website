import React from 'react'

const SoftArr = ['Figma', 'Pixel Perfection', 'Team Work', 'Mentorship', 'Communication', 'Interpersonal Skills', 'Responsive Design', 'Leadership', 'Problem Soliving', 'Adaptability', 'Work Ethic', 'Time Management'];

const Soft = () => {
    return (
      <section dataset="Soft Skills" id='education' className='edu flex-row'>
        <div className='edu__item'>
              <h6 className='edu__year'>
                  Features
              </h6>
              <h1 className='edu__heading'>Design and Soft Skill
              </h1>
              <ul className='skill__list'>
                    {SoftArr.map((skill, index) => {
                        return (
                            <li className='skill__item  flex-column' key={index}>
                               <p className='skill__name'>{skill}</p> 
                               <span className='skill__design'></span>
                            </li>
                        )
                    })}
              </ul>
          </div>
      </section>
    )
}

export default Soft;