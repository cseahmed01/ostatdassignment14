import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/style.css';


const StatList = () => {

    const [statlistdata, setstatlistdata] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/database/statlist.json'); // Update the path based on your folder structure
                const data = await response.json();
                console.log(data);
                setstatlistdata(data);
            } catch (error) {
                console.error('Error fetching testimonial data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className="container mt-5 p-5">
            <div className="row">
                {
                    statlistdata.map((item, index) => {
                        return (
                            <div className="col-md-3 text-center gy-2">
                                <div className="card">
                                    <div className="card-body d-flex flex-column align-items-center justify-content-center">
                                        <div className="custom-div">
                                            <img src={item.img} />
                                            <div className="inner-content"></div>
                                        </div>
                                        <h1 className="mt-3">{item.number}</h1>
                                        <h5 className="card-title">{item.title}</h5>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default StatList;
