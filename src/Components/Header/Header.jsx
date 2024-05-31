import React, { useEffect } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../../Context/contextProvider";
import { auth } from "../../firebase";
import SearchInput from ".././SearchInput/SearchInput";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
      dispatch({
        type: "EMPTY_BASKET",
      });
    }
  };

  return (
    <div className="header">
      <Link to="/" className="link">
        <img
          className=" header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="header__search">
        <SearchInput />

        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/Login"} className="link">
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello {user ? user?.email : "Guest"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to={user ? "/orders" : "/login"} className="link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout" className="link">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
