

import React, { useEffect, useState } from 'react';
import Card from '../ReusableComponents/Cards';
import { GetCategories, getProducts } from '../Zustand/Api';

const Mainscreen = () => {
  const { allCategories, isLoading, error, fetchCategorieData } = GetCategories();
  const { Products, fetchProductData } = getProducts();

  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetchCategorieData();
    fetchProductData();
  }, []);

  const filteredProducts = selectedCategory
    ? Products.filter((item) => item.category.name === selectedCategory)
    : Products;

    console.log(filteredProducts,"filteredProducts")
  return (
    <div className="w-full px-4 py-6">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-600">Error: {error}</p>
      ) : (
        <div className="space-y-6">
          <div className="grid grid-cols-5 gap-1 items-start">
            {/* Category List */}
            <div className="col-span-1">
              {Array.isArray(allCategories) && allCategories.length > 0 ? (
                allCategories.map((category, index) => (
                  <div key={index} className="flex flex-col gap-y-2">
                    <h2
                      onClick={() => setSelectedCategory(category.name)}
                      className={`font-medium cursor-pointer px-4 py-2 rounded-2xl ${selectedCategory === category.name ? 'bg-blue-500 text-white' : ''
                        }`}
                    >
                      {category.name}
                    </h2>

                  </div>
                ))
              ) : (
                <p>No categories found.</p>
              )}
            </div>

            {/* Product List */}
            <div className="col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {Array.isArray(filteredProducts) && filteredProducts.length > 0 ? (
                filteredProducts.map((item) => (
                  <div
                    key={item?.id}
                    className="bg-white p-2 rounded shadow hover:bg-gray-300 "
                  >
                    <Card
                      image={item?.images[0]}
                      title={item?.title}
                      price={item?.price}
                    />
                  </div>
                ))
              ) : (
                <p className="col-span-full">No products found for this category.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mainscreen;
