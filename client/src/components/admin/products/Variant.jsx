import { useState } from "react";
import PropTypes from 'prop-types'

export default function Variant({ variants, setVariants }) {
    const [showModal, setShowModal] = useState(false);
    const [variantData, setVariantData] = useState({
      price: "",
      unit: "",
      quantity: "",
      discount: "",
      stock: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setVariantData({
        ...variantData,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newVariant = { ...variantData };
      setVariants([...variants, newVariant]);
      setVariantData({
        price: "",
        unit: "",
        quantity: "",
        discount: "",
        stock: "",
      });
    };
  
    const handleAddAnotherVariant = () => {
      setVariants([...variants, variantData]);
      setVariantData({
        price: "",
        unit: "",
        quantity: "",
        discount: "",
        stock: "",
      });
    };
  return (
    <>
      <button
        className="bg-slate-900 px-4 py-2 rounded text-white"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add Variant
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[80%] my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Create Variant
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="price" className="block text-blueGray-600 text-sm font-bold mb-2">
                        Price
                      </label>
                      <input
                        type="number"
                        id="price"
                        name="price"
                        value={variantData.price}
                        onChange={handleChange}
                        className="bg-white focus:outline-none focus:shadow-outline border border-blueGray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="unit" className="block text-blueGray-600 text-sm font-bold mb-2">
                        Unit
                      </label>
                      <select
                        id="unit"
                        name="unit"
                        value={variantData.unit}
                        onChange={handleChange}
                        className="bg-white focus:outline-none focus:shadow-outline border border-blueGray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                        required
                      >
                        <option value="">Select Unit</option>
                        <option value="Kg">KG</option>
                        <option value="lbs">LBS</option>
                        <option value="ml">MiliLiter</option>
                        <option value="N">N</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="quantity" className="block text-blueGray-600 text-sm font-bold mb-2">
                        Quantity
                      </label>
                      <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        value={variantData.quantity}
                        onChange={handleChange}
                        className="bg-white focus:outline-none focus:shadow-outline border border-blueGray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="discount" className="block text-blueGray-600 text-sm font-bold mb-2">
                        Discount
                      </label>
                      <input
                        type="number"
                        id="discount"
                        name="discount"
                        value={variantData.discount}
                        onChange={handleChange}
                        className="bg-white focus:outline-none focus:shadow-outline border border-blueGray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="stock" className="block text-blueGray-600 text-sm font-bold mb-2">
                        Stock
                      </label>
                      <input
                        type="number"
                        id="stock"
                        name="stock"
                        value={variantData.stock}
                        onChange={handleChange}
                        className="bg-white focus:outline-none focus:shadow-outline border border-blueGray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg"
                    >
                      Add Variant
                    </button>
                    <button
                      type="button"
                      onClick={handleAddAnotherVariant}
                      className="bg-indigo-500 text-white active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg ml-2"
                    >
                      Add Another Variant
                    </button>
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}


Variant.propTypes = {
    variants: PropTypes.string.isRequired, // Assuming id is a string, adjust it if necessary
    setVariants: PropTypes.func.isRequired
  }