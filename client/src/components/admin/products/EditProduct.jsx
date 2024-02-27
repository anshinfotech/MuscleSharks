import PropTypes from "prop-types";

import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { updatedProduct } from "../../redux/action/adminAction";

export default function EditProduct({ id }) {
  const [showModal, setShowModal] = useState(false);

  const cloudinaryRef = useRef();
  const [imageLinks, setImageLinks] = useState([]);
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
  }, []);

  const [updateProduct, setUpdatedProduct] = useState({
    name: "",
    stock: 0,
    image: [],
    category: "",
    description: "",
  });

  const dispatch = useDispatch();

  const uploadImage = (e) => {
    e.preventDefault();

    if (!cloudinaryRef.current) {
      console.error("Cloudinary not initialized");
      return;
    }

    const widgetRef = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dafie9ril",
        uploadPreset: "rkms5mm2",
      },
      function (error, result) {
        if (result.event === "success") {
          setImageLinks((prevLinks) => [...prevLinks, result.info.secure_url]);
          setProduct((prevProduct) => ({
            ...prevProduct,
            image: [...prevProduct.image, result.info.secure_url],
          }));
        }
      }
    );

    widgetRef.open();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatedProduct(updateProduct, id));
    setShowModal(false);
  };

  return (
    <>
      <button
        className="bg-slate-500 text-white active:bg-slate-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"c
        onClick={() => setShowModal(true)}
      >
        Edit
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <form onSubmit={handleSubmit}>
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">Edit Product</h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  <div className="relative p-6 flex-auto">
                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="block text-blueGray-600 text-sm font-bold mb-2"
                      >
                        Product Name
                      </label>
                      <input
                        onChange={(e) =>
                          setUpdatedProduct({
                            ...updateProduct,
                            name: e.target.value,
                          })
                        }
                        type="text"
                        id="name"
                        name="name"
                        className="w-full border border-blueGray-300 rounded-lg px-3 py-2"
                        value={updateProduct.name}
                        // required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="stock"
                        className="block text-blueGray-600 text-sm font-bold mb-2"
                      >
                        Stock
                      </label>
                      <input
                        onChange={(e) =>
                          setUpdatedProduct({
                            ...updateProduct,
                            stock: parseInt(e.target.value),
                          })
                        }
                        type="number"
                        id="stock"
                        name="stock"
                        className="w-full border border-blueGray-300 rounded-lg px-3 py-2"
                        value={updateProduct.stock}
                        // required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="category"
                        className="block text-blueGray-600 text-sm font-bold mb-2"
                      >
                        Category
                      </label>
                      <select
                        onChange={(e) =>
                          setUpdatedProduct({
                            ...updateProduct,
                            category: e.target.value,
                          })
                        }
                        value={updateProduct.category}
                        className="w-full border border-blueGray-300 rounded-lg px-3 py-2"
                        // required
                      >
                        <option value="">Select Category</option>
                        <option value="Protein Supplements">
                          Protein Supplements
                        </option>
                        <option value="Amino Acids and BCAAs">
                          Amino Acids and BCAAs
                        </option>
                        <option value="Pre-Workout Supplements">
                          Pre-Workout Supplements
                        </option>
                        <option value="Post-Workout Recovery Supplements">
                          Post-Workout Recovery Supplements
                        </option>
                        <option value="Fat Burners and Weight Loss Supplements">
                          Fat Burners and Weight Loss Supplements
                        </option>
                        <option value="Vitamins and Minerals">
                          Vitamins and Minerals
                        </option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="description"
                        className="block text-blueGray-600 text-sm font-bold mb-2"
                      >
                        Description
                      </label>
                      <textarea
                        onChange={(e) =>
                          setUpdatedProduct({
                            ...updateProduct,
                            description: e.target.value,
                          })
                        }
                        id="description"
                        name="description"
                        className="w-full border border-blueGray-300 rounded-lg px-3 py-2"
                        value={updateProduct.description}
                        // required
                      />
                    </div>
                    <div className="mb-4">
                      <button
                        type="button"
                        className="bg-slate-700 hover:bg-slate-800 p-2 text-white rounded"
                        onClick={uploadImage}
                      >
                        Upload Image
                      </button>
                      {imageLinks.map((link, index) => (
                        <img
                          key={index}
                          src={link}
                          alt={`Product Image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

EditProduct.propTypes = {
  id: PropTypes.string.isRequired, // Assuming id is a string, adjust it if necessary
};
