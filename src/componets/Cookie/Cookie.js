
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
                    <h4>Price: ${price}</h4>
                    </div>
                    <button onClick={() =>handleAddToCart(cookie)} className='btn btn-light btn-sm w-100'>
                        <p className='btn-text fw-semibold text-center justify-content-center'>Add to Cart</p>
                    </button>
                </div>
            </div>
        </div>
        );
    };

export default Cookie;