import React from 'react';
import '../App.css';

const Skills = () => {


  // Define skills by category
  const skills = {
    frontend: [
      'HTML5',
      'CSS3',
      'JavaScript (ES6+)',
      'React.js',
      'Tailwind CSS',
      
    ],
    backend: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'REST APIs',
      'Authentication (JWT)',

    ],
    tools: [
      'Git',
      'GitHub',
      'VS Code',
      'Postman',
      'MongoDB',
      'Render',
      'Vercel',
      'Docker',
    ],
    other: [
      'MS Office (Word, Excel, PowerPoint)',
      'Basic Computer Skills',
      'Problem Solving',
      'Team Collaboration',
      'Agile Methodologies',
      'Debugging',
      'Version Control',
    ],
  };

  const handleDownload = () => {
    alert('My Resume is downloading..\nCheckout..');
  };

  return (
    <section className="skills">
      <div className='resume-download'>
      <h2>My Resume</h2>
      <button className="download-button" onClick={() => {
          handleDownload();
          window.location.href = "https://drive.google.com/uc?export=download&id=1alE61riyhedWV9GUHW4dhhmH8pEsd9qp";
        }}>
          Download Resume
        </button>
      </div>


      <h1>My Skills</h1>

      {/* Frontend Skills */}
      <div className="skills-category">
        <h2>Frontend</h2>
        <ul>
          {skills.frontend.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      {/* Backend Skills */}
      <div className="skills-category">
        <h2>Backend</h2>
        <ul>
          {skills.backend.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      {/* Tools */}
      <div className="skills-category">
        <h2>Tools</h2>
        <ul>
          {skills.tools.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      {/* Other Skills */}
      <div className="skills-category">
        <h2>Other Skills</h2>
        <ul>
          {skills.other.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;