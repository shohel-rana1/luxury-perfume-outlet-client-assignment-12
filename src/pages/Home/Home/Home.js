import React from 'react';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import Perfumes from '../Perfumes/Perfumes';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Perfumes></Perfumes>
            <Brands></Brands>
        </div>
    );
};

export default Home;