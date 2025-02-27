import React from 'react';
import './ShoppingCart.css'; 
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart, increaseitemQuantity, decreaseItemQuantity, clearCart } from './CartSlice';
const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalAmount = cartItems((total, item) => total + item.price * item.quantity);

  //dispatch is like calling another method from another class
  const handleRemoveItem = (itemId) =>{
    dispatch(removeItemFromCart(itemId));
  };
  const handleIncreaseQuantity = (itemId) =>{
    dispatch(increaseitemQuantity(itemId));
  };
  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseItemQuantity(itemId));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
   return (
    <>
    <div className="shopping-cart">
      <h2 className="shopping-cart-title">Shopping Cart</h2>
      <ul className="cart-items">
        {cartItems.map(item =>
          <li key={item.id} className='cart-item'>
          <span>{item.name} - ${item.price}</span>
          <div className='quantity-controls'>
            <button className='quantity-control-btn' onClick={() => handleIncreaseQuantity}>+</button>
            <span>{item.quantity}</span>
            <button className='quantity-control-btn' onClick={() => handleDecreaseQuantity}>-</button>
          </div>
          <button className='remove-item-btn' onClick={() => handleRemoveItem}>Remove Item</button>
          </li>
        )}
      </ul>
      <button className="clear-cart-btn" onClick={() => handleClearCart}>Clear Cart</button>
    </div>
        <div>{totalAmount ? <div>The total amount is {totalAmount}</div>: ''}</div>
    </>
  );
};

export default ShoppingCart;
  