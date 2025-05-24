import React from 'react';
import { Outlet, useLoaderData } from 'react-router';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MainLayout = () => {

    return (
        <div>
             <Navbar />
            <div className='max-w-9xl mx-auto'>
              
                <Outlet></Outlet>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;