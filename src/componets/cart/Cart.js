import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart,randomOne,resetButton} = props;
    // console.log(cart);
    let total = 0;
    for (const cookie of cart){
        total = total + cookie.price;
    }
    
    
    return (
        <div className='sticky-top'>
            <h5 className='text-center'>Order Summery</h5>
            <p>Seleted Items: {cart.length}</p>
            {cart.map( (item) =>(
                <div key={item.id} className='row p-2'>
                    <div className='d-flex justify-content-between align-items-center'>
                    <div><img className='cart-img' src={item.img} alt=''></img></div>
                    <div>{item.name}</div>
                    <FontAwesomeIcon icon={faXmarkCircle}></FontAwesomeIcon>
                    </div>  
                </div>
            ))}
            <p>Price: ${total}</p>
            <div>
                <button onClick={() =>randomOne(cart)}>Choose One for me</button>
            </div>
            <div>
                <button onClick={() =>resetButton(cart)}>Reset</button>
            </div>
        </div>
    );
};

export default Cart;