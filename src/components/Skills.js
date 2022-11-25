/*eslint-disable */
import React from 'react';

const DevArr = ['HTML5', 'CSS3', 'JavaScript', 'React', 'Redux', 'StoryBook', 'NodeJS', 'ExpressJS', 'MongoDB', 'Mongoose', 'TypeScript', 'Ruby'];

const Skills = () => (
  <section dataset="Skills" id="education" className="skill flex-row">
    <div className="edu__item">
      <h6 className="edu__year">
        Features
      </h6>
      <h1 className="edu__heading">
        Development Skill
      </h1>
      <ul className="skill__list">
        {DevArr.map((skill, index) => (
          <li className="skill__item  flex-column" key={index}>
            <p className="skill__name">{skill}</p>
            <span className="skill__design" />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Skills;
