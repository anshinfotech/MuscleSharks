import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCoupons } from '../../components/redux/action/adminAction';

const DiscountModal = ({ closeModal }) => {
  const couponCode=useSelector((state)=>state.adminDetails.allCoupons);
  const cou=useSelector((state)=>state);
  console.log("C",couponCode);
  console.log("Cou",cou);
  const availiableCoupon=couponCode[couponCode.length-1];

  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getAllCoupons())
  },[dispatch])

  console.log("Code",couponCode);
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl ">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none px-56 py-10">
            {/*header*/}
            {/* <div className="flex items-start justify-center p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">Discount</h3>
            </div> */}
            <div className="pb-2 bg-white">
              <div className="flex-col items-center sm:flex">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 p-4 mx-auto bg-red-100 rounded-full sm:mx-0 sm:h-16 sm:w-16">
                  <svg
                    className="w-full h-full text-red-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="19" y1="5" x2="5" y2="19"></line>
                    <circle cx="6.5" cy="6.5" r="2.5"></circle>
                    <circle cx="17.5" cy="17.5" r="2.5"></circle>
                  </svg>
                </div>
                <div className="mt-3 mb-1 text-center sm:ml-4 sm:text-left">
                  <h3
                    className="pt-1 text-3xl font-black leading-6 text-gray-900"
                    id="modal-headline"
                  >
                    Discount
                  </h3>
                </div>
              </div>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <div className="w-full text-base text-center text-gray-600">
                use the coupon code below
              </div>
              <div className="px-4  pt-3 text-xs bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
                <div className="w-full p-4 my-3 font-mono text-lg text-center text-gray-600 border-4 border-red-400 border-dashed rounded select-all">
                  {/* {XXXX-XXXX-XXXXX} */}
                  {availiableCoupon ? availiableCoupon.code:"Coming Soon"}
                </div>
              </div>
              <div className="justify-center w-full px-4 mt-2 font-sans text-xs leading-6 text-center text-gray-500">
                <a href="#_">Terms and conditions apply</a>
              </div>
            </div>
            <div className=" flex justify-center">
            <button
              className=" bg-transparent border-0 text-black  text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={() => closeModal(false)}
            >
              <span className="bg-transparent text-black  h-6  text-2xl block outline-none focus:outline-none">
                Close
              </span>
            </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DiscountModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
}


export default DiscountModal;