import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/HeroSection/index';
import AboutUs from '../components/AboutUs/index';
import OurWork from '../components/OurWork/index'

function Layout() {
  const location = useLocation(); // Get current location from React Router

  return (
    <div className='layout'>
      <main>
        <HeroSection />
        <AboutUs />
        <OurWork/>
      </main>
      {location.pathname !== '/project/:projectId' && <Outlet />} {/* Conditionally render project details */}
    </div>
  );
}

export default Layout;