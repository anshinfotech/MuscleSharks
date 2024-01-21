import { useState } from "react";
import { useDispatch } from "react-redux";
import { changePassword } from "../../components/redux/action/userAction";
// import { Toaster } from 'react-hot-toast';
import NavbarComp from "../../components/Navbar/Navbar";
import Loader from "../../components/loader/Loader";

const ChangePassword = () => {
  const [userPassword, setUser] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });


  const [isLoading, setIsLoading] = useState(false); // New state for loading

  const dispatch = useDispatch();

  const handlePasswordChange = async () => {
    setIsLoading(true); // Set loading to true when the password change is clicked
    await dispatch(changePassword(userPassword));
    setIsLoading(false); // Set loading to false after the change password action is completed
  };

  return (
    <>
      <NavbarComp />
      {/* <Toaster /> */}

      {isLoading ? (
        <Loader />
      ) : (
        <section className="bg-gray-50 dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a
              href="#"
              className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <img
                className="w-8 h-8 mr-2"
                src="/ms/logo.jpg"
                alt="logo"
              />
              MuscleSharks
            </a>
            <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
              <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Change Password
              </h2>
              <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5">
                <div>
                  <label
                    htmlFor="old-password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Current Password
                  </label>
                  <input
                    type="password"
                    name="oldPassword"
                    id="old-Password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(e) =>
                      setUser({ ...userPassword, oldPassword: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="new-password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    New Password
                  </label>
                  <input
                    type="password"
                    name="newPassword"
                    id="new-password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(e) =>
                      setUser({ ...userPassword, newPassword: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirm-password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-amber-600 focus:border-amber-600 block w-full p-2.5 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white"
                    onChange={(e) =>
                      setUser({
                        ...userPassword,
                        confirmPassword: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <button
                  type="button"
                  className="w-full text-white bg-amber-300 hover:bg-amber-400 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  onClick={handlePasswordChange}
                >
                  Change password
                </button>
              </form>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ChangePassword;
