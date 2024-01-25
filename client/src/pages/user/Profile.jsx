import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";
import Loader from "../../components/loader/Loader";
import NavbarComp from "../../components/Navbar/Navbar";
// import { Toaster } from 'sonner';
// import { Toaster } from 'react-hot-toast';
import { Link } from "react-router-dom";

export const ProfileComponent = () => {
  const loginUser = useSelector((state) => state.registeredUser.user);
  // console.log("Login", loginUser);

  // Check if loginUser is not available yet
  if (!loginUser) {
    return (
      <>
        <NavbarComp />
        {/* <Toaster /> */}
        <Loader />
      </>
    );
  }

  return (
    <>
      <NavbarComp />
      {/* <Toaster /> */}
      <div className="bg-gray-100">
        <div className="container mx-auto my-5 p-5">
          <div className="md:flex no-wrap md:-mx-2">
            <div className="w-full md:w-3/12 md:mx-2">
              <div className="bg-white p-3 border-t-4 border-green-400">
                <div className="image overflow-hidden">
                  <img
                    className="h-auto w-full mx-auto"
                    src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                    alt=""
                  />
                </div>
                <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                  {loginUser.name}
                </h1>
                <h3 className="text-gray-600 font-lg text-semibold leading-6">
                  Member of MuscleSharks.
                </h3>

                <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                  <li className="flex items-center py-3">
                    <span>Status</span>
                    <span className="ml-auto">
                      <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                        Active
                      </span>
                    </span>
                  </li>
                  <li className="flex items-center py-3">
                    <span>User_Id</span>
                    <span className="ml-auto">{loginUser._id}</span>
                  </li>
                </ul>
              </div>

              <div className="my-4"></div>
            </div>

            <div className="w-full md:w-9/12 mx-2 h-64">
              <div className="bg-white p-2 mb-5 shadow-sm rounded-sm">
                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                  <span className="text-green-500">
                    <svg
                      className="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <span className="tracking-wide">About</span>
                </div>
                <div className="text-gray-700">
                  <div className="grid md:grid-cols-2 text-sm">
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">First Name</div>
                      <div className="px-4 py-2">{loginUser.name}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Gender</div>
                      <div className="px-4 py-2">{loginUser.gender}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Contact No.</div>
                      <div className="px-4 py-2">{loginUser.contact}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Address</div>
                      <div className="px-4 py-2">{loginUser.address}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Email.</div>
                      <div className="px-4 py-2">
                        <a
                          className="text-blue-800"
                          href={`mailto:${loginUser.email}`}
                        >
                          {loginUser.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex">
                  <EditProfile />
                  <div className="bg-amber-500 text-white active:bg-amber-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                    <Link to={"/change-password"}>Change Password</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
