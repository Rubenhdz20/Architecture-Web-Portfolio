import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/HeroSection/index';
import AboutUs from '../components/AboutUs/index';
import OurWork from '../components/OurWork/index';
import Contact from '../components/Contact';

function Layout() {
  const location = useLocation(); 

  return (
    <div className='layout'>
      <main>
        <HeroSection />
        <AboutUs />
        <OurWork/>
        <Contact/>
      </main>
      {location.pathname !== '/project/:projectId' && <Outlet />}
    </div>
  );
}

export default Layout;