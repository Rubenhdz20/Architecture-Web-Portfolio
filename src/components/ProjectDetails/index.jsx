import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './ProjectDetails.css'; 

function ProjectDetails({ project }) {
  if (!project || Object.keys(project).length === 0) {
    return <p>Loading project details...</p>; // Or display a placeholder
  }

  console.log("project:", project);
  
  const renderImages = () => {
    // Assuming project.images is an array of image paths
    if (project.images && project.images.length) {
      return project.images.map((image) => (
        <img
          key={image} // Use a unique key for each image
          src={image} // Assuming image is the actual image path
          alt={`Image for ${project.name}`}
        />
      ));
    }
    return null; // Or display a message if no images exist
  };
  
  return (
    <div className='project-details'>
      <h2>{project.name}</h2>
      <div className='project-details-images'>{renderImages()}</div> 
      <p>{project.description}</p>
      {/* ... other project details */}
    </div>
  );
}


export default ProjectDetails;