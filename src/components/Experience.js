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
    id: 4,
    subheading: 'Senior Front End Developer',
    school: 'WorthIT (May 2023 - Dec 2023)',
    loc: 'Remote',
    desc: `
    ● Held the development of the Atomicat Web Builder, resulting in a platform usable by over 5 million users to create more than 2 million websites.
    ● Designed an intuitive drag-and-drop interface, reducing the average website creation time by 40%.
    ● Implemented the logic for the preview and publish pages to show the exact page designed by the users on the builder page, which resulted in 100% accuracy of page built on the bulder page to be rendered on preview page and ultimately, the publish page.
    ● Implemented Undo and Redo functionalities on the builder page. 
    ● Implemented Next.js for server-side rendering, reducing page load times by an average of 25%.
    ● Implemented React Internationalization technology to enable multilingual support, allowing diverse users to create websites in multiple languages.
    ● Integrated Firebase for real-time collaboration, enabling 1,000 concurrent users to work simultaneously on a single project.
    ● Utilized Redux for state management, resulting in a 30% reduction in app crashes.
    ● Developed a robust SCSS-based theming system, leading to a 50% increase in user customization.
    ● Engineered the platform for scalability, accommodating 10 million users with a 20% annual user growth rate.   
    ● Conducted daily meetings with cross-functional teams to gather user feedback, resulting in 50 feature enhancements and a 25% increase in user satisfaction.   
    ● Ensured cross-platform compatibility, resulting in a 60% improvement in mobile responsiveness.  
    ● Collaborated with cross-functional teams to gather user feedback, resulting in 50 feature enhancements and a 25% increase in user satisfaction.   
    ● Conducted rigorous testing, reducing the number of bugs by 40% through comprehensive quality assurance efforts.    
    ● Created extensive documentation and provided training, resulting in a 30% reduction in support ticket volume.`
  },
  {
    id: 5,
    subheading: 'Led Front End Developer',
    school: 'Solacely (May 2023 - Nov 2023)',
    loc: 'Remote',
    desc: `● Improved and suggested innovative features to the user interface, which increases user satisfaction by 30%.
    ● Reorganized and cleaned previous code, to achieve up to 40% decrease in bugs rate.
    ● Successfully led and collaborated with two front end interns, to develop and maintain a scalable and powerful web app for the startup prop-tech. The project resulted in a 25% increase in web app speed and good user interface and user experience performances.
    ● Oversaw and review over several apps pull requests, reducing the average review time from 2 days to 12 hours, and improving the accuracy of code reviews resulting in a 15% decrease in bugs and errors in the working version of the app.
    ● Optimized the enterprise web app for accessibility and scalability, achieving a maximum user capacity of 1,500 users without any system failures or downtime. The load time was improved by 3 seconds, leading to 40% of users reporting improved performance and usability.
    ● Implemented agile methodologies to enhance project management, resulting in a 20% increase in productivity and a 15% decrease in project delivery time.
    ● The user interface is responsive and adaptive, working well on various devices and screen sizes, while the user experience is intuitive and user-focused, making it easy for users to achieve their goals.`
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
