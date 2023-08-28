import React from 'react';

const Product = ({ price, name }) => {
  return (
    <div className="product">
      <h2>{name}</h2>
      <p>Price: R{price}</p>
    </div>
  );
};

export default Product;
