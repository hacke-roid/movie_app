import React from "react";
import "./DisplaySearch.css";
import DetailFetchApi from "../DetailApi";
import { useNavigate } from "react-router-dom";
// import { FaStar } from "react-icons/fa";

const DisplaySearch = ({ data, onSearch }) => {
  const navigation = useNavigate();

  console.log(data);

  const handleClickDetail = async (tickers) => {
    console.log(tickers);
    navigation(`/overview/${tickers}`);
    // let detail = await DetailFetchApi(tickers)
    // console.log(detail)
    // onSearch(detail);
  };

  return (
    <div className="display_container">
      {data.map((m) => {
        return (
          <div className="display" onClick={() => handleClickDetail(m.imdbID)}>
            <h1>{m.Title}</h1>
            <div>
              <span>{m.Year}</span>
              <span> {m.Rated}</span>
              <span> {m.Released}</span>
            </div>
            <div className="img_container">
              <img src={m.Poster} alt="" className="Poster_img" />
            </div>
            <div>
              <p>{m.Plot}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplaySearch;
