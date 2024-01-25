import Deals from "./Deals"
import Products from "./Products"

const OurProducts = () => {
  return (
    <>
        <div className="text-center mt-6">
            <p className=" text-sm text-slate-500 uppercase">Get Your Hands on Our Latest Offerings</p>
            <h1 className="text-3xl font-bold">Our Products</h1>
        </div>
        <div className="flex justify-center">
          <Products />
        </div>

        <Deals />
    </>
  )
}

export default OurProducts