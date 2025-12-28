import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar-custom">
      <div className="container">
        <div className="row align-items-center">

          <Link to='/' className="col logo-area">
            <img src="/logo.png" className="logo-img" />
            <span className="logo-text">HealthWave Tech</span>
          </Link>

          <div className="col nav-links">
            <Link to="/">Home</Link>
            <Link to="/find-doctor">Find a Doctor</Link>
            <Link to="/appointments">Appointments</Link>
            <Link to="/about">About</Link>
            <Link to="/login" className="login-btn">Login</Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
