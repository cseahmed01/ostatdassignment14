import React from 'react';
import StatList from '../component/home/StatList';
import WorkList from '../component/home/WorkList';
import HeroList from '../component/home/HeroList';
import FeaturedProject from '../component/home/FeaturedProject';

const HomePage = () => {
    return (
        <div className='container'>
            <HeroList />
            <WorkList />
            <StatList />
            <FeaturedProject/>
        </div>
    );
}

export default HomePage;
