import React from 'react';
import { Outlet } from "react-router-dom"
import Navbar from '../Components/Navbar/Navbar';

const Layout = () => {
    return (
        <div >
          <div className=' '>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
        </div>
   
    );
};

export default Layout;