import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import NavbarComp from '../Navbar/Navbar';

const PaymentSuccess = () => {
  const searchQuery = useSearchParams()[0];
  const referenceNum = searchQuery.get('reference');

  return (
    <>
      <NavbarComp />
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-8">Payment Successful</h1>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-semibold mb-4">Reference No. {referenceNum}</h3>
          <Link
            to="/user-orders"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300"
          >
            Your Orders
          </Link>
        </div>
      </div>
    </>
  );
};

export default PaymentSuccess;
