import React, { useState, useEffect } from 'react';
import Mask1 from '/image/Mask.png';
 

const FeaturedProject = () => {
    const [featuredProjects, setFeaturedProjects] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/database/FeaturedProject.json');
                const data = await response.json();
                console.log(data);
                setFeaturedProjects(data);
            } catch (error) {
                console.error('Error fetching testimonial data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container pb-5" style={{backgroundColor:'#F0FDF4'}}>
            <div className="row pb-5">
                <div className="jumbotron">
                    <h5 className="h5 fw-bold text-success">Featured Project</h5>
                    <h3 className=" fw-bold text-dark">We provide the Perfect Solution to your business growth</h3>
                </div>
            </div>
            <div className="row mb-5">
                <div className='col-md-6'>
                    <div className="col-md-12 text-center">
                        <div className="card"  >
                            <img src={Mask1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className=''>pp Design - June 20, 2022</p>
                                <h5 className="card-title text-bold">Redesign channel website landng page</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6' id='second_div'>
                    {
                        // Create rows with two items each
                        Array.from({ length: Math.ceil(featuredProjects.length / 2) }).map((_, rowIndex) => (
                            <div className="row mb-4" key={rowIndex}>
                                {featuredProjects.slice(rowIndex * 2, rowIndex * 2 + 2).map((item, index) => (
                                    <div className="col-md-6" key={item.id}>
                                        <div className="card">
                                            <img src={item.img} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <p className="">{item.date}</p>
                                                <h5 className="card-title text-bold">{item.name}</h5>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default FeaturedProject;
