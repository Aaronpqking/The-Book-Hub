import React from 'react';


function BookCard(props) {
  return (
    <div className="BookCard">
      <img src={props.imageUrl} alt={props.title} />
      <h3>{props.title}</h3>
      <p>by {props.author}</p>
      <p>${props.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default BookCard;
