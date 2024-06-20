import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from '../Layout/index';
import AboutUs from '../components/AboutUs/index';
import OurWork from '../components/OurWork/index';
import ProjectDetails from "../components/ProjectDetails";


const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: 'about-us', element: <AboutUs /> }, 
        { path: 'our-work', element: <OurWork /> },
      ],
    },
    {
      path: '*',
      element: <ProjectDetails />, // Render ProjectDetails on this route
    },
  ]);

const MyRoutes = () => <RouterProvider router={router}/>;

export default MyRoutes;