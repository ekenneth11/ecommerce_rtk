import React, { useState } from 'react';
import './ProductList.css'; 
import { useDispatch } from 'react-redux';
import { addItemsToCart } from './CartSlice';
const ProductList = () => {
  //Hooks
  const  dispatch = useDispatch();
  const [disabledProducts, setDisabledProducts] = useState([]);
  
  //event when the user clicks the add to cart
  const handleAddToCart = (product) => {
    dispatch(addItemsToCart(product)); //dispatch the event to the cartslice
    setDisabledProducts([...disabledProducts, product.id]); //add the product into the list of disabledproducts
  }
  const products = [
    { id: 1, name: 'Product A', price: 60 },
    { id: 2, name: 'Product B', price: 75 },
    { id: 3, name: 'Product C', price: 30 },
  ];

  return (
    <div className="product-list">
      <h2 className="product-list-title">Products</h2>
      <ul className="product-list-items">
        {products.map(product => (
          <li key={product.id} className='product-list-items'>
            <span>{product.name} - ${product.price}</span>
            <button 
              className={`add-to-cart-btn ${disabledProducts.includes(product.id) ? 'disabled': ''}`}
              onClick={() => handleAddToCart(product)}
              disabled={disabledProducts.includes(product.id)}> 
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
