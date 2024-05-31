import React from "react";
import { useStateValue } from "../.././Context/contextProvider";
import "./SearchInput.css";

function SearchInput() {
  const [, dispatch] = useStateValue();

  const handleInputChange = (event) => {
    dispatch({ type: "SET_SEARCH_QUERY", payload: event.target.value });
  };

  return (
    <input
      className="header__searchInput"
      type="text"
      placeholder="Search products"
      onChange={handleInputChange}
    />
  );
}

export default SearchInput;
