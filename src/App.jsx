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


function App() {
  const token = useSelector(state => state.applicationSlice.token);

  if (token) {
    return (
      <Routes>
        <Headers />
        <Route path="/" element={<Home />} />
        <Route path="/workers" element={<Workers />} />
        <Route path="/beforeafter" element={<BeforeAfter />} />
        <Route path="/signin" element={<Navigate to={<Home />} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/service" element={<ServiceMap />} />
      </Routes>
    );
  }
  return (
    <Routes>
      <Headers />
      <Route path="/" element={<Home />} />
      <Route path="/workers" element={<Workers />} />
      <Route path="/beforeafter" element={<BeforeAfter />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/service" element={<ServiceMap />} />
      <Route path="/service/:id" element={<ServiceOne />}/>
    </Routes>
  );
}

export default App;