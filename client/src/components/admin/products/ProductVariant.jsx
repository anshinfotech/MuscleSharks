import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const ViewVariant = ({ variants, closeModal, productId }) => {
  const [newPrice, setNewPrice] = useState('');
  const [newDiscount, setNewDicount] = useState('');

  const handlePriceUpdate = async (variantId) => {
    try {
      // Make a PUT request to your backend API to update the price
      const response = await axios.put(`/api/updatePrice/${productId}`, {
        variantId,
        newPrice: newPrice
      });

      // Handle success response
      console.log('Price updated successfully:', response.data);
    } catch (error) {
      // Handle error
      console.error('Error updating price:', error);
    }
  };

  const handleDiscountUpdate = async (variantId) => {
    try {
      // Make a PUT request to your backend API to update the price
      const response = await axios.put(`/api/updateDiscount/${productId}`, {
        variantId,
        newDiscount:newDiscount
      });

      // Handle success response
      console.log('Price updated successfully:', response.data);
    } catch (error) {
      // Handle error
      console.error('Error updating price:', error);
    }
  };

  return (
    <div className="relative p-6 flex-auto">
      <button onClick={closeModal} className="text-red-500">
        Close
      </button>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Unit
            </th>
            <th scope="col" className="px-6 py-3">
              Quantity
            </th>
            <th scope="col" className="px-6 py-3">
              Discount
            </th>
            <th scope="col" className="px-6 py-3">
              Stock
            </th>
          </tr>
        </thead>
        <tbody>
          {variants.length >= 1 &&
            variants.map((variant, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-6 py-4">{variant.price}</td>
                <td className="px-6 py-4">{variant.unit}</td>
                <td className="px-6 py-4">{variant.quantity}</td>
                <td className="px-6 py-4">{variant.discount}</td>
                <td className="px-6 py-4">{variant.stock}</td>
                <td className="px-6 py-4">
                  {/* Input field for updating price */}
                  <input
                    type="text"
                    placeholder="New Price"
                    value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)}
                  />
                  {/* Button to trigger price update */}
                  <button onClick={() => handlePriceUpdate(variant._id)} className="text-red-500">
                    Update Price
                  </button>
                </td>
                <td className="px-6 py-4">
                  {/* Input field for updating price */}
                  <input
                    type="text"
                    placeholder="New Price"
                    value={newDiscount}
                    onChange={(e) => setNewDicount(e.target.value)}
                  />
                  {/* Button to trigger price update */}
                  <button onClick={() => handleDiscountUpdate(variant._id)} className="text-red-500">
                    Update Discount
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

ViewVariant.propTypes = {
  variants: PropTypes.array.isRequired,
  closeModal: PropTypes.func.isRequired,
  productId: PropTypes.string.isRequired
};

export default ViewVariant;
