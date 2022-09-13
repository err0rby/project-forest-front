import { Route, Routes } from "react-router-dom";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import BeforeAfter from "./components/BeforeAfter/BeforeAfter";
import Home from "./components/Home/Home";
import Workers from "./components/Workers/Workers";
import ServiceMap from "./components/ServiceMap/ServiceMap";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/workers" element={<Workers/>}/>
      <Route path="/beforeafter" element={<BeforeAfter/>}/>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/service" element={<ServiceMap />} />
    </Routes>
  );
}

export default App;