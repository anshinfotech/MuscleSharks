import { useState } from "react"
import { useDispatch } from "react-redux"
// import { addProduct, getSingleOrder } from "../../redux/action/action";
import { Toaster } from "sonner";
// import { Toaster } from 'react-hot-toast';
import { getSingleOrder } from "../../redux/action/adminAction";

const SearchOrders = () => {

    const [order,setOrder]=useState("");

    const dispatch=useDispatch();
    console.log("order: ",order);

  return (
    <div className='mt-20 mr-auto ml-auto w-[90%]'>
        <form className="">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="orderId">
        Order Id
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="orderId" type="text" placeholder="Enter Order_Id for Order Details " onChange={(e)=>setOrder(e.target.value)} />
      <p className="text-amber-600 text-xs italic" >Please fill out this field.</p>
    </div>
  </div>

  <div className="text-center mt-8">
  <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-blue-800" onClick={()=>dispatch(getSingleOrder(order))}>See Order Details</button>

  </div>
</form>
<Toaster />
    </div>
  )
}

export default SearchOrders