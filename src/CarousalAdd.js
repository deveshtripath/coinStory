import React from 'react'

function CarousalAdd() {
    return (
        <div>
            <h1 style={{ textAlign: "center", marginTop:"20px" }}>OUR PARTNERSHIPS</h1>

            <div className="container text-center my-4 mb-5 pb-5">
                <div id="recipeCarousel" className="carousel slide w-100" data-ride="carousel">
                    <div className="carousel-inner w-100" role="listbox">
                        <div className="carousel-item row no-gutters active">
                            <div className="col-4 float-left"><img className="img-fluid" src="https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/></div>
                            <div className="col-4 float-left"><img className="img-fluid" src="https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/></div>
                            <div className="col-4 float-left"><img className="img-fluid" src="https://media.gettyimages.com/photos/lawn-and-formal-garden-picture-id157672314?s=612x612"/></div>
                            {/* <div className="col-4 float-left"><img className="img-fluid" src="http://via.placeholder.com/350x280/111/fff?text=4"></div> */}
                        </div>
                        <div className="carousel-item row no-gutters">
                            <div className="col-4 float-left"><img className="img-fluid" src="https://media.gettyimages.com/photos/lawn-and-formal-garden-picture-id157672314?s=612x612"/></div>
                            <div className="col-4 float-left"><img className="img-fluid" src="https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/></div>
                            <div className="col-4 float-left"><img className="img-fluid" src="https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/></div>
                            {/* <div className="col-4 float-left"><img className="img-fluid" src="http://via.placeholder.com/350x280/bbb?text=8"/></div> */}
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#recipeCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next " href="#recipeCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
           </div> 
    )
}

export default CarousalAdd
