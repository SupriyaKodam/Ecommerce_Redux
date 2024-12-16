import React, { useState, useEffect } from 'react';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Headers = () => {
  const carts = useSelector((state) => state.allCart.carts); // Get the carts from Redux
  const [cartCount, setCartCount] = useState(carts.length);

  // Update cart count whenever the cart changes
  useEffect(() => {
    setCartCount(carts.length);
  }, [carts]);

  return (
    <div className='fixed top-0 left-0 right-0 w-full flex flex-row items-center justify-between p-6 bg-black shadow-xl'>
       <NavLink to="/">
      <h2 className='text-3xl font-bold text-white'>E-commerce</h2>
      </NavLink> 
      <div className="relative">
        {/* NavLink for navigation */}
        <NavLink to="/cart" className="relative">
        <ShoppingCartIcon style={{ fontSize: 40 }} className='text-white' />
        <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-xs font-bold rounded-full px-2">
          {cartCount}
        </span>
        </NavLink>
      </div>
    </div>
  );
};

export default Headers;
