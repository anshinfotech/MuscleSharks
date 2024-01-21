import { useState } from "react";
import ShopByCategory from "./Categories";
import DiscountModal from "./DiscountModal";
import "./deal.css";

const Testimonial = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <div className="relative">
      <div className="w-full h-[600px] relative">
        <video src="/muscleshark/video.mp4"  autoPlay loop className="object-cover w-full h-full"></video>
        <div className="absolute items-center flex justify-around w-[100%] top-6 ">
          <div className="">
            <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: "Cinzel" }}>
              Muscle<span className="text-amber-400">Sharks</span>
            </h1>
            <p className="text-lg text-white  w-[300px] mb-4">
              Your Trusted Destination for Premium Gym Supplements
            </p>
          </div>
          <div className="button-container">
            <button className="custom-button" onClick={openModal}>
              GET YOUR COUPON
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && <DiscountModal closeModal={closeModal} />}
      <ShopByCategory />
    </div>
  );
}

export default Testimonial;
