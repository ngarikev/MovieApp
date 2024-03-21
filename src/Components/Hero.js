import React from 'react';
import Img from '../img/poster.png';
import tvIcon from '../img/tv-1.png';
import '../Css/hero.css';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import imobIcon from '../img/imob.png';
import pngItem from '../img/pngitem-1.png';
import playIcon from '../img/play.svg';


function Hero() {
  return(
    <div className='hero'>
      <div className='container position-absolute d-flex m-4'>
        <div className='d-flex'>
          <img src={tvIcon} className='img-fluid tv' alt='icon'/>
          <h1 className='text-white  ms-3 text'>MovieBox</h1>
        </div>
        <div className='input-group'>
          <input className='form-control border-end-0 border rounded-pilln search' type='text'placeholder='What do you want to watch?'></input>
          <span className='input-group-append h-fit-content'>
            <button class='btn btn-secondary  border-start-0 border rounded m-n5 s-icon' type="button">
                        <SearchIcon className='pb-2' />
            </button>
          </span>
        </div>
        <div className='text-white ms-5-lg me-5 float-end'> <button className='btn btn-danger ' type='button'>
          <PersonIcon className='pb-2'/>
        </button>
        </div>
        
      </div>
      <div className='container ms-4 position-absolute text-white  content'>
        <h1 className='header-title'>John Wick 3 : </h1> <h1 className='header-title'>Parabellum</h1>
        <div className='d-flex mt-3-lg'>
          <img src={imobIcon} className='img-fluid img-1' alt='imob' /> <span className='mx-2 mt-1 span'>86.0 / 100</span>
          <img src={pngItem} className='img-fluid img-2 ms-5' alt='imob' /> <span className='mx-2 mt-1 span'>98%</span>
        </div>
        <p className='col-9 col-md-4 mt-2 para'>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
        <img src={playIcon} className='img-fluid img-2 mb-2' alt='playicon' />
        <h6 className=''>WATCH TRAILER</h6>
      </div>
      <img src={Img} className='img-fluid bgImg' alt='hero background'/>
      
    </div>
  );
}


export default Hero;