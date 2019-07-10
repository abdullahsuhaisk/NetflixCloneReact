import React from 'react';
import Header from './Header';
import Tabs from './Tabs';
import { TabsItem1, TabsItem2, TabsItem3 } from './TabsItems';
import Footer from './Footer';

const LandingScreen = () => {
    return (
        <>
        <Header />
        <Tabs />
        <TabsItem1 />
        <TabsItem2 />
        <TabsItem3 />
        <Footer />
        </>
    )
}

export default LandingScreen;

