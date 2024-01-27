import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAllCart } from "../redux/action/cartAction";
import NavbarComp from "../Navbar/Navbar";
import { placeOrder } from "../redux/action/orderAction";
import axios from "axios";

const CheckoutPage = () => {
  const navigate = useNavigate();

  const items = useSelector((state) => state.cartStore.items);
  const address = useSelector((state) => state.registeredUser.user?.address);
  const name = useSelector((state) => state.registeredUser.user?.name);
  const email = useSelector((state) => state.registeredUser.user?.email);
  const contact = useSelector((state) => state.registeredUser.user?.contact);
  const dispatch = useDispatch();
  console.log("Items", items);
  useEffect(() => {
    dispatch(getAllCart());
  }, [dispatch]);

  // Calculate subtotal and total price
  const subtotal = items.reduce(
    (acc, item) =>
      acc +
      (item.selectedVariantDetails.price -
        item.selectedVariantDetails.discount) *
        item.quantity,
    0
  );
  let deliveryCharge = 0;
  if (subtotal > 0 && subtotal < 5000) {
    deliveryCharge = 50;
  } else if (subtotal >= 5000) {
    deliveryCharge = 100;
  }
  const total = subtotal + deliveryCharge;

  // const [paymentDetails, setPaymentDetails] = useState({
  //   razorpay_order_id: "",
  //   razorpay_payment_id: "",
  //   razorpay_signature: "",
  // });

  // const handleOnlineOrder = async () => {
  //   try {
  //     const response = await axios.post("api/checkout", { amount: total });
  //     console.log("Response data:", response.data);

  //     const orderData = response.data;
  //     console.log("total", total);
  //     console.log(orderData);
  //     console.log(orderData.id);

  //     if (orderData && orderData.amount) {
  //       const options = {
  //         key: "rzp_test_7VKNg5st6DExxb",
  //         amount: orderData.amount,
  //         currency: "INR",
  //         name: "MuscleShaeks",
  //         description: "Test Transaction",
  //         image: "https://res.cloudinary.com/daafgif2e/image/upload/f_auto,q_auto/jgy0cwhj519ycak9mnho",
  //         order_id: orderData.id,
  //         callback_url: "http://localhost:5000/api/paymentverification",
  //         prefill: {
  //           name,
  //           email,
  //           contact,
  //         },
  //         notes: {
  //           address,
  //         },
  //         theme: {
  //           color: "#F2CB1F",
  //         },
  //       };
  //       const rzp1 = new window.Razorpay(options);
  //       rzp1.open();
  //     } else {
  //       console.error("Invalid order data:", orderData);
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };


  const [paymentDetails, setPaymentDetails] = useState({
    razorpay_order_id: "",
    razorpay_payment_id: "",
    razorpay_signature: "",
  });

  const handleOnlineOrder = async () => {
    try {
      const response = await axios.post("/api/checkout", { amount: total });
      console.log("Response data:", response.data);

      const orderData = response.data;
      console.log("total", total);
      console.log(orderData);
      console.log(orderData.id);

      if (orderData && orderData.amount) {
        const options = {
          key: "rzp_test_7VKNg5st6DExxb",
          amount: orderData.amount,
          currency: "INR",
          name: "MuscleSharks",
          description: "Test Transaction",
          image: "https://res.cloudinary.com/daafgif2e/image/upload/f_auto,q_auto/jgy0cwhj519ycak9mnho",
          order_id: orderData.id,
          prefill: {
            name,
            email,
            contact,
          },
          notes: {
            address,
          },
          theme: {
            color: "#F2CB1F",
          },
          handler: function (response) {
            setPaymentDetails({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });
            handlePaymentVerification();
            navigate("/user-orders")
          },
          modal: {
            ondismiss: function () {
              console.log("Payment dismissed");
            },
          },
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
      } else {
        console.error("Invalid order data:", orderData);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handlePaymentVerification = async () => {
    try {
      const response = await axios.post("/api/paymentVerification", paymentDetails);
      console.log("Payment verification response:", response.data);
      // Handle the response from the payment verification endpoint
    } catch (error) {
      console.error("Error during payment verification:", error);
    }
  };




  // Handle placing the order
  const handlePlaceOrder = () => {
    // Prepare order data
    const orderData = {
      shippingAddress: address,
      userName: name,
      products: items.map((item) => ({
        productId: item.productId,
        variantId: item.variantId,
        quantity: item.quantity,
      })),
    };

    // Dispatch the placeOrder action
    dispatch(placeOrder(orderData, navigate));
  };

  return (
    <>
      <NavbarComp />

      {/* Main content */}
      <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32 mb-5">
        <Link
          href="#"
          style={{ fontFamily: "Cinzel" }}
          className=" text-2xl font-bold text-gray-800"
        >
          Muscle Sharks
        </Link>
        {/* Add your navigation links or components here */}
      </div>

      {/* Grid layout for the main content */}
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 mb-10">
        {/* Left Side - Order Summary */}
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Order Summary</p>
          <p className="text-gray-400">
            Check your items. And select a suitable Payment method.
          </p>

          {/* Display cart items */}
          <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            {items.map((item) => (
              <div
                key={item.variantId}
                className="flex flex-col rounded-lg bg-white sm:flex-row"
              >
                <img
                  className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                  src={item.image[0]}
                  alt=""
                />
                <div className="flex w-full flex-col px-4 py-4">
                  <span className="font-semibold">{item.name}</span>
                  <span className="float-right text-gray-400">
                    {item.description}
                  </span>
                  <p className="text-lg font-bold">{item.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Display selected address */}
          <p className="mt-8 text-lg font-medium">Select Address</p>
          <form className="mt-5 grid gap-6">
            <div className="relative">
              {/* Radio button for selecting the address */}
              <input
                className="peer hidden"
                id="radio_1"
                type="radio"
                name="radio"
                checked
              />
              <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label
                className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                htmlFor="radio_1"
              >
                <div className="ml-5">
                  <span className="mt-2 font-semibold">{address}</span>
                  <p className="text-slate-500 text-sm leading-6">
                    Delivery: 2-4 Days
                  </p>
                </div>
              </label>
            </div>
          </form>
        </div>

        {/* Right Side - Payment Details */}
        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p className="text-xl font-medium">Payment Details</p>
          <p className="text-gray-400">
            Complete your order by providing your payment details.
          </p>

          {/* Total */}
          <div className="mt-6 border-t border-b py-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Subtotal</p>
              <p className="font-semibold text-gray-900">
                ₹{subtotal.toFixed(2)}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Shipping</p>
              <p className="font-semibold text-gray-900">
                ₹{deliveryCharge.toFixed(2)}
              </p>
            </div>
            {/* Add your discount or additional charges here */}
            <div className="flex items-center justify-between mt-2">
              <p className="text-sm font-medium text-gray-900">Total</p>
              <p className="font-semibold text-gray-900">₹{total.toFixed(2)}</p>
            </div>
          </div>

          {/* Place Order Button */}
          <div className="flex flex-wrap justify-between">
            <button
              onClick={handlePlaceOrder}
              className="mt-6 bg-amber-300 text-white py-2 px-4 rounded-md hover:bg-amber-400  focus:bg-amber-500"
            >
              Click for Cash On Delivery
            </button>
            {/* <button
              onClick={handleOnlineOrder}
              className="mt-6 bg-amber-300 text-white py-2 px-4 rounded-md hover:bg-amber-400  focus:bg-amber-500"
            >
              Pay Online
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

// Export the CheckoutPage component
export default CheckoutPage;
