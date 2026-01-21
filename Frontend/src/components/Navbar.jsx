import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/userContext";
import "../Css/Navbar.css";

const Navbar = () => {
  const { total } = useCart();
  const { token, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-3 p-0">
      <div className="d-flex align-items-center gap-2">
    <img
      src="../src/assets/img/logo-full-fishing.png"
      alt="Logo Full Fishing"
      className="navbar-logo"
    />
    <span className="navbar-brand fw-bold m-0">
      FULL FISHING
    </span>
  </div>
      <div>
        <Link to="/" className="btn btn-secondary mx-1">
          🏠 Home
        </Link>

        {token ? (
          <>
            <Link to="/profile" className="btn btn-secondary mx-1">
              🔓 Profile
            </Link>
            <button onClick={handleLogout} className="btn btn-danger mx-1">
              🔒 Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-secondary mx-1">
              🔐 Login
            </Link>
            <Link to="/register" className="btn btn-secondary mx-1">
              🔐 Register
            </Link>
          </>
        )}

        <Link to="/cart" className="btn btn-success mx-1">
          🛒 Total: ${total.toLocaleString()}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
