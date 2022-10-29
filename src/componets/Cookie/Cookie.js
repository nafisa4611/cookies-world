import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';


const Cookie = (props) => {
    const {cookie, handleAddToCart} = props;
    const {name, img, id, price} =props.cookie;
    return (
        <div className=''>
            <div className='col'>
                <div className='card'>
                    <img src={img} alt="" height='350px'></img>
                    <div className='card-body'>
                    <h5>{name}</h5>
                    <p>ID:{id}</p>
                    <h6>Price: ${price}</h6>
                    </div>
                    <button onClick={() =>handleAddToCart(cookie)} className='btn btn-light btn-sm w-100 d-flex justify-content-center align-items-center'>
                        <p className='btn-text  pt-2 px-1'>Add to Cart</p>
                        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
        );
    };

export default Cookie;