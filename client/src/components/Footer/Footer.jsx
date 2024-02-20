import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const yrs = new Date().getFullYear();
  const location=useLocation();

  const isAdminRoute = location.pathname.startsWith('/admin');
  
  return (
    <footer 
    style={{
        backgroundColor: isAdminRoute ? 'rgb(31, 41, 55)' : 'rgb(251, 191, 36)',
      }} 
      className="relative bottom-0">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to="/" className="flex items-center mb-4 sm:mb-0">
            <img
              src="/ms/logo.jpg"
              className="h-8 mr-3"
              alt="Musclesharks Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white" style={{fontFamily:"Cinzel"}}>
              MUSCLE SHARKS
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link to="/about" className="mr-4 hover:underline md:mr-6 ">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="mr-4 hover:underline md:mr-6">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/pages/terms-and-conditions" className="mr-4 hover:underline md:mr-6">
                Terms And Conditions
              </Link>
            </li>
            <li>
              <Link to="/pages/privacypolicy" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/pages/return-and-refund-policy" className="mr-4 hover:underline md:mr-6">
                Return And Refund Policy
              </Link>
            </li>
            <li>
              <Link to="/pages/deliverypolicy" className="hover:underline">
                Delivery and Shipping Policy
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {yrs}{" "}
          <Link to="/" className="hover:underline">
            Muscle Shark
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;




