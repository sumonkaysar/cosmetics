import React from 'react';
import { addToDB, removeFromDB } from '../../utilities/fakeDB';
import './Cosmetic.css'

const Cosmetic = ({cosmetic}) => {
  const {name, price, id}= cosmetic;

  const addToCart = (id) => {
    addToDB(id);
  }
  const removeFromCart = (id) => {
    removeFromDB(id);
  }

  return (
    <div className='product'>
      <h2>Buy This: {name}</h2>
      <p>Only for: ${price}</p>
      <p><small>It has id: {id}</small></p>
      <button className='cart-btn' onClick={() => addToCart(id)}>Add to Cart</button>
      <button className='cart-btn' onClick={() => removeFromCart(id)}>Remove From cart</button>
    </div>
  );
}

export default Cosmetic;
