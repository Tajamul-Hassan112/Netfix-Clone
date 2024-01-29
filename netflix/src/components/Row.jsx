import React, { useEffect, useState } from 'react';
import './Row.css';
import axios from "../Services/axios";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  // Asynchronous function to fetch movies data
  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request;
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }
    fetchData();
  }, [fetchUrl]);

  // Configuration for the YouTube player
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  // Function to handle clicking on a movie poster
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl(""); // Clear the trailer URL if a trailer is already playing
    } else {
      movieTrailer(movie?.title || "", { tmdbId: movie.id })
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch(error => {
          console.error("Error fetching trailer:", error);
        });
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies?.map(movie => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${baseUrl}${isLargeRow ? movie?.poster_path : movie?.backdrop_path}`}
            alt={movie.title}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
