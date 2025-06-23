
import React from 'react';
import { useCartStore } from '../Zustand/CartStore';
import Button from '../ReusableComponents/Button';

const CartDetail = () => {
  const {
    cart,
    addToCart, 
  } = useCartStore();

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <div className='w-full mx-auto py-8 min-h-96 md:px-16 lg:px-24'>
      <h1 className="text-2xl font-semibold mb-4">Selected Product Details</h1>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow p-4 rounded-xl flex justify-between items-center"
          >
            <div className="flex items-center gap-4">
              <img
                src={item?.images[0]}
                alt={item.title}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h2 className="font-medium">Title: {item?.title}</h2>
                <p className="text-sm text-gray-600">Price: ${item?.price}</p>
              </div>
            </div>
            <div className="mt-3">
              <Button onClick={() => handleAddToCart(item)}>Add to Cart</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartDetail;

// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import { useCartStore } from '../Zustand/CartStore';
// import Button from '../ReusableComponents/Button';

// const CartDetail = () => {
//   const { state } = useLocation();
//   const { addToCart } = useCartStore();

//   if (!state) return <div className="text-center py-10 text-xl">No product selected.</div>;

//   const handleAddToCart = () => {
//     addToCart(state);
//   };

//   return (
//     <div className='w-full mx-auto py-8 min-h-96 md:px-16 lg:px-24'>
//       <h1 className="text-2xl font-semibold mb-4">Product Details</h1>

//       <div className="bg-white shadow p-4 rounded-xl flex flex-col md:flex-row gap-6">
//         <img
//           src={state?.images[0]}
//           alt={state?.title}
//           className="w-60 h-60 object-cover rounded"
//         />
//         <div className="flex flex-col justify-between">
//           <div>
//             <h2 className="text-xl font-bold mb-2">{state?.title}</h2>
//             <p className="text-gray-700 mb-2">Price: ${state?.price}</p>
//           </div>
//           <Button onClick={handleAddToCart}>Add to Cart</Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartDetail;
