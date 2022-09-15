import { Navigate, Route, Routes } from "react-router-dom";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import BeforeAfter from "./components/BeforeAfter/BeforeAfter";
import Home from "./components/Home/Home";
import Headers from "./components/Headers/Headers";
import Workers from "./components/Workers/Workers";
import ServiceMap from "./components/ServiceMap/ServiceMap";
import { useSelector } from "react-redux";
import ServiceOne from "./components/ServiceOne/ServiceOne";
import ShopMap from "./components/ShopMap/ShopMap";
import AboutUs from "./components/AboutUs/AboutUs";
import Admin from "./components/Admin/Admin";
import styles from './components/ShopMap/ShopMap.module.css'
import ModalBuy from "./components/ModalBuy/ModalBuy";
import { useState } from "react";


function App() {
  const token = useSelector(state => state.applicationSlice.token);
  const [modal, setModal] = useState(false)

  if (token) {
    return (
      <>
        <ModalBuy modal={modal} setModal={setModal} />
        <Headers />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workers" element={<AboutUs />} />
          <Route path="/beforeafter" element={<BeforeAfter />} />
          <Route path="/signin" element={<Navigate to='/' />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/service" element={<ServiceMap />} />
          <Route path="/products" element={<ShopMap modal={modal} setModal={setModal} />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/service/:id" element={<ServiceOne />} />
        </Routes>
      </>
    );
  }
  return (
    <>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workers" element={<AboutUs />} />
        <Route path="/beforeafter" element={<BeforeAfter />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/service" element={<ServiceMap />} />
        <Route path="/service/:id" element={<ServiceOne />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/products" element={<ShopMap />} />
      </Routes>
    </>
  );
}

export default App;