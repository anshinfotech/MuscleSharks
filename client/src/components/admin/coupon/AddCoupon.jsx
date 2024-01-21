import { useState } from "react";
import PropTypes from 'prop-types';

export default function AddCoupon({ handleAddCoupon }) {
  const [showModal, setShowModal] = useState(false);
  const [coupon, setCoupon] = useState({
    code: "",
    discountAmount: 0,
    expiryDate: "",
    active: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCoupon({
      ...coupon,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleAddCoupon(coupon);
    setCoupon({
      code: "",
      discountAmount: 0,
      expiryDate: "",
      active: true,
    });
    setShowModal(false);
  };

  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add Coupon
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Add Coupon</h3>
                  <button
                    className="p-1 ml-auto bg-white border-0 text-red-500 float-right text-4xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-red-500 h-6 w-6 text-4xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form onSubmit={handleFormSubmit}>
                    <div className="mb-4">
                      <label htmlFor="code" className="block text-blueGray-600 text-sm font-bold mb-2">
                        Coupon Code
                      </label>
                      <input
                        type="text"
                        id="code"
                        name="code"
                        value={coupon.code}
                        onChange={handleChange}
                        className="bg-white focus:outline-none focus:shadow-outline border border-blueGray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="discountAmount" className="block text-blueGray-600 text-sm font-bold mb-2">
                        Discount Amount
                      </label>
                      <input
                        type="number"
                        id="discountAmount"
                        name="discountAmount"
                        value={coupon.discountAmount}
                        onChange={handleChange}
                        className="bg-white focus:outline-none focus:shadow-outline border border-blueGray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="expiryDate" className="block text-blueGray-600 text-sm font-bold mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="date"
                        id="expiryDate"
                        name="expiryDate"
                        value={coupon.expiryDate}
                        onChange={handleChange}
                        className="bg-white focus:outline-none focus:shadow-outline border border-blueGray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg"
                    >
                      Add Coupon
                    </button>
                  </form>
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

AddCoupon.propTypes = {
    handleAddCoupon: PropTypes.func.isRequired
  };
