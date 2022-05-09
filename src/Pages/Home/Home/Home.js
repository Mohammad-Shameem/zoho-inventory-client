import React from 'react';
import PageTitle from '../../SharedPages/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import HomeItem from '../HomeItem/HomeItem';
import Wellcome from '../Wellcome/Wellcome';
import './Home.css'

const Home = () => {
    return (
        <>
            <div className='home'>
                <PageTitle title="Home"></PageTitle>
                <Wellcome></Wellcome>
                <Banner></Banner>
                <HomeItem></HomeItem>
                <Categories></Categories>
            </div>
        </>



    );
};

export default Home;