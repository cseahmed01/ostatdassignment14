import React from 'react';

const Bg = () => {
    const containerStyle = {
        height: '250px', // Set the desired height
        backgroundColor: '#f0f0f0', // Set the desired background color
        padding: '20px', // Add padding if needed
    };

    return (
        <div className='container' style={containerStyle}>
            <div className="container">
                <div className="row">
                    <div className="jumbotron">
                        <h1 className="display-4 fw-bold text-dark">Team</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item h5"><a href="#">Home</a></li>
                                <li className="breadcrumb-item  text-success h5" aria-current="page">Team</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bg;
