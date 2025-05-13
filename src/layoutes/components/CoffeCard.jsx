import React from 'react';

const CoffeCard = ({coffee}) => {
  const {name,photo,category,supplier}= coffee
  return (
    <div className="card card-side bg-base-100 shadow-sm">
  <figure>
    <img
      src={photo}
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{category}</p>
    <p>{supplier}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
  );
};

export default CoffeCard;