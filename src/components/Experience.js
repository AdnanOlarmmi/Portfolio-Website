/*eslint-disable */
import React from 'react';

const currentDate = new Date().getFullYear();

export const JobArr = [
	{
		id: 2,
		subheading: 'Front End Developer',
		school: 'Freelance (August 2018-Present)',
		loc: 'Remote',
		desc: `
●	Collaborated with clients from diverse industries to develop custom front-end solutions, meeting their specific needs and requirements.
●	Designed and developed responsive, user-friendly websites and web applications, ensuring optimal performance and accessibility.
●	Utilized HTML, CSS, and JavaScript to create visually appealing and interactive user interfaces.
●	Incorporated modern front-end frameworks like React.js and Bootstrap, Vuetify and the likes to streamline development and enhance functionality.
●	Conducted thorough testing and debugging to ensure cross-browser compatibility and optimal site performance.
●	Communicated regularly with clients to provide project updates, gather feedback, and make necessary adjustments.
●	Managed project timelines, resources, and budgets to deliver projects on time and within scope.
● I have been working as a freelance front-end developer for over ${
			currentDate - 2018
		} years. I have worked on several projects for clients around the globe.
    `,
	},
	{
		id: 1,
		subheading: 'Code Reviewer',
		school: 'Microverse (February 2023 – December 2023)',
		loc: 'Remote',
		desc: `● Provided remote technical support to junior international full-stack web developers by spending 200+ hours on GitHub for code reviews, resulting in a 10% decrease in the number of bugs and a 15% increase in productivity.
    ●	Evaluated and reviewed over 600 Pull Requests for projects involving languages such as frontend - React, Redux, JavaScript, backends’ Ruby, Ruby on Rails, and PostgreSQL, and also Testing frameworks like Jest, React testing library, Capybara, Selenium with a feedback accuracy rate of more than 95%.
    ●	Collaborated and communicated with other code reviewers to ensure consistency in feedback and approach, resulting in a 20% increase in the quality of reviews.
    ●	Participated in multiple code review meetings to discuss feedback and identify areas for improvement, resulting in a 25% decrease in the number of bugs reported by users.
    `,
	},

	{
		id: 3,
		subheading: 'Mentor(Volunteer)',
		school: 'Microverse (2022)',
		loc: 'Remote',
		desc: `●	Mentored and worked collaboratively with 3 junior web developers, providing technical support through code walkthrough and achieving a 30% increase in their productivity.
    ●	Provided advice and tips to 3 junior web developers on how to maintain motivation to maintain longevity in the program. The retention rate of junior web developers increased by 25% and their satisfaction score improved.
    `,
	},
	// {
	// 	id: 4,
	// 	subheading: 'Embedded Systems Engineer',
	// 	school: 'Freelance (2017-Present)',
	// 	loc: 'Remote',
	// 	desc: `● Built a powerful Arduino system for measuring heartbeat and temperature accurately, achieving an accuracy rate of 98%.

	//   ● Built a light detector system using hardware components, resulting in a 75% increase in accuracy compared to previous systems used.

	//   ● Utilized Keil to build over 20 smart electronic circuit systems, with a 100% success rate in project completion and delivery.

	//   ● Utilized Proteus as well as live wire to simulate almost 100 electronic circuits, resulting in a 80% reduction in prototyping time and cost.`,
	// },
];

const Experience = () => {
  const currentDate = new Date().getFullYear();
  return (
    <section dataset="Experience" id="education" className="edu flex-row">
      <div className="edu__item">
        <h6 className="edu__year">
          2017 -
          {' '}
          {currentDate}
        </h6>
        <h1 className="edu__heading">Job Experience</h1>
        <div className="edu__container flex-column">

          {JobArr.map((edu) => (
            <div className="edu__card flex-column" key={edu.id}>
              <h3 className="edu__subheading">{edu.subheading}</h3>
              <div className="edu__info flex-row">
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

export default Experience;
