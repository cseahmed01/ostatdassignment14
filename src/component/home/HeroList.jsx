import React, { useState, useEffect } from 'react';
import reactangle1 from '/image/Rectangle1241.png';
import reactangle2 from '/image/Rectangle1242.png';
import reactangle3 from '/image/Rectangle1243.png';
import reactangle4 from '/image/Rectangle1244.png';


const HeroList = () => {


    const [patnerlist, setpatnerlist] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/database/patnerlist.json'); // Update the path based on your folder structure
                const data = await response.json();
                console.log(data);
                setpatnerlist(data);
            } catch (error) {
                console.error('Error fetching testimonial data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className="container" style={{ backgroundColor: '#D7F5DC' }}>
            <div className="row">
                <div className="col-md-6">
                    <h1 className='mt-5'>
                        Increase Your Customers Loyalty and Satisfaction
                    </h1>
                    <p className='mt-5'>
                        We help businesses like yours earn more customers, stand out from competitors, make more money
                    </p>
                    <button className='btn btn-success btn-lg'>Get Started</button>
                </div>
                <div className="col-md-6 mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={reactangle1} className="img-fluid w-100 h-100" alt="..." />
                        </div>
                        <div className="col-md-6">
                            <img src={reactangle2} className="img-fluid w-100 h-100" alt="..." />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6">
                            <img src={reactangle3} className="img-fluid w-100 h-100" alt="..." />
                        </div>
                        <div className="col-md-6">
                            <img src={reactangle4} className="img-fluid w-100 h-100" alt="..." />
                        </div>
                    </div>
                </div>
            </div>

            <div className='row p-10 p-5 d-flex justify-content-center' style={{ backgroundColor: '#F8FFF9' }}>

                {
                    patnerlist.map((item, index) => {
                        return (
                            <div className="col-md-2">
                                <img src={item.img} className="img-fluid w-20 h-20" alt="..." />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default HeroList;
