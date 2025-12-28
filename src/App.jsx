import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import FindDoctor from "./pages/FindDoctor";
import DoctorDetails from './pages/DoctorDetails';
import Appointments from './pages/Appointments';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      Test
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/find-doctor" element={<FindDoctor />} />
        <Route path="/doctor/:id" element={<DoctorDetails />} />
        <Route path="/appointments" element={<Appointments />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
