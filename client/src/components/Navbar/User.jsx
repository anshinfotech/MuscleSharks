import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/action/userAction";
// import { Toaster } from "sonner";
// import { Toaster } from 'react-hot-toast';

function User() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const loginUser = useSelector((state) => state.registeredUser.user);
  console.log(loginUser);

  const navigate = useNavigate();
  return (
    <>
      <div className=" bg-blue-400 flex justify-center items-center dark:bg-gray-500">
        <div className="bg-[#f2cb1f] dark:bg-gray-800 flex justify-center items-center">
          <div
            onClick={() => setOpen(!open)}
            className={`relative border-b-4 border-transparent  ${
              open ? "border-amber-500 transform transition duration-300" : ""
            }`}
          >
            <div className="flex justify-center items-center space-x-3 cursor-pointer">
              <div className="w-12 h-12 mt-2 rounded-full overflow-hidden dark:border-white border-gray-900">
                <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                  <svg
                    className="absolute w-12 h-12 text-gray-400 -left-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
              {/* <div className="font-semibold dark:text-white text-gray-900 text-lg">
                <div className="cursor-pointer">Hii {loginUser.name}</div>
              </div> */}
            </div>
            {open && (
              <div className="absolute w-60 px-5 py-3 dark:bg-gray-800 bg-white rounded-lg shadow border dark:border-transparent mt-5">
                <ul className="space-y-3 dark:text-white">
                  <li className="font-medium">
                    <Link
                      to="/account"
                      className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-amber-500"
                    >
                      <div className="mr-3">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      Account
                    </Link>
                  </li>
                  <li className="font-medium">
                    <Link
                      to={"/user-orders"}
                      className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-amber-500"
                    >
                      <div className="mr-3">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      Orders
                    </Link>
                  </li>
                  <hr className="dark:border-gray-700" />
                  <li className="font-medium">
                    <button
                      onClick={() => dispatch(logout(navigate))}
                      className="flex items-center transform transition-colors duration-200 border-r-4 w-[100%] border-transparent hover:border-red-600"
                    >
                      <div className="mr-3 text-red-600">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                          />
                        </svg>
                      </div>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <Toaster /> */}
    </>
  );
}

export default User;
