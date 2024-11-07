import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <NavBar />
            <div className="min-h-[calc(100vh-350px)]">
  <Outlet />
</div>
            <Footer />
        </div>
    );
};

export default MainLayout;