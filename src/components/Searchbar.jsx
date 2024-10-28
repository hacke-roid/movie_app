import React, { useState } from "react";
import fetchWebApi from "../Api";
// import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
import LOGO from "../movie_app_logo.jpg";

const Searchbar = ({ onSearch }) => {
  const [inputText, setInputText] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let data = await fetchWebApi(inputText);
      
      console.log(data);
      onSearch(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <div className="container">
      <div className="logo_container">
        <img src={LOGO} onClick={handleLogoClick} alt="logo"></img>
      </div>
      <div className={`box ${isExpanded ? "expanded" : ""}`}>
        <form onSubmit={handleSubmit}>
          <div>
            {/* <FaSearch className="i" /> */}
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onFocus={() => setIsExpanded(true)}
              onBlur={() => setIsExpanded(false)}
              className={`input ${isExpanded ? "expanded" : ""}`}
            />
          </div>

          <div className="btn_search">
            <button type="submit" className="btn_submit">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Searchbar;
