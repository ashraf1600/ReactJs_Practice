import React from 'react';

function Product({ product , addToCartData }) {
  // প্রোডাক্ট অবজেক্ট থেকে প্রয়োজনীয় তথ্যগুলো আলাদা করে নেওয়া হয়েছে
  const {
    // cartId,
    // userId,
    // productId,
    productName,
    category,
    quantity,
    price,
    dateAdded,
    imageUrl // যদি ফেক ডেটা ফাইলে ইমেজ থাকে 
  } = product;


  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* প্রোডাক্ট ইমেজ */}
      <img
        className="w-full h-52 object-cover"
        src={imageUrl || 'https://via.placeholder.com/300x200'}
        alt={productName}
      />

      {/* প্রোডাক্ট ডিটেইলস */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{productName}</h2>
        <p className="text-sm text-gray-500 mb-1">📂 ক্যাটাগরি: {category}</p>
        <p className="text-sm text-gray-500 mb-1">🗓️ যোগ হয়েছে: {dateAdded}</p>
        <p className="text-sm text-gray-500 mb-1">📦 স্টকে আছে: {quantity}</p>

        {/* প্রাইস */}
        <div className="mt-2 mb-4">
          <span className="text-lg font-bold text-green-600">${price}</span>
        </div>

        {/* Add to Cart বাটন */}
        <button onClick={ ()=> addToCartData(product)}
          className="w-full py-2 bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold rounded-lg hover:from-green-500 hover:to-green-700 transition-colors"
        >
          🛒 Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
