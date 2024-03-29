import React from "react";
import imobIcon from '../img/imob.png';
import pngItem from '../img/pngitem-1.png';
import Img1 from '../img/poster-image1.png';
import Img2 from '../img/poster-image2.png';
import Img3 from '../img/poster-image3.png';
import Img4 from '../img/poster-image4.png';
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

function ArrivalCards(){
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
  return(
    <>
    <Slider {...settings}>
    <div className="col mb-5 ">
          <div className="card mt-5">
            <img className="card-img-top img-fluid cImg" src={Img1} alt="" />
            <p className="card-title text ps-2 mt-2">USA, 2021</p>
            <h5 className="ps-2">Dune</h5>
            <div className='d-flex px-2 mt-3-lg'>
              <img src={imobIcon} className='img-fluid img-1' alt='imob' /> <span className='mx-2 span'>84/100</span>
              <img src={pngItem} className='img-fluid img-2 ms-4' alt='imob' /> <span className='mx-2 span'>75%</span>
            </div>
            <h6 className="ps-2 my-3">Action, Adventure, Drama</h6>
          </div>
        </div>        
        <div className="col mb-5">
          <div className="card  mt-5">
            <img className="card-img-top img-fluid cImg" src={Img2} alt="" />
            <p className="card-title text ps-2 mt-2">USA, 2021</p>
            <h5 className="ps-2">No Time To Die</h5>
            <div className='d-flex px-2 mt-3-lg'>
              <img src={imobIcon} className='img-fluid img-1' alt='imob' /> <span className='mx-2 span'>76/100</span>
              <img src={pngItem} className='img-fluid img-2 ms-4' alt='imob' /> <span className='mx-2 span'>68%</span>
            </div>
            <h6 className="ps-2 mt-2">Action, Adventure, Thriller</h6>
          </div>
        </div>        
        <div className="col mb-5">
          <div className="card mt-5">
            <img className="card-img-top img-fluid cImg" src={Img3} alt="" />
            <p className="card-title text ps-2 mt-2">USA, 2021</p>
            <h5 className="ps-2">Legend of the Ten Rings</h5>
            <div className='d-flex px-2 mt-3-lg'>
              <img src={imobIcon} className='img-fluid img-1' alt='imob' /> <span className='mx-2 span'>79/100</span>
              <img src={pngItem} className='img-fluid img-2 ms-4' alt='imob' /> <span className='mx-2 span'>71%</span>
            </div>
            <h6 className="ps-2 mt-2">Action, Adventure, Fantasy</h6>
          </div>
        </div>        
        <div className="col mb-5">
          <div className="card mt-5">
            <img className="card-img-top img-fluid cImg" src={Img4} alt="" />
            <p className="card-title text ps-2 mt-2">USA, 2021</p>
            <h5 className="ps-2">Don't Breathe 2</h5>
            <div className='d-flex px-2 mt-3-lg'>
              <img src={imobIcon} className='img-fluid img-1' alt='imob' /> <span className='mx-2 span'>61/100</span>
              <img src={pngItem} className='img-fluid img-2 ms-4' alt='imob' /> <span className='mx-2  span'>46%</span>
            </div>
            <h6 className="ps-2 mt-2">Action, Drama, Horror</h6>
          </div>
          
        </div>
        </Slider>
    
    </>
  );
}




export default ArrivalCards;