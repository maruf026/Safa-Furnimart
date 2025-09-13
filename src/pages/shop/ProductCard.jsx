import React, { useContext } from 'react'
import { FiPlus } from "react-icons/fi";
// import productImg from "../../assets/products/lamp-1.png"
import Rating from '../../components/Rating'
import { CartContext } from '../../context/CartContext';
import { getImgUrl } from '../../utils/getImgUrl';

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);
   return (
  <div
    key={product.id}
    className="max-w-sm rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow"
  >
    {/* Image */}
    <div className="bg-gray-50">
      <img
        src={getImgUrl(product.imageUrl)}
        alt={product.name}
        className="w-46 h-46 object-cover mx-auto"
      />
    </div>

    {/* Content */}
    <div className="p-5">
      <h4 className="text-sm text-gray-500 mb-1">{product.category}</h4>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>

      <Rating rating={product.rating} />

      <div className="mt-5 flex justify-between items-center">
        <p className="text-gray-900 font-bold text-lg">
          <sup className="text-md">৳</sup>{product.price}
        </p>
        <button
          className="bg-secondary text-white px-4 py-2 rounded-lg font-medium hover:bg-secondary/90 transition-colors"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
);

}

export default ProductCard
