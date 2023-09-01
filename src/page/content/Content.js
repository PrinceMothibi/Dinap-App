import React from 'react';
import Product from './Product'; 

const Content = () => {
  const products = [
    {
      name: 'Car',
      price: 19.99,
      image: 'product-a.jpg',
    },
    {
      name: 'Star',
      price: 29.99,
      image: 'product-b.jpg',
    },
  ];

  return (
    <React.Fragment className="app">
      <section className="product-list">
      <h1>Product List</h1>
        {products.map((product, index) => (
          <Product
            key={index} 
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </section>
    </React.Fragment>
  );
};

export default Content;
