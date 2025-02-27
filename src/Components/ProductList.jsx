import React, { useEffect, useState } from 'react';
import './ProductList.css'; 
import { useDispatch, useSelector } from 'react-redux';
import { addItemsToCart } from './CartSlice';
const ProductList = () => {
  //Hooks
  const  dispatch = useDispatch();
  const [disabledProducts, setDisabledProducts] = useState([]);
  /**
   * 
   * Since the items are disabled once it is added to the cart, the problem is 
   * when it is removed from the cart
   */
  //we have to check the products in the cart every time
  const currentItems = useSelector((state) => state.cart.cartItems);
  //we have to update the disabled items every time an item is added to the cart
  useEffect(()=>{
    const updatedDisabled = currentItems.map((item) => item.id );
    setDisabledProducts(updatedDisabled);
  }, [currentItems]);
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
            {product.name} - ${product.price}<span></span>
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
