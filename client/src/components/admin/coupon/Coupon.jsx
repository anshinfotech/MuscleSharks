import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCoupon,
  deleteCoupon,
  getAllCoupons,
} from "../../redux/action/adminAction";
// import { Toaster } from "sonner";
// import { Toaster } from 'react-hot-toast';
import AddCoupon from "./AddCoupon";
import Nav from "../AdminNav";
import { formatDistance, parseISO } from "date-fns";

const Coupon = () => {
  const coupons = useSelector((state) => state.adminDetails.allCoupons);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddCoupon = (coupon) => {
    dispatch(addCoupon(coupon));
  };

  useEffect(() => {
    dispatch(getAllCoupons());
  }, [dispatch]);

  // Filter coupons based on search term
  const filteredCoupons = coupons.filter((coupon) =>
    coupon.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Nav />
      <div className="mt-10 mb-32">
        {/* <Toaster /> */}
        <div className="flex justify-center">
          <AddCoupon handleAddCoupon={handleAddCoupon} />
          <div className="w-[60%]">
            <form>
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full outline-none p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-slate-500 focus:border-slate-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-gray-500"
                  placeholder="Search for Coupons ..."
                  required
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-slate-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-slate-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-14">
          {coupons && (
            <div className="text-lg">
              {" "}
              Total Coupons: <span className=" font-bold">{coupons.length}</span>{" "}
            </div>
          )}
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  Coupon Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Coupon Code
                </th>
                <th scope="col" className="px-6 py-3">
                  Discount Amount
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Expiry Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Time Remaining
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredCoupons.length >= 1 ? (
                filteredCoupons.map((coupon) => {
                  const remainingTime =
                    coupon.expiryDate &&
                    formatDistance(parseISO(coupon.expiryDate), new Date(), {
                      addSuffix: true,
                    });

                  return (
                    <tr
                      key={coupon._id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover-bg-gray-600"
                    >
                      <td className="w-4 p-4">{coupon._id}</td>
                      <th
                        scope="row"
                        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {coupon.code}
                      </th>
                      <td className="px-6 py-4">{coupon.discountAmount}</td>
                      <td className="px-6 py-4">
                        <div
                          className={`flex items-center ${
                            coupon.active ? "text-green-500" : "text-red-500"
                          } h-2.5 w-2.5 rounded-full bg-white mr-2`}
                        >
                          {coupon.active ? <span>True</span> : <span>False</span>}
                        </div>{" "}
                        {/* {coupon.active} */}
                      </td>
                      <td className="px-6 py-4">{coupon.expiryDate}</td>
                      <td className="px-6 py-4">
                        {remainingTime ? remainingTime : "Expired"}
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => dispatch(deleteCoupon(coupon._id))}
                          className="font-medium text-red-600 dark:text-red-500 hover:underline"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>No Coupons....</tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Coupon;
