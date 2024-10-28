import React from "react";
// import "./DisplaySearch.css";
// import { FaStar } from "react-icons/fa";
import "./DetailOverview.css";

const DetailOverview = ({ data }) => {
  //   console.log(Rating);
  console.log(data);

  return (
    <div className="contain">

      <h1>Overview of movie</h1>
      <div className="detail_container">
        <div className="detail_display">
          <h1>{data.Title}</h1>
          <div>
            <span>{data.Year}</span>
            <span> {data.Rated}</span>
            <span> {data.Released}</span>
          </div>
          <div className="container_img">
            <img src={data.Poster} alt="" className="Poster_img1" />
          </div>
          <div>
            <p>{data.Plot}</p>
          </div>
          <div className="rating_container">
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
    </div>
  );
};

export default DetailOverview;
