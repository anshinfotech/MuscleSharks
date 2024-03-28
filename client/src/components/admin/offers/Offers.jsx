import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Carousel } from "@material-tailwind/react";
import Nav from "../AdminNav";
import {
  addCoupon,
  addOffer,
  deleteOffer,
  getAllOffers,
} from "../../redux/action/adminAction";

const Offer = () => {
  const offers = useSelector((state) => state.adminDetails.offers || []);
  console.log("Offers:", offers);
  const dispatch = useDispatch();
  const cloudinaryRef = useRef();
  const [imageLinks, setImageLinks] = useState([]);

  const [user, setUser] = useState({
    offerImg: [],
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const offerData = { ...user, offerImg: imageLinks.join(',') }; // Join array into a single string
    dispatch(addOffer(offerData));
    setUser({
      offerImg: [],
    });
    setImageLinks([]);
  };
  

  useEffect(() => {
    dispatch(getAllOffers());
  }, [dispatch]);

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
  }, []);

  const uploadImage = (e) => {
    e.preventDefault();

    if (!cloudinaryRef.current) {
      console.error("Cloudinary not initialized");
      return;
    }

    const widgetRef = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dgiw5xfpq",
        uploadPreset: "gwjd8x4l",
      },
      function (error, result) {
        if (error) {
          console.error("Error uploading image:", error);
          // Provide user feedback, e.g., toast or alert
        } else if (result.event === "success") {
          setImageLinks((prevLinks) => [...prevLinks, result.info.secure_url]);
        }
      }
    );

    widgetRef.open();
  };

  const handleDeleteOffer = (offerId) => {
    dispatch(deleteOffer(offerId));
    window.location.reload();
  };

  return (
    <>
      <Nav />
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-center text-gray-900">
            All Offers
          </h1>
        </div>
      </header>
      <div className="flex relative ml-10 mr-10 overflow-x-auto shadow-md sm:rounded-lg m-20">
        {offers.length > 0 ? (
        //   <Carousel>
        <>
                    {offers.map((offer) => (
              <div key={offer._id}>
                <div className="bg-white p-4 shadow-md rounded-lg">
                  
                    <img
                    //   key={imgIndex}
                      src={offer.offerImg}
                    //   alt={`Offer Image ${imgIndex + 1}`}
                      className="w-60 h-60 mt-4"
                    />
                     <h1>Created At: {new Date(offer.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</h1>
                  
                  <button
                    onClick={() => handleDeleteOffer(offer._id)}
                    className="bg-red-500 text-white px-3 py-1 mt-2 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
        </>

        //   </Carousel>
        ) : (
          <p>No offers available</p>
        )}
      </div>
      <div className="relative p-6 flex-auto">
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <div className="flex items-center justify-center gap-10 m-5">
              {imageLinks.map((link, index) => (
                <img
                  key={index}
                  src={link}
                  alt={`Product Image ${index + 1}`}
                  className="w-60 h-60"
                />
              ))}
            </div>
            <h1 className="text-xl font-bold tracking-tight text-gray-900">Please Upload Only One Offer Image At A Time</h1>
            <button
              type="button"
              className="bg-slate-700 hover:bg-slate-800 p-2 text-white rounded"
              onClick={uploadImage}
            >
              Upload Image
            </button>
          </div>
          <button
            type="submit"
            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg"
          >
            Add Offer
          </button>
        </form>
      </div>
    </>
  );
};

export default Offer;
