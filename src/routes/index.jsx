import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from '../Layout/index';
import AboutUs from '../components/AboutUs/index';
import OurWork from '../components/OurWork/index';
import ProjectDetails from "../components/ProjectDetails";
import Contact from '../components/Contact';
import MobileMenu from '../components/MobileMenu';
import WhatWeDo from '../components/WhatWeDo';


const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: 'about-us', element: <AboutUs /> }, 
        { path: 'what-wedo', element: <WhatWeDo /> },
        { path: 'our-work', element: <OurWork /> },
        { path: 'contact', element: <Contact /> },
      ],
    },
    {
      path: 'project/:projectId',
      element: <ProjectDetails />, // Render ProjectDetails on this route
    },
    {   
      path:'/mobile-menu',
      element: <MobileMenu/>
    }
  ]);

const MyRoutes = () => <RouterProvider router={router}/>;

export default MyRoutes;