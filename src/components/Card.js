import React from 'react';


const Card = (props) => {
  return (
    <div className="card">
      <img src={props.imageUrl} className="card-img-top" alt="A programming language logo"/>

      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <a className="btn btn-primary" href={props.url} target="_blank" rel="noopener noreferrer" >Go To Project</a>
      </div>
    </div>
  );
}


export default Card;
