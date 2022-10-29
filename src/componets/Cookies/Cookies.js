import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cookie from '../Cookie/Cookie';

const Cookies = () => {
    const [cookies, setCookies] = useState ([]);
    const [cart, setCart] = useState ([]);

    useEffect( () =>{
        fetch ('cookies.json')
        .then(res =>res.json())
        .then(data=>setCookies(data))
    },[])
    const handleAddToCart = (cookie) =>{
        console.log(cookie);
        const newCart = [...cart, cookie];
        setCart(newCart);
    }
    return (
        <div className='container d-flex justify-content-between'>
            <div className='cookies-contaner w-75 row row-cols-1 row-cols-md-3 g-4 p-4'>
                {
                    cookies.map(cookie=><Cookie 
                        key={cookie.id}
                        cookie={cookie}
                        handleAddToCart={handleAddToCart}>
                        </Cookie>)
                }
            </div>
            <div className='cart-container w-25 p-4 border sticky-top'>
                <h5 className='text-center'>Order Summery</h5>
                <p>Seleted Items: {cart.length}</p>
            </div>

        </div>
    );
};

export default Cookies;