import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Signin from "./pages/user/Signin";
import Signup from "./pages/user/SignUp";
import Cart from "./components/cart/Cart";
import Contact from "./components/contact/Contact";
import axios from "axios";
import ProductItems from "./pages/products/ProductFilter";
import SingleProduct from "./pages/products/SingleProduct";
import NotFound from "./pages/pagenotfound/NotFound";
import About from "./pages/about/About";
import ForgotPasswordForm from "./pages/user/ForgetPassword";
import CheckoutPage from "./components/cart/Checkout";
import { ProfileComponent } from "./pages/user/Profile";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAuth } from "./components/redux/action/userAction";
import ResetPassword from "./pages/user/ResetPassword";
import ChangePassword from "./pages/user/ChangePassword";
import AdminHome from "./components/admin/AdminHome";
import Cards from "./components/admin/Cards";
import Product from "./components/admin/products/Product";
import Users from "./components/admin/user/Users";
import LogInAdmin from "./components/admin/LoginAdmin";
import { verifyAdmin } from "./components/redux/action/adminAction";
import NotAcc from "./components/admin/PageNotAcc";
import UserOrder from "./pages/user/UserOrders";
import Orders from "./components/admin/orders/Orders";
import Footer from "./components/Footer/Footer";
import Coupon from "./components/admin/coupon/Coupon";
import EmailVerification from "./pages/user/EmailVerification";
import PrivacyPolicy from "./pages/business_pages/PrivacyPolicy";
import ReturnAndRefundPolicy from "./pages/business_pages/ReturnAndRefundPolicy";
import TermsAndCondition from "./pages/business_pages/TermsAndCondition";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Blog from "./components/admin/blogs/Blog";
import Blogpage from "./components/admin/blogs/Blogpage";
import SingleBlogPage from "./components/admin/blogs/Singleblogpage";
import ScrollToTop from "./Scrolltotop";
import PaymentSuccess from "./components/payment/Paymentsucess";
import Delivery from "./pages/business_pages/Delivery";
import Offer from "./components/admin/offers/Offers";

axios.defaults.baseURL = "https://api.musclesharks.in";
axios.defaults.withCredentials = true;

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userAuth());
  }, [dispatch]);

  useEffect(() => {
    dispatch(verifyAdmin());
  }, [dispatch]);

  const isAdmin = useSelector((state) => state.adminDetails.admin);
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verification" element={<EmailVerification />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/user-orders" element={<UserOrder />} />
        <Route path="/products" element={<ProductItems />} />
        <Route path="/productDetails" element={<SingleProduct />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogpage" element={<Blogpage />} />
        <Route path="/blogs/:blogId" element={<SingleBlogPage />} />
        <Route path="/account" element={<ProfileComponent />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/forgetPassword" element={<ForgotPasswordForm />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/pages/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/pages/deliverypolicy" element={<Delivery />} />
        <Route
          path="/pages/return-and-refund-policy"
          element={<ReturnAndRefundPolicy />}
        />
        <Route
          path="/pages/terms-and-conditions"
          element={<TermsAndCondition />}
        />
        <Route path="/*" element={<NotFound />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin/login" element={<LogInAdmin />} />
        <Route path="/admin/cards" element={isAdmin ? <Cards /> : <NotAcc />} />
        <Route
          path="/admin/products"
          element={isAdmin ? <Product /> : <NotAcc />}
        />
        <Route path="/admin/users" element={isAdmin ? <Users /> : <NotAcc />} />
        <Route
          path="/admin/orders"
          element={isAdmin ? <Orders /> : <NotAcc />}
        />
        <Route
          path="/admin/coupon"
          element={isAdmin ? <Coupon /> : <NotAcc />}
        />
        <Route path="/admin/blog" element={isAdmin ? <Blog /> : <NotAcc />} />
        <Route path="/admin/offer" element={isAdmin ? <Offer /> : <NotAcc />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
