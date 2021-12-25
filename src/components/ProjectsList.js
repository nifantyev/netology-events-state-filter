import React from 'react';

const ProjectsList = ({ projects }) => {
  return (
    <div className="projects">
      {projects.map((item) => (
        <div className="projects__item" key={item.id}>
          <img src={item.img} alt="" />
        </div>
      ))}
    </div>
  );
};

export default ProjectsList;
