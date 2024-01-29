import React, { useEffect, useState } from 'react';
import Request from '../Services/requests';
import axios from '../Services/axios';
import "./Banner.css";

function Banner() {
  const [movies, setMovies] = useState([]);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(Request.fetchNetflixOriginals);
      const randomMovie =
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ];
      setMovies(randomMovie);
    }

    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`banner ${showNavbar ? 'scrolled' : ''}`}
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
        backgroundPosition: 'center center',
      }}
    >
      <div className='banner_contents'>
        <h1 className='banner_title'>
          {movies?.name || movies?.title || movies?.original_name}
        </h1>
        <div className='banner_buttons'>
          <button className='banner_button'>Play</button>
          <button className='banner_button'>My List</button>
        </div>
        <h3 className='banner_desc'>{movies?.overview}</h3>
      </div>
    </header>
  );
}

export default Banner;
