import React, { useEffect, useState } from "react";
import "./DetailOverview.css";
import { useParams } from "react-router-dom";

const DetailOverview = () => {
  // console.log(data);
  const [data, setData] = useState({});
  const { eid } = useParams();
  console.log(eid);
  console.log(data.Ratings)
  const getMovie = async (e) => {
    console.log("inside get movie");
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?i=${eid}&apikey=1e2cd287`
      );
      const datas = await response.json();
      console.log(datas);
      setData(datas);
    } catch (error) {
      console.error("Failed to fetch movie:", error);
    }
  };

  useEffect(() => {
    getMovie();
  },[]);

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
            {data.Ratings?.map((m) => (
              <span>
                {m.Source} - {m.Value}
              </span>
            ))}
          </div>
          <div className="director_container">
            <h3>
              Director{" "}
              {data.Director?.split(" ").map((director) => (
                <a href={director} key={director}>
                  {director},
                </a>
              ))}
            </h3>
          </div>
          <div className="stars_container">
            <h3>
              Stars{" "}
              {data.Actors?.split(", ").map((actor, index) => (
                <a href={actor} key={index}>
                  {actor},
                </a>
              ))}
            </h3>
          </div>
          <div className="writers_container">
            <h3>
              Writers{" "}
              {data.Writer?.split(", ").map((writer) => (
                <a href={writer} key={writer}>
                  {writer},
                </a>
              ))}
            </h3>
          </div>  
        </div>
      </div>
    </div>
  );
};

export default DetailOverview;
