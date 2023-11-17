 
import React, { useState, useEffect } from 'react';
const Allproject = () => {
    const [projectListData, setprojectListData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('/database/project.json'); // Update the path based on your folder structure
            const data = await response.json();
            console.log(data);
            setprojectListData(data);
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
                        <h5 className="h5 fw-bold text-success">ALL PROJECT</h5>
                        <h3 className="h fw-bold text-dark">Better Agency/SEO Solution At Your FinguerPrint</h3>
                    </div>
                </div>
                <div className="row mb-5">

                    {
                        projectListData.map((item, index) => {
                            return (
                                <div className="gy-3 col-md-6 text-center" key={item.id}>
                                    <div className="card border">
                                        <img src={item.img} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title text-bold">{item.projectname}</h5>
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

export default Allproject;
