import React from 'react';
import CustomersReview from '../../CustomersReview/CustomersReview';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import Perfumes from '../Perfumes/Perfumes';
const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Perfumes></Perfumes>
            <Brands></Brands>
            <CustomersReview></CustomersReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;