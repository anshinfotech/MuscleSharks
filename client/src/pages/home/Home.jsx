import OurProducts from "./OurProducts";
import OverviewProducts from "./OverviewProducts";
import Testimonial from "./TestReview";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import TestReview from "../../components/testimonial/Testimonial";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllCart } from "../../components/redux/action/cartAction";
import Carousel from "../home/Carousel";
import "./home.css";
import Offers from "./Offers";

// import { useSelector } from "react-redux"

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCart());
  }, [dispatch]);

  // const cartProducts=useSelector((state)=>state.cartStore.items);

  return (
    <>
      <Navbar />

      <div className="relative h-[550px]">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-[url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-no-repeat box-shadow:inset 0 0 10px 10px rgba(0, 0, 0, 0.2) after:bg-black/60 after:w-full after:h-48 after:z-00 after:blur-lg after:bottom-0 after:absolute relative">
            <div className="text-white flex justify-between p-6 pt-20 z-100">
              <div>
                <h1 className="mt-4 mb-2 text-6xl font-extrabold">
                  Boost your <br /> immune system today
                </h1>
                <p className="mt-2 mb-6">
                  27g of pure protein for enhanced lean muscle.
                </p>
                <p className="mt-2 mb-6">
                  100% authentic Lab tested supplements <br />~ Supplements That
                  Actually Work
                </p>
                <Link to={"/products"} className=" bg-amber-600 p-2 pr-4 pl-4">
                  SHOP NOW
                </Link>
              </div>
              <div>
                <img
                  src="/muscleshark/heroproduct.png"
                  alt=""
                  className="hide"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <OverviewProducts />
      <Offers />
      <OurProducts />
      <Carousel></Carousel>
      <Testimonial />
      <TestReview />
    </>
  );
};

export default Home;
