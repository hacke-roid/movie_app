import React from "react";
import "./DisplaySearch.css";

const DisplaySearch = ({ data }) => {
  console.log(data);
  return (
    <div className="display_container">
      <div className="display">
        <h2>{data.Title}</h2>
        <span>{data.Year}</span>
        <span> . {data.Rated}</span>
        <span> . {data.Released}</span>

        <div>
          <img src={data.Poster} alt=""/>
        </div>
        <div>
          <p>{data.Plot}</p>
        </div>
        <div>
          {data.Ratings.map((m) => {
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
        <div>
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
        <div>
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
