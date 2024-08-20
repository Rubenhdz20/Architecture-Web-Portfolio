import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProjectsContext } from '../ProjectContext';
import './ProjectDetails.css';

function ProjectDetails() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const { projects } = useContext(ProjectsContext); 
  const [project, setProject] = useState(null);

  useEffect(() => {
      const foundProject = projects.find(p => p.id === parseInt(projectId));
      if (!foundProject) {
          navigate('/not-found'); 
      } else {
          setProject(foundProject);
      }
      window.scrollTo(0, 0);
  }, [projectId, projects, navigate]);

  const handleClick = () => {
    navigate('/');
  };

  const renderImages = () => {
    if (project?.images && project.images.length) {
      return project.images.map((image, index) => (
        <img 
          className='project-details__images'
          key={index}
          src={image}
          alt={`Image for ${project.name}`}
        />
      ));
    }
    return null;
  };

  if (!project) {
      return <p>Loading project details...</p>;
  }

  return (
    <div className='project-details'>
        <svg className='project-details__svg'  viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleClick}>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M18 8C18 8.41421 17.6642 8.75 17.25 8.75H2.56031L8.03063 14.2194C8.32368 14.5124 8.32368 14.9876 8.03063 15.2806C7.73757 15.5737 7.26243 15.5737 6.96937 15.2806L0.219375 8.53063C0.0785422 8.38995 -0.000590086 8.19906 -0.000590086 8C-0.000590086 7.80094 0.0785422 7.61005 0.219375 7.46937L6.96937 0.719375C7.26243 0.426319 7.73757 0.426319 8.03063 0.719375C8.32368 1.01243 8.32368 1.48757 8.03063 1.78062L2.56031 7.25H17.25C17.6642 7.25 18 7.58579 18 8Z" fill="black"/>
        </svg>
        <h2 className='project-details__title'>{project.name}</h2>
        <p className='project-details__description'>{project.description}</p>
        <p className='project-details__details'>{project.details}</p>
        <p className='project-details__details'>{project.details2}</p>
        <p className='project-details__details'>{project.details3}</p>
        <div className='project-details__container--images'>{renderImages()}</div>
    </div>
  );
}

export default ProjectDetails;