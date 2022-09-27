import React, { useEffect, useState } from 'react';
import { getTotalPrice } from '../../utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
  const [cosmetics, setCosmetics] = useState([]);

  useEffect(() => {
    fetch("data.json")
    .then(res => res.json())
    .then(data => setCosmetics(data))
  }, []);

  const total = getTotalPrice(cosmetics);

  return (
    <div>
      <h1>Welcome to my cosmetic store</h1>
      <p>Money Needed: {total}</p>
      {
        cosmetics.map(cosmetic => <Cosmetic 
          key={cosmetic.id}
          cosmetic={cosmetic}
        ></Cosmetic>)
      }
    </div>
  );
}

export default Cosmetics;
