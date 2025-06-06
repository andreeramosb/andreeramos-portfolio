import React, { forwardRef } from 'react';
import './projects.css';
import ProjectCard from '../projectCard/ProjectCard';

const ProjectsList = forwardRef(({ repo = [], isLoading }, ref) => {
  return (
    <div ref={ref} className="container-fluid projects-section-container">
      {isLoading ? (
        <div className="loader"><strong>Loading...</strong></div>
      ) : (
        Array.isArray(repo) && repo.length > 0 ? (
          <div className="row justify-content-center g-4">
            {repo.map((item) => (
              <div key={item.id} className="col-12 col-sm-6 col-md-6 col-lg-4 d-flex justify-content-center">
                <ProjectCard item={item} />
              </div>
            ))}
          </div>
        ) : (
          <div className="no-projects">No hay proyectos para mostrar.</div>
        )
      )}
    </div>
  );
});

export default ProjectsList;