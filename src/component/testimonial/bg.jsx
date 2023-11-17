import React from 'react';

const Bg = () => {
    return (
        <>
            <div className="container bg-light pb-5">
                <div className="row">
                    <div className="jumbotron">
                        <h1 className="display-6 fw-bold text-dark">Testimonial List</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item h5"><a href="#">Home</a></li>
                                <li className="breadcrumb-item  text-success h5" aria-current="page">Testimonial</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div> 
        </>
    );
}

export default Bg;
