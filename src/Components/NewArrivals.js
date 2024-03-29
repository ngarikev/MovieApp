import React from "react";
import '../Css/arrival.css';
import chevronNext from '../img/chevron-next.svg';
import ArrivalCards from "./ArrivalCards";



function Arrival () {
  return(
    <>
      <div className="container">
        <div>
          <h1 className="mt-5 fs-lg">New Arrival</h1>
          <a className="float-end  d-lg text-decoration-none text-danger text-link" href="#see more">See more<img className="chevron1 chev-text" src={chevronNext} alt="chevron" /></a>
        </div>      
      </div>
      {/******card sectiom*****/}
      <div className="row d-fex m-auto">
      
        <ArrivalCards />
      
      </div>
    </>
  );
}

export default Arrival;