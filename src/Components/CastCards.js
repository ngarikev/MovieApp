import React from "react";


function CastCards(props){

  return(
    <>
    
        <div className="col">
          <div className="card">
            <img src={props.imgsrc} alt="cast" /> 
            <h5 className="pt-3">{props.title}</h5>
          </div>
        </div>        

    </>
  );
}


export default CastCards;