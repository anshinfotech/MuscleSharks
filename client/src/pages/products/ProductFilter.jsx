import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  getSingleProduct,
} from "../../components/redux/action/productAction";
import Loader from "../../components/loader/Loader";
import SearchBar from "./SearchBar";
import { addToCart } from "../../components/redux/action/cartAction";
import { useNavigate } from "react-router-dom";
import NavbarComp from "../../components/Navbar/Navbar";

function ProductItems() {
  const products = useSelector((state) => state.productStore.products);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  let filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts())
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, [dispatch]);

  const navigate = useNavigate();

  return (
    <>
      <NavbarComp />
      <div className="bg-white">
        <div>
          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 mx-auto">
                New Arrivals
              </h1>
            </div>

            <section
              aria-labelledby="products-heading"
              className="pb-24 pt-6 mx-auto"
            >
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3 md:grid-cols-2">
                {/* Product grid */}
                <div className="lg:col-span-3">
                  {/* Your content */}

                  <SearchBar setSearchQuery={setSearchQuery} />

                  <div className="bg-white mx-auto">
                    <div className="mx-auto max-w-2xl  px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                      {loading ? (
                        <Loader className="ml-20" />
                      ) : filteredProducts.length >= 1 ? (
                        <div className="flex flex-wrap gap-10">
                          {filteredProducts.map((product) => (
                            <div
                              key={product._id}
                              className="relative lg:w-80 md:w-[100%] sm:w-[100%] max-sm:w-[100%] overflow-hidden rounded-lg bg-white border"
                            >
                              <a href="#">
                                <img
                                  className="h-60 ml-auto mr-auto rounded-t-lg object-cover"
                                  src={product.image[0]}
                                  alt="product image"
                                />
                              </a>
                              <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-amber-400 text-center text-sm text-white">
                                Sale
                              </span>
                              <div className="mt-4 px-5 pb-5">
                                <a href="#">
                                  <h5 className="text-xl font-semibold tracking-tight text-slate-900">
                                    {product.name}
                                  </h5>
                                </a>
                                <div className="mt-2.5 mb-2.5 flex items-center">
                                  {[...Array(5)].map((_, index) => (
                                    <svg
                                      key={index}
                                      aria-hidden="true"
                                      className={`h-5 w-5 ${
                                        index < product.rating
                                          ? "text-yellow-500"
                                          : "text-gray-300"
                                      }`}
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                  ))}
                                  <span className="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                                    {product.rating}
                                  </span>
                                </div>
                                <div>
                                  <p>
                                    <span className="text-2xl font-bold text-slate-900">
                                      {product.variants[0].price -
                                        product.variants[0].discount}
                                    </span>
                                    <span className="text-sm text-slate-900 line-through">
                                      {product.variants[0].price}
                                    </span>
                                  </p>
                                </div>
                                <div className="flex flex-wrap items-center gap-4 justify-between ">
                                  <button
                                    onClick={() =>
                                      dispatch(
                                        getSingleProduct(product._id, navigate)
                                      )
                                    }
                                    className="px-4 py-2 sm:px-6 text-sm sm:py-3 lg:w-fit sm:w-[100%] max-sm:w-[100%] rounded bg-amber-400 text-white mt-2 sm:mt-0 mr-2 max-sm:[100%]"
                                  >
                                    View Details
                                  </button>
                                  <button
                                    className="px-4 py-2 sm:px-6 text-sm sm:py-3 lg:w-fit sm:w-[100%] max-sm:w-[100%] rounded bg-slate-900 text-white mt-2 sm:mt-0 mr-2 max-sm:[100%]"
                                    onClick={() =>
                                      dispatch(addToCart(product._id))
                                    }
                                  >
                                    Add to cart
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-xl text-gray-500">No Products Yet</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

export default ProductItems;
