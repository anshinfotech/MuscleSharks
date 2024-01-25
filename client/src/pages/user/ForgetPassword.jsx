import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { forgetPassword } from "../../components/redux/action/userAction";
import { useState } from "react";
import NavbarComp from "../../components/Navbar/Navbar";
// import { Toaster } from 'sonner';
// import { Toaster } from 'react-hot-toast';

const ForgotPasswordForm = () => {

    const dispatch =useDispatch();

    const [email,setEmail]=useState("");
    function inputHandle(e){
        e.preventDefault();
        setEmail(e.target.value)
    }
    console.log("Forget Email",email);


    const navigate=useNavigate();

  return (
  
    <div className="">
        <NavbarComp />
        {/* <Toaster /> */}
        <div className="p-10 bg-gray-400">
        {/* Container */}
        <div className="container mx-auto">
            <div className="flex justify-center px-6 my-12">
            {/* Row */}
            <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                {/* Col */}
                <div
                className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
                style={{
                    backgroundImage: "url('https://images.pexels.com/photos/6012007/pexels-photo-6012007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
                }}
                ></div>
                {/* Col */}
                <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                <div className="px-8 mb-4 text-center">
                    <h3 className="pt-4 mb-2 text-2xl">Forgot Your Password?</h3>
                    <p className="mb-4 text-sm text-gray-700">
                    We get it, stuff happens. Just enter your email address below and we{"'"}ll send you a
                    link to reset your password!
                    </p>
                </div>
                <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                    <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Enter Email Address..."
                        onChange={inputHandle}
                    />
                    </div>
                    <div className="mb-6 text-center">
                    <button 
                        className="w-full px-4 py-2 font-bold text-white bg-amber-500 rounded-full hover:bg-amber-600 focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={()=>dispatch(forgetPassword(email,navigate))}
                    >
                        Forget Password
                    </button>
                    </div>
                    <hr className="mb-6 border-t" />
                    <div className="text-center">
                    
                    <Link
                        className="inline-block text-sm text-amber-500 align-baseline hover:text-amber-800"
                        to="/signup"
                    >
                        Create an Account!
                    </Link>
                    </div>
                    <div className="text-center">
                    <Link
                        className="inline-block text-sm text-amber-500 align-baseline hover:text-amber-800"
                        to="/signin"
                    >
                        Already have an account? Login!
                    </Link>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  );
}

export default ForgotPasswordForm;
