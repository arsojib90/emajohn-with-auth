import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
        <span className="user">{user?.email}</span>
        {user?.uid ? (
          <button
            className="btn-logout"
            onClick={() => setTimeout(logOut, 2000)}
          >
            Sign Out
          </button>
        ) : (
          <>
            <Link to="/login" className="btn-login" id="login">
              Login
            </Link>
            {/* <Link to="/signup">Signup</Link> */}
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
