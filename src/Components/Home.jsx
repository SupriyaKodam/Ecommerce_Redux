import React, { useState } from 'react';
import CardData from './CardData'; // Assuming CardData is an array of objects.
import { addToCart } from '../features/cartSlice';
import { useDispatch } from 'react-redux';

const Home = () => {
  const [cartData, setCartData] = useState(CardData);
  const dispatch = useDispatch();

  // Add to cart
  const send = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="flex flex-col">
      <div className="container mx-auto my-4 mt-32">
        <h1 className="font-bold text-3xl text-center">Restaurants in Hyderabad Open Now</h1>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-100 p-5">
        {cartData.map((item, index) => {
          return (
            <div key={index} className="bg-white shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 p-5 flex flex-col">
              <img src={item.imgdata} alt={item.name} className="w-full h-48 object-cover rounded-md mb-4" />
              <div className="flex flex-col space-y-2">
                <div className="flex flex-row items-center justify-between">
                  <h1 className="font-bold text-lg">{item.dish}</h1>
                  <span className="bg-green-500 text-white text-sm px-2 py-1 rounded">{item.rating}★</span>
                </div>
                <div>
                  <h2 className="text-sm text-gray-600">{item.address}</h2>
                  <span>{item.price}</span>
                </div>
                <div className="flex flex-row items-center justify-around">
                  <img src={item.arrimg} className="w-10" />
                  <button
                    onClick={() => send(item)}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Add To Cart
                  </button>
                  <img src={item.delimg} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
