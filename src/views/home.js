import React from 'react';
const Home = () => {
    return (

        <div className="container-fluid">
            <>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src="../img/1.jpg"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="../img/stormtrooper2.jpg"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="../img/yoda.jpg"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="../img/darth-vader3.jpg"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </>
            </div>
	);

}
export default Home;