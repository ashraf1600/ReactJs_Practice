import React from 'react';

function SingleCart({ singleCart }) {
  const { productName, price, category } = singleCart;

  return (
    <div className="bg-gray-100 rounded-lg p-4 mb-4 shadow-sm">
      <h1 className="text-lg font-semibold text-gray-800">{productName}</h1>
      <h3 className="text-green-600 font-medium">${price}</h3>
      <h4 className="text-sm text-gray-600">📂 {category}</h4>
      <hr className="mt-3 border-gray-300" />
    </div>
  );
}

export default SingleCart;
