import React from "react";
import NavbarComp from "../../components/Navbar/Navbar";

const Delivery = () => {
  return (
    <>
      <NavbarComp />
      <div className="bg-amber-100 p-5">
        <div className="bg-white w-[80%] m-auto p-5 mb-10">
          <h1 className="text-xl font-bold mb-10 text-center">
            MuscleSharks Shipping and Delivery Policy
          </h1>

          <section className="mb-8">
            <h2 className="mb-1 font-medium">Delivery Policy</h2>
            <p className="text-small">
              For International buyers, orders are shipped and delivered through
              registered international courier companies and/or International
              speed post only. For domestic buyers, orders are shipped through
              registered domestic courier companies and /or speed post only.
              Orders are shipped within 3-5 Days days or as per the delivery
              date agreed at the time of order confirmation and delivering of
              the shipment subject to Courier Company / post office norms.
              MUSCLE SHARKS is not liable for any delay in delivery by the
              courier company / postal authorities and only guarantees to hand
              over the consignment to the courier company or postal authorities
              within 3-5 Days days from the date of the order and payment or as
              per the delivery date agreed at the time of order confirmation.
              Delivery of all orders will be to the address provided by the
              buyer. Delivery of our services will be confirmed on your mail ID
              as specified during registration. For any issues in utilizing our
              services you may contact our helpdesk on 9888950420 or
              musclesharks07@gmail.com.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Delivery;
