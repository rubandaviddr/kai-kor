import React from 'react'

function Carouselslider() {
    return (
        <div>
            <div>
                <div id="carouselExampleIndicators" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={require("./Pages/Img/lady.jpg")} style={{ height: "600px", objectFit: "cover" }} className="d-block w-100 img-fluid" alt="me" />
                        </div>
                        <div className="carousel-item">
                            <img src={require("./Pages/Img/boy.webp")} style={{ height: "600px", objectFit: "cover" }} className="d-block w-100 img-fluid" alt="me" />
                        </div>
                        <div className="carousel-item">
                            <img src={require("./Pages/Img/eCommerce.jpg")} style={{ height: "600px", objectFit: "cover" }} className="d-block w-100 img-fluid" alt="me" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Carouselslider