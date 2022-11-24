import React from 'react'

const currentDate = new Date().getFullYear();

export const JobArr =[
    {
        id: 1,
        subheading: 'Front End Developer',
        school: 'Freelance (2019-Present)',
        loc: 'Remote',
        desc: `I have been working as a freelance front-end developer for over ${currentDate - 2019} years. I have worked on several projects for clients around the globe. I have also worked on several projects for myself and my friends.`
    },
    {
        id: 2,
        subheading: 'Mentor(Volunteer)',
        school: 'Microverse (2022)',
        loc: 'Remote',
        desc: 'I have been a mentor at Microverse for over 3 months. I have helped students with their projects and also helped them with their career path. I have also helped students with their job search.'
    },
    {
        id: 3,
        subheading: 'Embedded Systems Engineer',
        school: 'Freelance (2017-Present)',
        loc: 'Remote',
        desc: 'I have been working as a freelance embedded systems engineer for over 4 years. I have worked on several projects for clients around the globe. I have also worked on several projects for myself and my friends.'
    }
]

const Experience = () => {
    const currentDate = new Date().getFullYear();
    return (
      <section dataset="Experience" id='education' className='edu flex-row'>
          <div className='edu__item'>
        <h6 className='edu__year'>
                2017 - {currentDate}
            </h6>
            <h1 className='edu__heading'>Job Experience</h1>
            <div className='edu__container flex-column'>
            
            {JobArr.map((edu) => {
                        return (
                            <div className='edu__card flex-column' key={edu.id}>
                                <h3 className='edu__subheading'>{edu.subheading}</h3>
                                <div className='edu__info flex-row'>
                                    <span className='edu__school'>
                                        {edu.school}
                                    </span>
                                    <span className='edu__loc'>
                                        {edu.loc}
                                    </span>
                                </div>
                                <p className='edu__desc'>
                                    {edu.desc}
                                </p>
                            </div>
                        )
                    })}
            </div>

        </div>
      </section>
    )
}

export default Experience