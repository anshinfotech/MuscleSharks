import PropTypes from 'prop-types';

export default function ViewVariant({ variants, closeModal }) {
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
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}



ViewVariant.propTypes = {
    variants: PropTypes.string.isRequired, // Assuming id is a string, adjust it if necessary
    closeModal: PropTypes.string.isRequired
  }