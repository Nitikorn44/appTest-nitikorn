import React from 'react'

export default function Home() {
    return (
        <div>
            <div className="container mt-3">
                <div className="col-sm-3"></div>
                <h2>Welcome to Website Nitikorn</h2>
            </div>
            <div id="demo" class="carousel slide" data-bs-ride="carousel">


                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </div>


                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="./images/1.jpg" alt="1" class="d-block w-100" />
                    </div>
                    <div class="carousel-item">
                        <img src="./images/2.jpg" alt="2" class="d-block w-100" />
                    </div>
                    <div class="carousel-item">
                        <img src="./images/3.jpg" alt="3" class="d-block w-100" />
                    </div>
                </div>


                <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </button>
            </div>
            <div className="container mt-4">
                <div className="col-sm-5"></div>
                <h3>About Me</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
            </div>
        </div>
    )
}
