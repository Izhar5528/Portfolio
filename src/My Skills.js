import React from 'react';
import './My Skills.css'; // Import your CSS file for styling

const MySkills = () => {
  const skills = [
    { name: 'Web Development', level: 4 },
    { name: 'UI/UX Design', level: 4 },
    { name: 'Docker', level: 4 },
    { name: 'Jenkins', level: 4 },
    { name: 'Terraform', level: 3 },
    { name: 'AWS', level: 5 },
    { name: 'Azure', level: 4 },
    { name: 'Git', level: 5 },
    { name: 'Github Actions', level: 5 },
  ];

  const getSkillLevelStars = (level) => {
    const maxStars = 5;
    const filledStar = '★';
    const emptyStar = '☆';
    return filledStar.repeat(level) + emptyStar.repeat(maxStars - level);
  };

  return (
    <section className="my-skills py-5">
      <div className="container">
        <h2 className="my-skills-title">Skills</h2>
        <div className="row">
          {skills.map((skill, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card skill-card">
                <div className="card-body">
                  <h5 className="skill-name">{skill.name}</h5>
                  <p className="skill-level">
                    Skill Level: <span className="skill-stars">{getSkillLevelStars(skill.level)}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkills;




