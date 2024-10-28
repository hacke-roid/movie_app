import React from "react";
import "./DisplaySearch.css";
// import { FaStar } from "react-icons/fa";

const DisplaySearch = ({ data, Rating }) => {
  console.log(Rating);

  return (
    <div className="display_container">
      <div className="display">
        <h1>{data.Title}</h1>
        <div>
          <span>{data.Year}</span>
          <span> {data.Rated}</span>
          <span> {data.Released}</span>
        </div>
        <div className="img_container">
          <img src={data.Poster} alt="" className="Poster_img" />
        </div>
        <div>
          <p>{data.Plot}</p>
        </div>
        <div className="rating_container">
          {Rating >= 7
            ? data.Ratings.map((m) => {
                return (
                  <div>
                    <span key={m.Source}>
                      {m.Source} -{" "}
                      {" "}
                      {m.Value}
                    </span>
                  </div>
                );
              })
            : data.Ratings.map((m) => {
                return (
                  <span key={m.Source}>
                    {m.Source} - {m.Value}
                  </span>
                );
              })}
        </div>

        <div className="director_container">
          <h3>
            Director{" "}
            {data.Director.split(" ").map((director) => {
              return (
                <a href={director} key={director}>
                  {director}
                </a>
              );
            })}
          </h3>
        </div>
        <div className="stars_container">
          <h3>
            Stars{" "}
            {data.Actors.split("").map((actor, index) => {
              return (
                <a href={actor} key={index}>
                  {actor}
                </a>
              );
            })}
          </h3>
        </div>
        <div className="writers_container">
          <h3>
            Writers{" "}
            {data.Writer.split("").map((writer) => {
              return (
                <a href={writer} key={writer}>
                  {writer}
                </a>
              );
            })}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default DisplaySearch;
