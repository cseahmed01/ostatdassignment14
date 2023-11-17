import React, { useState, useEffect } from 'react';

 
const TeamList = () => {
    const [teamListData, setTeamListData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('/database/team.json'); // Update the path based on your folder structure
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
                        <h5 className="h5 fw-bold text-success">Our TEAM MEMBER</h5>
                        <h3 className="h fw-bold text-dark">We Provide Best web Design Service</h3>
                    </div>
                </div>
                <div className="row mb-5">

                    {
                        teamListData.map((item, index) => {
                            return (
                                <div className="col-md-4 text-center" key={item.id}>
                                    <div className="card"  >
                                        <img src={item.img} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title text-bold">{item.name}</h5>
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

export default TeamList;
