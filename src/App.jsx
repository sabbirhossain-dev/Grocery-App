// import {assets} from '../src/assets/assets'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./pages/home/Home";
import Shop from "./pages/Shop";
import Blogs from "./pages/blogs/Blogs";
import BlogDetails from "./pages/blogs/BlogDetails";
import Contact from "./pages/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import AboutUs from "./pages/about/AboutUs";
import Faq from "./pages/faq/Faq";
import Fruits from "./pages/fruits/Fruits";
import Vegetables from "./pages/vegetables/Vegetables";
import AllProducts from "./pages/all products/AllProducts";
import Cart from "./pages/Cart";
import TermsAndConditons from "./pages/TermsAndConditons";
import Footer from "./components/footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckOut from "./pages/checkout/CheckOut";
import Fish from "./pages/Fish";
import Meats from "./pages/Meats";
import Error from "./pages/Error";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/all-products" element={<AllProducts />} />
          <Route path="/shop/fruits" element={<Fruits />} />
          <Route path="/shop/vegetables" element={<Vegetables />} />
          <Route path="/shop/meats" element={<Meats />} />
          <Route path="/shop/fish" element={<Fish />} />
          <Route path="/pages/about" element={<AboutUs />} />
          <Route path="/pages/faq" element={<Faq />} />
          <Route
            path="/pages/terms&conditions"
            element={<TermsAndConditons />}
          />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/details" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}
