import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    // console.log(props);
    // const {name} = props.newName;
    let total = 0;
    // let newName = '';
    for (const cookie of cart){
        total = total + cookie.price;
        // newName = newName +' '+ cookie.name;
    }
    const remove = (item) =>{
        console.log('remove', item);
        // let Cart = {};
        
    }
    return (
        <div className='sticky-top'>
            <h5 className='text-center'>Order Summery</h5>
            <p>Seleted Items: {cart.length}</p>
            {cart.map( (item) =>(
                <div key={item.id} className='row p-2'>
                    <div className='d-flex justify-content-between align-items-center'>
                    <div className=''><img className='cart-img' src={item.img} alt=''></img></div>
                    <div>{item.name}</div>
                    <FontAwesomeIcon onClick={()=>remove(item)} icon={faXmarkCircle}></FontAwesomeIcon>
                    </div>
                    
                    
                </div>
            ))}
            {/* <p>{handleAddToCart.name}</p> */}
            <p>Price: ${total}</p>
        </div>
    );
};

export default Cart;