import React, { useState } from 'react';
import ProjectsList from './ProjectsList';
import Toolbar from './Toolbar';

const Portfolio = ({ projects }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filteredProjects =
    activeFilter !== 'All'
      ? projects.filter((val) => val.category === activeFilter)
      : projects;
  return (
    <div className="portfolio">
      <Toolbar
        filters={['All', 'Websites', 'Flayers', 'Business Cards']}
        selected={activeFilter}
        onSelectFilter={(filter) => {
          setActiveFilter(filter);
        }}
      />
      <ProjectsList projects={filteredProjects} />
    </div>
  );
};

export default Portfolio;
