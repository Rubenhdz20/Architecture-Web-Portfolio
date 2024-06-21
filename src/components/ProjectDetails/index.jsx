import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './ProjectDetails.css';

function ProjectDetails() {
    const { projectId } = useParams();
    const location = useLocation();
    const project = location.state?.project;

    console.log(project);

    if (!project || project.id !== parseInt(projectId)) {
        return <p>Loading project details...</p>; // Or display a placeholder
    }

    const renderImages = () => {
      if (project.images && project.images.length) {
        return project.images.map((image, index) => (
          <img
            key={index}
            src={image} // Assuming image paths are now relative to public folder
            alt={`Image for ${project.name}`}
          />
        ));
      }
      return null;
    };

    console.log("image paths:", project.images);

    return (
        <div className='project-details'>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <div className='project-details-images'>{renderImages()}</div>
        </div>
    );
}

export default ProjectDetails;