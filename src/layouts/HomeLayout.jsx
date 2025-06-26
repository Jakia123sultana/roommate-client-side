import React from 'react';
import { Outlet, useLoaderData } from 'react-router';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MainLayout = () => {

    return (
        <div>
             
            <div className='max-w-7xl mx-auto'>
              <Navbar />
                <Outlet></Outlet>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;