import { useState, useEffect } from "react";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import { deleteProduct, fetchProducts } from "../../redux/action/adminAction";
import { useDispatch, useSelector } from "react-redux";
import ViewVariant from "./ProductVariant";
import Nav from "../AdminNav";

const Product = () => {
  const products = useSelector((state) => state.adminDetails.products);
  const dispatch = useDispatch();
  console.log(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(14);

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setModalOpen(false);
  };

  const filteredProducts =
    products && products.length > 0
      ? products.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : [];

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Nav />
      <div className="mb-20">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-center text-gray-900">
              Add Product
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <AddProduct />
          </div>
        </main>

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              All Products
            </h1>

            <div className="mb-10">
              <form>
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full outline-none p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-slate-500 focus:border-slate-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-gray-500"
                    placeholder="Search for Supplements ..."
                    required
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="text-white absolute right-2.5 bottom-2.5 bg-slate-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-slate-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="relative ml-10 mr-10 overflow-x-auto shadow-md sm:rounded-lg">
              {currentProducts.length > 0 ? (
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Image
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Product Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Description
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Category
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Variants
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Edit
                      </th>
                      <th scope="col" className="px-6 py-3">
                        View Certificate
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentProducts.map((product) => (
                      <tr
                        key={product._id}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <td className="px-6 py-4">
                          {console.log("Demo", product.image[0])}
                          <img
                            src={product.image[0]}
                            alt={product.name}
                            className="h-16 w-16 object-cover"
                          />
                        </td>
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {product.name}
                        </td>
                        <td className="px-6 py-4">{product.description}</td>
                        <td className="px-6 py-4">{product.category}</td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => openModal(product)}
                            className="bg-green-600 text-white font-bold py-2 px-4 rounded mb-4"
                          >
                            View Variants
                          </button>
                        </td>

                        <td className=" px-6 py-4">
                          <EditProduct id={product._id} />
                        </td>
                        <td className="px-6 py-4">
                          <a
                            href={product.certificate}
                            download={product.certificate}
                            target="_blank"
                          >
                            <button className=" bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4">
                              View Certificate
                            </button>
                          </a>
                        </td>
                        <td className="px-6 py-4">
                          <button
                            className=" bg-red-600 text-white font-bold py-2 px-4 rounded mb-4"
                            onClick={() => dispatch(deleteProduct(product._id))}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <h1 className="text-center font-bold">No Products Added Yet</h1>
              )}
            </div>
          </div>
        </main>

        <div className="flex justify-center mt-4">
          <ul className="flex space-x-2">
            {Array.from(
              { length: Math.ceil(filteredProducts.length / productsPerPage) },
              (_, index) => (
                <li key={index}>
                  <button
                    onClick={() => paginate(index + 1)}
                    className={`px-4 py-2 rounded ${
                      currentPage === index + 1
                        ? "bg-gray-900 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {index + 1}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>

        {modalOpen && (
          <ViewVariant
            variants={selectedProduct.variants}
            closeModal={closeModal}
            productId={selectedProduct._id} 
          />
        )}
      </div>
    </>
  );
};

export default Product;
