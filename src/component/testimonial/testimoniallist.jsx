import React, { useState, useEffect } from 'react';

const Testimoniallist = () => {
  const [teamListData, setTeamListData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/database/testimonal.json'); // Update the path based on your folder structure
        const data = await response.json();
        console.log(data);
        setTeamListData(data);
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
                        <h5 className="h5 fw-bold text-success">TESTIMONIAL LIST</h5>
                        <h3 className="h fw-bold text-dark">Better Agency/SEO Solution At Your FinguerPrint</h3>
                    </div>
                </div>
        <div className="row">
          {teamListData.map((item, index) => {
            return (
              <div className="col-md-4 text-center gy-2" key={item.id}>
                <div className="card">
                  <img src={item.img} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="text-muted">{item.description}</p>
                    <h2 className="card-title text-bold">{item.name}</h2>
                    <h5>{item.designaton}</h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Testimoniallist;
