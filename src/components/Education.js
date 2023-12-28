/*eslint-disable */
import React from 'react';

const currentDate = new Date().getFullYear();

export const EduArr = [
  {
    id: 1,
    subheading: 'BEng. Computer Engineering',
    school: 'University of Ilorin (2014 - 2019)',
    loc: 'Ilorin',
    desc: `Completed a five-year Bachelor of Engineering (B.Eng.) program in Computer Engineering at the University of Ilorin, where I gained practical, hands-on experience in designing, developing, and managing computer systems and networks. The coursework covered a broad range of topics, including computer science computer hardware and software, computer networks, programming, microcontrollers, embedded systems, computer graphics, and artificial intelligence.	Built a powerful Arduino system for measuring heartbeat and temperature accurately in real-time, achieving an accuracy rate of 98%.`,
  },
  {
    id: 2,
    subheading: 'Full Stack Web Development',
    school: 'Microverse (2022)',
    loc: 'California',
    desc: `Spent 1300+ hours mastering algorithms, data structures, and full-stack development while simultaneously developing projects with Ruby, Rails, JavaScript, React, and Redux and writing Tests with Jest, React Testing Library, Capybara while following the agile and scrum methodologies. Developed skills in remote pair programming using GitHub, industry-standard git-flow, and daily standups to enable effective communication and collaboration with international remote developers.`,
  },
  {
    id: 3,
    subheading: 'High School Diploma',
    school: 'M.C.G.S (2009 - 2014)',
    loc: 'Lagos',
    desc: 'This course provided learners with the knowledge, understanding, and skills necessary to progress to higher-level qualifications in a science or technology-related field or to employment in a science or technology-related field.',
  },
];

const Education = () => {
  const currentDate = new Date().getFullYear();
  return (
    <section dataset="Education" id="education" className="edu flex-row">
      <div className="edu__item">
        <h6 className="edu__year">
          1999 -
          {' '}
          {currentDate}
        </h6>
        <h1 className="edu__heading">
          Education Quality
        </h1>
        <div className="edu__container flex-column">
          {EduArr.map((edu) => (
            <div className="edu__card flex-column" key={edu.id}>
              <h3 className="edu__subheading">{edu.subheading}</h3>
              <div className="edu__info">
                <span className="edu__school">
                  {edu.school}
                </span>
                <span className="edu__loc">
                  {edu.loc}
                </span>
              </div>
              <p className="edu__desc">
                {edu.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Education;
