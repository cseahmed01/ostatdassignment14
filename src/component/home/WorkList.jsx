import React, { useState, useEffect } from 'react';

const WorkList = () => {

    const [worklist, setworklist] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/database/worklist.json'); // Update the path based on your folder structure
                const data = await response.json();
                console.log(data);
                setworklist(data);
            } catch (error) {
                console.error('Error fetching testimonial data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <h5 className='text-success mb-5'>Work List</h5>
                    <p className='h3'>We provide the Perfect Solution to your business growth</p>

                    {
                        worklist.map((item, index) => {
                            return (

                                <div className="col-md-4">
                                    <div className="card h-100 border-0 text-center">
                                        <div className="card-body d-flex flex-column align-items-center justify-content-center">
                                            <div className="custom-div">
                                                <div className="inner-content">
                                                    <img src={item.img} />
                                                </div>
                                            </div>
                                            <h1>{item.title}</h1>
                                            <p className="card-title">{item.des}</p>
                                            <button className='btn btn-warning'>Learn More</button>
                                        </div>
                                    </div>




                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default WorkList;
