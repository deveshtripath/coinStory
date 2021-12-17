// import Carousel from "react-multi-carousel";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


function Carousal(){
  return (
    <>

    <h1 style={{ textAlign: "center", marginTop:"20px" }}>WE FEATURED ON</h1>
    <Carousel
      ssr
      partialVisbile
      itemClass="image-item"
      responsive={responsive}
    >
      <div style={{ position: "relative" }}>
            <img
              draggable={false}
              alt="text"
              style={{ width: "100%", height: "100%" }}
              src="https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            />
            
          </div>

          <div style={{ position: "relative" }}>
            <img
              draggable={false}
              alt="text"
              style={{ width: "100%", height: "100%" }}
              src="https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            />
            
          </div>

          <div style={{ position: "relative" }}>
            <img
              draggable={false}
              alt="text"
              style={{ width: "100%", height: "100%" }}
              src="https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            />
            
          </div>
          
          <div style={{ position: "relative" }}>
            <img
              draggable={false}
              alt="text"
              style={{ width: "100%", height: "100%" }}
              src="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            />
            
          </div>

          
          <div style={{ position: "relative" }}>
            <img
              draggable={false}
              alt="text"
              style={{ width: "100%", height: "100%" }}
              src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            />
            
          </div>
    </Carousel>
    </>
  );
};

export default Carousal;
