import React from "react";
import chevronNext from '../img/chevron-next.svg';
import CastCards from "./CastCards";
import Data from "./Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function Casts (){
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 3000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
         
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ]
  };
  return (
    <>
      <div className="container my-5">
        <div>
          <h1 className="fs-lg">Featured Casts</h1>
          <a className="float-end d-lg text-decoration-none text-danger text-link" href="#see more">See more<img className="chevron1 chev-text" src={chevronNext} alt="chevron" /></a>
        </div>      
      </div>
      
      <div className="row d-flex m-auto mb-5">
      <Slider {...settings}>
        {Data.map((values)=>{
          return(
            <CastCards 
            imgsrc={values.castimg}
            title={values.name}
        
          />
          )
        })}
      </Slider>
      </div>
    
    
    </>
  );
}
export default Casts;