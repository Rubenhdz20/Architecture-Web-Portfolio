import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from '../Layout/index';
import ProjectDetails from "../components/ProjectDetails";
import MobileMenu from '../components/MobileMenu';



const MyRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        {/* Define the main layout and nested routes */}
        <Route path="/" element={<Layout />}>
        </Route>
        {/* Define routes that are not nested within Layout */}
        <Route path="/project/:projectId" element={<ProjectDetails />} />
        <Route path="/mobile-menu" element={<MobileMenu />} />
      </Routes>
    </HashRouter>
  );
};

export default MyRoutes;