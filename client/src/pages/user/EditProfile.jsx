import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUserProfile } from "../../components/redux/action/userAction";
// import { Toaster } from 'sonner';
// import { Toaster } from 'react-hot-toast';

export default function EditProfile() {
  const [showModal, setShowModal] = useState(false);

  const [updatedUser,setUpdatedUser]=useState({
    name:"",gender:"",email:"",address:"",contact:""
  })

  const dispatch=useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission here
    // You can access the form values using e.target.<fieldName>.value
    setShowModal(false);
  };

  // console.log(updatedUser);
  return (
    <>
    {/* <NavbarComp /> */}
    {/* <Toaster /> */}
      <button
        className="bg-amber-500 text-white active:bg-amber-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Edit Profile
      </button>
      {showModal ? (
        <>
          <div className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <form onSubmit={handleSubmit}>
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">Edit Profile</h3>
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
                      <label htmlFor="name" className="block text-blueGray-600 text-sm font-bold mb-2">
                        Name
                      </label>
                      <input
                        onChange={(e)=>setUpdatedUser({...updatedUser,name:e.target.value})}
                        type="text"
                        id="name"
                        name="name"
                        className="w-full border border-blueGray-300 rounded-lg px-3 py-2"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-blueGray-600 text-sm font-bold mb-2">
                        Email
                      </label>
                      <input
                        onChange={(e)=>setUpdatedUser({...updatedUser,email:e.target.value})}
                        type="email"
                        id="email"
                        name="email"
                        className="w-full border border-blueGray-300 rounded-lg px-3 py-2"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="contact" className="block text-blueGray-600 text-sm font-bold mb-2">
                        Contact
                      </label>
                      <input
                        onChange={(e)=>setUpdatedUser({...updatedUser,contact:e.target.value})}
                        type="text"
                        id="contact"
                        name="contact"
                        className="w-full border border-blueGray-300 rounded-lg px-3 py-2"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="address" className="block text-blueGray-600 text-sm font-bold mb-2">
                        Address
                      </label>
                      <input
                        onChange={(e)=>setUpdatedUser({...updatedUser,address:e.target.value})}
                        type="text"
                        id="address"
                        name="address"
                        className="w-full border border-blueGray-300 rounded-lg px-3 py-2"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-blueGray-600 text-sm font-bold mb-2">Gender</label>
                      <div>
                        <label className="inline-flex items-center">
                          <input
                            onChange={(e)=>setUpdatedUser({...updatedUser,gender:e.target.value})}
                            type="radio"
                            className="form-radio h-5 w-5 text-blue-600"
                            name="gender"
                            value="male"
                            required
                          />
                          <span className="ml-2">Male</span>
                        </label>
                        <label className="inline-flex items-center ml-6">
                          <input
                            onChange={(e)=>setUpdatedUser({...updatedUser,gender:e.target.value})}
                            type="radio"
                            className="form-radio h-5 w-5 text-blue-600"
                            name="gender"
                            value="female"
                            required
                          />
                          <span className="ml-2">Female</span>
                        </label>
                        <label className="inline-flex items-center ml-6">
                          <input
                            onChange={(e)=>setUpdatedUser({...updatedUser,gender:e.target.value})}
                            type="radio"
                            className="form-radio h-5 w-5 text-blue-600"
                            name="gender"
                            value="other"
                            required
                          />
                          <span className="ml-2">Other</span>
                        </label>
                      </div>
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
                      type="button"
                      onClick={()=>dispatch(updateUserProfile(updatedUser))}
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
