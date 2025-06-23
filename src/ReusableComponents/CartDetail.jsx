
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useCartStore } from '../Zustand/CartStore';
import Button from '../ReusableComponents/Button';
import Card from '../ReusableComponents/Cards';

const CartDetail = () => {
  const { addToCart } = useCartStore();
  const { state } = useLocation();
  const product = state?.product;

  const handleAddToCart = () => {
    if (product) addToCart(product);
  };

  if (!product) {
    return <div className="text-center py-10 text-gray-600">No product selected.</div>;
  }

  return (
    <div className="w-full mx-auto py-8 min-h-96 md:px-16 lg:px-24">
      <h1 className="text-2xl font-semibold mb-6">Product Detail</h1>
      <div className="bg-white rounded-xl shadow p-5 max-w-md mx-auto">
        <Card image={product?.images[0]} title={product?.title} price={product?.price} />
        <div className="mt-4">
          <Button onClick={handleAddToCart}>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default CartDetail;



