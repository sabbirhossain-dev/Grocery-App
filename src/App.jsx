// import {assets} from '../src/assets/assets'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Shop from './pages/Shop'
import Blogs from './pages/blogs/Blogs'
import BlogDetails from './pages/blogs/BlogDetails'
import Contact from './pages/contact/Contact'
import Navbar from './components/navbar/Navbar'
import AboutUs from './pages/about/AboutUs'
import Faq from './pages/faq/Faq'
import Fruits from './pages/fruits/Fruits'
import Vegetables from './pages/Vegetables'
import Cart from './pages/Cart'
import TermsAndConditons from './pages/TermsAndConditons'
import Footer from './components/footer/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/shop' element={<Shop />}/>
          <Route path='/shop/fruits' element={<Fruits />}/>
          <Route path='/shop/vegetables' element={<Vegetables />}/>
          <Route path='/pages/about' element={<AboutUs />}/>
          <Route path='/pages/faq' element={<Faq />}/>
          <Route path='/pages/terms&conditions' element={<TermsAndConditons />}/>
          <Route path='/blogs' element={<Blogs />}/>
          <Route path='/blogs/details' element={<BlogDetails />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/cart' element={<Cart />}/>

        </Routes>
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </>
  )
}