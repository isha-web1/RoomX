import React from 'react';
import Navbar from '../components/shared/Navbar/Navbar';
import Footer from '../components/shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
        <Navbar />
        <div className='pt-24 min-h-[calc(100vh-68px)]'>
          <Outlet />
        </div>
        <Footer />
      </div>
    );
};

export default Main;