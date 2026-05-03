import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import HypedFooter from '../Components/HypedFooter';
import RealHomesFooter from '../Components/RealHomesFooter';

const Root = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <HypedFooter/>
            <RealHomesFooter/>
        </div>
    );
};

export default Root;