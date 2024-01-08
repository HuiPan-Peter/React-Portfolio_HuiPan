import React, { useEffect, useRef, useState } from 'react';
import { Slide } from "react-awesome-reveal"; //Slide animation from react-awesome-reveal
import './Resume.css';
import resumepdf from '../../assets/pdf/RESUME_Mr.HuiPan-ReactP.pdf';

const Resume = () => {
  // Array of proficiencies
  const developerProficiencies = [
    'JavaScript',
    'React',
    'HTML',
    'CSS',
    'Node.js',
    'Express',
    'MongoDB',
    'SQL',
    'APIs',
    'Test-Driven Development (TDD)',
    'Responsive Web Design',
    'JSON Web Tokens (JWT)',
    'OAuth',
    'GraphQL'
  ];

  //Keep track of work history
  const [expandedJobs, setExpandedJobs] = useState({});

  //Toggle function for job duty details
  const toggleJobExpansion = (index) => {
    setExpandedJobs((prevExpandedJobs) => ({
      ...prevExpandedJobs,
      [index]: !prevExpandedJobs[index],
    }));
  };
  
  const [currentProficiencyIndex, setCurrentProficiencyIndex] = useState(0);
  const proficiencyRef = useRef(null);


  //Scrolling effect
  useEffect(() => {
    // Update the scrolling text continuously every 1 second
    const interval = setInterval(() => {
      setCurrentProficiencyIndex(
        (prevIndex) => (prevIndex + 1) % developerProficiencies.length
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [developerProficiencies.length]);

  const education = [
    {
      degree: 'Certificate',
      major: 'Full-Stack Web Development',
      university: 'University of New Brunswick',
      location: 'Fredericton, NB',
    },
    {
      degree: 'Bachelor of Science',
      major: 'Computer Sciences',
      university: 'University of Portsmouth',
      location: 'Portsmouth, UK',
    },
    {
      degree: 'Diploma',
      major: 'Computer Sciences',
      university: 'Beijing University of Technology, CIBT',
      location: 'Beijing, CN',
    },
  ];

  const workHistory = [
    {
      title: '🔷Computer Network & Web Technician',
      companies: ['New Sight Education Inc.'],
      locations: ['Fredericton, NB'],
      startDate: 'November 2021',
      endDate: 'Present',
      duties: [
        '1.Manage, operate, update and maintain business network relevant matters;',
        '2.Create safe and smooth network environment for the business team and users;',
        '3.Troubleshoot and solve computer and network related   problem of all kinds;',
      ],
    },
    {
      title: '🔷Manager',
      companies: ['Beijing Guaranstone Technology Co. Ltd.'],
      locations: ['Beijing, CN'],
      startDate: 'Aygust 2012',
      endDate: 'October 2021',
      duties: [
        '1.As a technical service provider of Sinopec, I was leading a team in charge of all SINOPEC-related information-system projects.',
        '2.Establish the Real-time Database System for Large-scale Groups or small companies. I was alone or leading the team to fulfill our customer need.', 
        '3.After the delivery, troubleshoot the system-operation and de-bug the potential safety hazard until the Contract is completed.',
      ],
    },
    {
      title: '🔷Application Development Engineer',
      companies: ['Petro-Cyberworks Infomation Technology Co. Ltd.'],
      locations: ['Beijing, CN'],
      startDate: 'June 2008',
      endDate: 'August 2012',
      duties: [
        '1.	SINOPEC RTDB system development, Network construction and system maintains; leading a team to provide technical support for SINOPEC headquarter & local branches.',
        '2. Developing Petrochemical Manufacturing Command System for SINOPEC, and in charge of the implementation on both headquarter & local branches.',
        '3. Initiating & driving the standardization of RTDB in SINOPEC.',
      ],
    },

  ];


  
  return (
    <section id="resume">
          <div className="section__wrapper">
    <div className="media-body row resume-content">
      <h1>Resume</h1>

      <h2>--Education--</h2>
      <p>{' '}</p>
      {education.map((edu, index) => (
        <div key={index}>
          <p>
            {edu.degree} ({edu.major})
            <br />
            {edu.university}
            <br />
            {edu.location}
          </p>
        </div>
      ))}
      <h2>--Work History-- </h2>
      {workHistory.map((job, index) => (
        <div className="resume-content" key={index}>
          <Slide cascade triggerOnce={true}>
          <h3 onClick={() => toggleJobExpansion(index)}>
            
            {job.title}
            {job.companies && job.companies.length > 0 ? ` (${job.companies.join(' / ')})` : ''}
            {job.locations && job.locations.length > 0 ? ` (${job.locations.join(' / ')})` : ''}
          </h3>
          <p>
            {job.startDate} - {job.endDate}
          </p>
          {expandedJobs[index] ? (
            <ul>
              {job.duties.map((duty, idx) => (
                <li key={idx} className="job-duties">{duty}</li>
              ))}
            </ul>
          ) : null}
          </Slide>
        </div>
      ))}
      <h4>(click each job title to view job details)</h4>
      <div className="skills">
        <h3>----Developer Proficiencies----</h3>
        <div className="scrolling-text">
          <span ref={proficiencyRef} className="proficiency-text">
            {developerProficiencies[currentProficiencyIndex]}
          </span>
        </div>
      </div>
      <a
        href={resumepdf} download
        target="_blank"
        rel="noopener noreferrer"
        className="pulse-link" // Add the pulse-link class to the download link
      >
        🔷 You can download my resume here 🔷
      </a>
      </div>
      </div>
    </section>
  );
};
export default Resume;