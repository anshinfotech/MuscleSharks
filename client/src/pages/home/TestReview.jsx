import { useState } from "react";
import ShopByCategory from "./Categories";
import DiscountModal from "./DiscountModal";
import "./deal.css";

const Testimonial = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <div className="relative w-full h-[600px] mt-16">
      <video
        src="/muscleshark/video.mp4"
        autoPlay
        loop
        muted
        className="object-cover w-full h-full"
      ></video>

      <div className="absolute top-80 left-0 right-0 bottom-0 flex items-center justify-center text-center text-white z-10">
        <div>
          <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: "Cinzel" }}>
            Muscle<span className="text-amber-400">Sharks</span>
          </h1>
          <p className="text-lg mb-4">
            Your Trusted Destination for Premium Gym Supplements
          </p>

          <div className="button-container">
            <button className="custom-button" onClick={openModal}>
              GET YOUR COUPON
            </button>
          </div>
        </div>
      </div>

    </div>
      {isModalOpen && <DiscountModal closeModal={closeModal} />}
      <ShopByCategory />
      </>
  );
};

export default Testimonial;
