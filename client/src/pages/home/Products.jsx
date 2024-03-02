import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, getSingleProduct } from "../../components/redux/action/productAction";
import { addToCart } from "../../components/redux/action/cartAction";
import { Link, useNavigate } from "react-router-dom";

const Products = () => {
  const allProduct = useSelector((state) => state.productStore.products);
  const products = allProduct && allProduct.slice(0, 20);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const addToCartHandler = (productId, selectedVariant) => {
    const cartData = {
      productId: productId,
      selectedVariantId: selectedVariant
    };

    dispatch(addToCart(cartData));
  };

  return (
    <div className="w-full bg-gray-100">
      <div className="px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 flex flex-wrap">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className="w-full sm:w-1/2 md:w-1/3  mb-4 flex justify-center">
              <div className="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer bg-white">
                <div className="bg-white flex justify-center">
                  <img src={product.image[0]} alt={product.name} className="lg:w-[60%] sm:w-[60%] max-sm:w-[100px]" />
                </div>
                <div className="py-4 px-4 bg-white">
                  <h3 className="text-lg font-semibold text-gray-600">{product.name}</h3>
                  {product.variants.length > 0 ? (
                    <div className="flex justify-between">
                      <p className="text-md font-bold">Sale Price ₹ {product.variants[0].price - product.variants[0].discount}</p>
                      <p className="text-lg font-thin line-through">₹{product.variants[0].price}</p>
                    </div>
                  ) : (
                    <p>No Variants</p>
                  )}
                  <div className="flex justify-evenly items-center">
                    <button className="px-4 py-2 sm:px-6 text-sm sm:py-3 lg:w-fit sm:w-[100%] max-sm:w-[100%] rounded bg-amber-400 text-white mt-2 sm:mt-0 mr-2 max-sm:[100%]" onClick={() => dispatch(getSingleProduct(product._id, navigate))}>View Details</button>
                    <button onClick={() => addToCartHandler(product._id, product.variants[0]._id)} className="px-4 py-2 sm:px-6 text-sm sm:py-3 lg:w-fit sm:w-[100%] max-sm:w-[100%] rounded bg-amber-400 text-white mt-2 sm:mt-0 mr-2 max-sm:[100%]">Add To Cart</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <div className="text-center mt-5 mb-10">
        <Link to={"/products"} className="bg-white hover:bg-amber-400 hover:text-white border-2 p-3 text-amber-400 border-amber-400 rounded">View All Products <i className="fa-solid fa-arrow-right"> {">>"}</i></Link>
      </div>
    </div>
  );
};

export default Products;









