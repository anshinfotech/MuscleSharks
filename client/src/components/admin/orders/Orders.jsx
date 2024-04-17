import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrder, getAllOrders } from "../../redux/action/adminAction";
import Status from "./Status";
// import { Toaster } from "sonner";
// import { Toaster } from 'react-hot-toast';
import Nav from "../AdminNav";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

const Orders = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(14);
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.adminDetails.orders);
  console.log(orders)
  

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  useEffect(() => {
    const filteredOrders = orders.length>0 ? orders.filter(
      (order) =>
        order._id.includes(searchTerm) &&
        (selectedStatus === "" || order.status === selectedStatus)
    ):[];
    setFilteredOrders(filteredOrders);
  }, [searchTerm, selectedStatus, orders]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  const handleFilterStatus = (e) => {
    const status = e.target.value;
    setSelectedStatus(status);

    if (status === "") {
      setFilteredOrders(orders);
    } else {
      const filteredOrders = orders.length>0 ? orders.filter((order) => order.status === status):[];
      setFilteredOrders(filteredOrders);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredOrders ? filteredOrders.slice(indexOfFirstItem, indexOfLastItem) : [];

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
    <Nav />
    <div className="mb-20">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-center text-gray-900">
            Orders
          </h1>
        </div>
      </header>

      <div>
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
              placeholder="Search for Supplements ..."
              required
              value={searchTerm}
              onChange={handleSearch}
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

      <div>
        <label
          htmlFor="status"
          className="block text-sm font-medium text-gray-700 dark:text-gray-400"
        >
          Filter by Status:
        </label>
        <select
          id="status"
          name="status"
          className="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 focus:ring-slate-500 focus:border-slate-500 sm:text-sm rounded-md"
          value={selectedStatus}
          onChange={handleFilterStatus}
        >
          <option value="">All</option>
          <option value="Shipped">Shipped</option>
          <option value="Delivered">Delivered</option>
          <option value="Cancelled">Cancelled</option>
          <option value="Pending">Pending</option>
        </select>
      </div>


      <div className="relative ml-10 mr-10 mt-12 overflow-x-auto shadow-md sm:rounded-lg">
      <div className="text-lg">Total Orders : <span className="text-green-800 font-bold">{orders.length}</span></div>
        {currentItems && currentItems.length > 0 ? (
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  order id
                </th>
                <th scope="col" className="px-6 py-3">
                  CreateAt
                </th>
                <th scope="col" className="px-6 py-3">
                  Address
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Payment Method
                </th>
                <th scope="col" className="px-6 py-3">
                  User ID
                </th>
                {/* <th scope="col" className="px-6 py-3">
                  User Name
                </th> */}
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((order) => (
                <tr
                  key={order.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {order._id}
                  </td>
                  <td className="px-6 py-4">{order.createdAt}</td>
                  <td className="px-6 py-4">{order.shippingAddress}</td>
                  <td className="px-6 py-4">
                    <Status status={order.status} id={order} />
                  </td>
                  <td className="px-6 py-4">{order.totalprice}</td>
                  <td className="px-6 py-4">{order.orderType}</td>
                  <td className="px-6 py-4">{order.user}</td>
                  {/* <td className="px-6 py-4">{order.userName}</td> */}
                  <td className="flex items-center px-6 py-4 space-x-3">
                    <button
                      className="font-medium text-red-600 dark:text-red-500 hover:underline"
                      onClick={() => dispatch(deleteOrder(order._id))}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h1 className="text-center font-bold">No Products Added Yet</h1>
        )}
      </div>
      <div className="flex justify-center mt-4">
        <ul className="flex space-x-2">
          {Array.from(
            { length: Math.ceil(filteredOrders.length / itemsPerPage) },
            (_, index) => (
              <li key={index}>
                <button
                  onClick={() => paginate(index + 1)}
                  className={`px-4 py-2 rounded ${
                    currentPage === index + 1
                      ? "bg-gray-900 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {index + 1}
                </button>
              </li>
            )
          )}
        </ul>
      </div>
      {/* <Toaster /> */}
    </div>
    </>
  );
};

export default Orders;





