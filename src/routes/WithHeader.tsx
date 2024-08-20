import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import ScrollTop from '../components/scrollTop/ScrollTop';
import { useEffect, useState } from "react"
import Preloader from "../components/preloader/Preloader"

interface WithHeaderProps {
    component: React.ComponentType;
    route: string;
    isAuthenticated: boolean;
}

export const WithHeader: React.FC<WithHeaderProps> = (props) => {
    const { component: Component, route, isAuthenticated, ...rest } = props;
    const [Loading, SetLoading] = useState(true);
    useEffect(() => {
        console.log("preloadwer")
        const timer = setTimeout(() => {
            SetLoading(false)
        }, 1000);
        return () => clearTimeout(timer);
    })
    return (
        <>
            {
                Loading && <Preloader />
            }
            <Header />
            <Component {...rest} />
            <ScrollTop />
            <Footer />
        </>
    );
};
