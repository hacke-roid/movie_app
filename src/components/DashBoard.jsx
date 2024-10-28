import React, { useEffect, useState } from "react";
import "./DashBoard.css";

const DashBoard = ({onClick}) => {
  const [movies, setMovies] = useState([]);

  const getRandomKeyword = () => {
    const keywords = [
      "Interstellar",
      "cars",
      "top gun",
      "namaste london",
      "Baahubali",
      "home alone",
      "3 idiots",
      "red",
      "Ad Astra",
      "Greenland",
    ];
      let a= keywords.map(element => {
            console.log(element)
        });
        console.log(a)
    // console.log(a)
    return keywords[Math.floor(Math.random() * keywords.length)];
  };

  const fetchDashBoard = async () => {
    const fetchedMovies = new Set();

    while (fetchedMovies.size < 10) {
      const keyword = getRandomKeyword();
    //   console.log(keyword);
      // console.log(a)
      let response = await fetch(
        `http://www.omdbapi.com/?t=${keyword}&apikey=1e2cd287`
      );
      let data = await response.json();

      if (data && data.Response !== "False") {
        fetchedMovies.add(data);
      }
    }

    const shuffledMovies = Array.from(fetchedMovies).sort(
      () => Math.random() - 1
    );

    setMovies(shuffledMovies);
  };

  useEffect(() => {
    fetchDashBoard();
  }, []);

  const handleCLickTitle = (tickers) => {
    console.log(tickers);
    onClick(tickers);
  };

  return (
    <div>
      {/* <h1>Dashboard</h1> */}
      <div className="dashboard-container">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="dashboard_movie_container"
            onClick={() => handleCLickTitle(movie.Title)}
          >
            <h2>{movie.Title}</h2>
            <p>{movie.Year}</p>
            <img
              src={movie.Poster}
              alt={`${movie.Title} Poster`}
              className="dashboard_img"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashBoard;
