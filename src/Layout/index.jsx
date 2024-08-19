import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet
import HeroSection from '../components/HeroSection/index';
import AboutUs from '../components/AboutUs/index';
import OurWork from '../components/OurWork/index';
import Contact from '../components/Contact';
import WhatWeDo from '../components/WhatWeDo';


function Layout() {
  return (
    <div className='layout'>
      <main>
        <HeroSection />
        <AboutUs />
        <WhatWeDo/>
        <OurWork/>
        <Contact/>
        <Outlet/>
      </main>
    </div>
  );
}

export default Layout;