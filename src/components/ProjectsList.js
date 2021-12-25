import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

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

ProjectsList.propTypes = propTypes;

export default ProjectsList;
