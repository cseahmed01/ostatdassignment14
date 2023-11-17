import React, { useState, useEffect } from 'react';

const ServiceList = () => {


    const [serviceListData, setserviceListData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('/database/service.json'); // Update the path based on your folder structure
          const data = await response.json();
          console.log(data);
          setserviceListData(data);
        } catch (error) {
          console.error('Error fetching testimonial data:', error);
        }
      };
    
      fetchData();
    }, []);
    return (
        <>
            <div className="container bg-light">
                <div className="row pb-5">
                    <div className="jumbotron">
                        <h5 className="h5 fw-bold text-success">Our all Services</h5>
                        <h3 className="h fw-bold text-dark">We Provide Best web Design Service</h3>
                    </div>
                </div>
                <div className="row mb-5">

                    {
                        serviceListData.map((item, index) => {
                            return (
                                <div className="col-md-6 text-center gy-2 pb-4" key={item.id}>
                                    <div className="card">
                                        <div className="card-body">
                                            <h2 className="card-title text-bold">{item.servicename}</h2>
                                        </div>
                                        <p>Increase your team’s productivity and save time with a bot that answers and fields customer inquiries</p>
                                        <img src={item.img} className="card-img-top" alt="..." />

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

export default ServiceList;
