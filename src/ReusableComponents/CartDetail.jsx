
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useCartStore } from '../Zustand/CartStore';
import Button from '../ReusableComponents/Button';

const CartDetail = () => {
  const { addToCart } = useCartStore();
  const { state } = useLocation();
  const product = state?.product;

  const handleAddToCart = () => {
    if (product) addToCart(product);
  };

  if (!product) {
    return (
      <div className="text-center py-20 text-gray-500 text-lg font-medium">
        No product selected.
      </div>
    );
  }

  return (
    <div className="w-full  bg-white py-12 px-6  lg:px-32">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-12 text-center uppercase tracking-wider">
        Product Detail
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-gray-50 rounded-3xl border border-gray-200 shadow-xl p-10 max-w-6xl mx-auto">
        
        
        <div className="text-gray-800 space-y-6">
          <h2 className="text-3xl font-bold">{product?.title}</h2>
          <p className="text-xl text-yellow-600 font-semibold">
            Price: ${product?.price}
          </p>
          <p className="text-gray-600">
            {product?.description}
          </p>
          <Button
            onClick={handleAddToCart}
         
          >
            Add to Cart
          </Button>
        </div>

    
        <div className="flex justify-center items-center">
          <img
            src={product?.images[0]}
            alt={product?.title}
            className="rounded-2xl shadow-lg w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default CartDetail;
