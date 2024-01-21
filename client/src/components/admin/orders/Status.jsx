import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeOrderStatus } from '../../redux/action/adminAction';
import PropTypes from 'prop-types'

const Status = ({status,id}) => {
  const [selectedStatus, setSelectedStatus] = useState(status);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dispatch=useDispatch();
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleStatusSelect = (status) => {
    setSelectedStatus(status);
    setIsDropdownOpen(false);

    dispatch(changeOrderStatus(selectedStatus,id))
  };

  console.log("Status",selectedStatus);

  return (
    <div className="relative">
      <button
        id="dropdownDividerButton"
        data-dropdown-toggle="dropdownDivider"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={toggleDropdown}
      >
        {status}
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div
          id="dropdownDivider"
          className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
        >
          {/* <button
            onClick={() => handleStatusSelect("Pending")}
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Pending
          </button> */}

          <button
            onClick={() => handleStatusSelect("Shipped")}
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Shipped
          </button>

          <button
            onClick={() => handleStatusSelect("Delivered")}
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Delivered
          </button>

          <button
            onClick={() => handleStatusSelect("Cancelled")}
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Cancelled
          </button>
          
        </div>
      )}
    </div>
  );
};


Status.propTypes = {
    id: PropTypes.string.isRequired, // Assuming id is a string, adjust it if necessary
    status: PropTypes.string.isRequired
  }

export default Status;
