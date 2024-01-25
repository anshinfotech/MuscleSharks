import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogInAction } from "../../components/redux/action/userAction";
import NavbarComp from "../../components/Navbar/Navbar";
// import {Toaster} from 'sonner';
// import {Toaster} from 'react-hot-toast';
import Loader from "../../components/loader/Loader";

const Signin = () => {
  const [isLoading, setIsLoading] = useState(false); // New state for loading
  const isLoader=useSelector((state)=>state.registeredUser.isLoading)
  console.log("load",isLoader);
  const [user,setUser]=useState({
   email:"",password:""
});

  const dispatch=useDispatch();
  const active=useSelector((state)=>state.registeredUser.active);
  console.log(active);

  const navigate=useNavigate();

  const handleSignIn = async () => {
    setIsLoading(true); // Set loading to true when Sign In is clicked
    await dispatch(userLogInAction(user, navigate));
    setIsLoading(false); // Set loading to false after the login action is completed
  };
  return (
    <>
    <NavbarComp />
    {/* <Toaster /> */}
    {isLoading ?
    <Loader />:
      <div className=" mt-20 mb-20 flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl ">
        <div
          className="hidden bg-center bg-cover lg:block lg:w-1/2"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/7912532/pexels-photo-7912532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          }}
        />
        <form className="w-full px-6 py-8 md:px-8 lg:w-1/2" onSubmit={handleSignIn}>
          <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
            Welcome back!
          </p>
         
          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              id="email"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
              value={user.email}
              onChange={(e)=>setUser({...user,email:e.target.value})}
            />
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                htmlFor="password"
              >
                Password
              </label>
              <Link
                to="/forgetPassword"
                className="text-xs text-gray-500 dark:text-gray-300 hover:underline"
              >
                Forget Password?
              </Link>
            </div>
            <input
              id="password"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
              value={user.password}
              onChange={(e)=>setUser({...user,password:e.target.value})}
            />
          </div>
          <div className="mt-6">
          <button
              onClick={handleSignIn}
              className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-amber-400 rounded-lg hover:bg-amber-400 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            >
              Sign In
            </button>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
            <Link
              to="/signup"
              className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
            >
              or sign up
            </Link>
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
          </div>
        </form>
      </div>
    }
    </>
  );
};

export default Signin;
