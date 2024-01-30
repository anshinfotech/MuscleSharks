import { useDispatch, useSelector } from "react-redux";
import ReviewsComponent from "./Review";
import { useEffect, useState } from "react";
import { getSingleProduct } from "../../components/redux/action/productAction";
import Loader from "../../components/loader/Loader";
import NavbarComp from "../../components/Navbar/Navbar";
import { addToCart } from "../../components/redux/action/cartAction";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Product = () => {
  const product = useSelector((state) => state.productStore.singleProduct);
  const getSingle = localStorage.getItem("singleItem");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedVariant, setSelectedVariant] = useState(
    product.variants && product.variants.length > 0 ? product.variants[0] : null
  );

  const [selectedVariantStock, setSelectedVariantStock] = useState(
    product.variants && product.variants.length > 0
      ? product.variants[0].stock
      : 0
  );

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    dispatch(getSingleProduct(getSingle, navigate)).then(() =>
      setLoading(false)
    );
  }, [dispatch, getSingle]);

  useEffect(() => {
    if (selectedVariant && selectedVariant.stock) {
      setSelectedVariantStock(selectedVariant.stock);
    }
  }, [selectedVariant]);

  const cartData = {
    productId: getSingle,
    selectedVariantId: selectedVariant ? selectedVariant._id : null,
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };


  return (
    <div>
      <NavbarComp />
      <div className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[600px] flex rounded-lg bg-white dark:bg-gray-700 mb-4">
                {loading ? (
                  <Loader />
                ) : (
                  <>
                    <div className="flex flex-col w-fit">
                      {product.image.map((image, index) => (
                        <img
                          key={index}
                          className="cursor-pointer w-20 h-20 object-cover rounded-md hover:border-2 hover:border-amber-500"
                          src={image}
                          alt={`Product Image ${index + 1}`}
                          onClick={() => handleImageClick(image)}
                        />
                      ))}
                    </div>
                   <div className="flex justify-center items-center w-96">
                   <img
                      className=" bg-transparent"
                      src={selectedImage || product.image[0]}
                      alt="Product Image"
                      style={{ background: "transparent" }}
                    />
                   </div>
                  </>
                )}
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <button
                    className="w-full bg-amber-400 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-amber-500 dark:hover:bg-gray-700"
                    onClick={() => dispatch(addToCart(cartData))}
                  >
                    Add to Cart
                  </button>
                  
                </div>
                <div className="w-1/2 px-2">
                <a
                    href={product.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="w-full bg-amber-400 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-amber-500 dark:hover:bg-gray-700">
                      View Certificate
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {product.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {product.description}
              </p>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-lg text-amber-400 dark:text-gray-300">
                    Price:
                  </span>
                  <span className="text-gray-900 text-md font-semibold dark:text-gray-300">
                    {selectedVariant ? ` ₹${selectedVariant.price}` : "N/A"}
                  </span>
                </div>
                <div>
                  <span className="font-bold text-lg text-amber-400 dark:text-gray-300">
                    Availability:
                  </span>
                  <span
                    className={`text-gray-600 dark:text-gray-300 ${
                      selectedVariantStock > 0
                        ? "text-green-700"
                        : "text-red-700"
                    }`}
                  >
                    {selectedVariantStock > 0 ? (
                      <span className="text-md font-semibold"> In Stock</span>
                    ) : (
                      <span>Out of Stock</span>
                    )}
                  </span>
                </div>
              </div>
              <div className="mb-4 bg-white p-6 pb-8">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Select Variant:
                </span>
                <div className="flex items-center mt-2">
                  {product.variants &&
                    product.variants.map((variant, index) => (
                      <>
                        <button
                          key={index}
                          className={`bg-amber-300 text-white py-2 px-4 font-bold mr-7 w-[40%] rounded hover-bg-gray-400 dark-hover-bg-amber-600 ${
                            variant === selectedVariant &&
                            "bg-amber-400 dark:bg-gray-600"
                          }`}
                          onClick={() => {
                            setSelectedVariant(variant);
                            setSelectedVariantStock(variant.stock);
                          }}
                        >
                          <p className="text-xl font-bold">{variant.unit}</p>
                          {variant.quantity}
                        </button>
                      </>
                    ))}
                </div>
              </div>

              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Instructions 
                </span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {product.instructions}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loading ? <Loader /> : <ReviewsComponent id={getSingle} />}
    </div>
  );
};

export default Product;
