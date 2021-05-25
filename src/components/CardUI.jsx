import React from 'react';
 

const Card = props=>{

    return (
 
         
          
          
    
        <div className="card text-center ">
          <div className="overflow">
            <img src={props.imgsrc} alt="Image1" className="card-img-top" />
          </div>

          <div className="card-body text-dark">
            <h4 className="card-title">{props.title}</h4>
            <p className="card-text text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
            
            </p>

            <a href="#" className="btn btn-outline-success">
              {" "}
              Go AnyWhere
            </a>
          </div>
        </div>
      
    );
}

export default Card;