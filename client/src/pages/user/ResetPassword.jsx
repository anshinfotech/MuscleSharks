import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../components/redux/action/userAction";
import { useLocation } from 'react-router-dom';
import NavbarComp from "../../components/Navbar/Navbar";
// import { Toaster, toast } from "sonner";
// import toast,{ Toaster } from 'react-hot-toast';


const ResetPassword = () => {

  const [user,setUser]=useState({newPassword:"",confirmPassword:""})
  const dispatch=useDispatch();

  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const token = params.get('token');

  // const success=useSelector((state)=>state.registeredUser.success);
  // const error=useSelector((state)=>state.registeredUser.error);

  // useEffect(() => {
  //   if (success) {
  //     toast.success(success);
  //   }
  //   if (error) {
  //     toast.error(error);
  //   }
  // }, [success, error]);

  return (
    <>
      <NavbarComp />
      {/* <Toaster /> */}
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img className="w-10 h-10 mr-2" src="/public/muscleshark/logo.jpg" alt="logo" />
                <span> Muscle<span className="text-amber-400">Sharks</span></span>  
            </a>
            <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
                <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Change Password
                </h2>
                <form  className="mt-4 space-y-4 lg:mt-5 md:space-y-5">

                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                        <input type="password" name="newPassword" id="password" placeholder="••••••••" className="bg-amber-50 border border-amber-300 text-amber-900 sm:text-sm rounded-lg focus:ring-amber-600 focus:border-amber-600 block w-full p-2.5 dark:bg-amber-700 dark:border-amber-600 dark:placeholder-amber-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500 outline-none" onChange={(e)=>setUser({...user,newPassword:e.target.value})} required />
                    </div>
                    <div>
                        <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                        <input type="password" name="confirmPassword" id="confirm-password" placeholder="••••••••" className="bg-amber-50 border border-amber-300 text-amber-900 sm:text-sm rounded-lg focus:ring-amber-600 focus:border-amber-600 block w-full p-2.5 dark:bg-amber-700 dark:border-amber-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500 outline-none" onChange={(e)=>setUser({...user,confirmPassword:e.target.value})} required />
                    </div>
                    {/* <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="newsletter" aria-describedby="newsletter" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="newsletter" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                        </div>
                    </div> */}
                    <button type="button" className="w-full text-white bg-amber-400 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800" onClick={()=>dispatch(resetPassword(user,token))} >Reset password</button>
                </form>
            </div>
        </div>
      </section>
    </>
  );
}

export default ResetPassword;
