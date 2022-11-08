import React from 'react';
import { Outlet } from 'react-router-dom';
import FooterCustomComponent from '../pages/Shared/Footer/FooterCustomComponent';
import Header from '../pages/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <FooterCustomComponent></FooterCustomComponent>
        </div>
    );
};

export default Main;