import { Route, Routes } from 'react-router-dom';
import Header from "../header/Header";
import Register from "./Register";
import Login from "./Login";
import Welcome from './Welcome';
import Product from './Product';
import Order from './Order';
import Footer from '../footer/Footer';

const Home = () => {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Welcome" element={<Welcome />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Order" element={<Order />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default Home;

