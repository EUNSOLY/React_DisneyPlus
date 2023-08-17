import axios from "../Api/axios";
import React, { useCallback, useEffect, useState } from "react";
import MovieModal from "./MovieModal";

const Row = ({ title, id, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});
  const fetchMovieData = useCallback(async () => {
    const response = await axios.get(fetchUrl);
    setMovies(response.data.results);
  }, [fetchUrl]);

  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData]);
  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelected(movie);
    console.log(movie, "무비쓰");
    console.log(modalOpen, "여긴row");
  };
  return (
    <div>
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider__arrow-left">
          <span
            className="arrow"
            onClick={() => {
              document.getElementById(id).scrollLeft -= window.innerWidth;
            }}
          >
            {"<"}
          </span>
        </div>
        <div id={id} className="row__posters">
          {movies.map((movie) => {
            return (
              <img
                key={movie.id}
                className="row__poster"
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.name}
                onClick={() => handleClick(movie)}
              />
            );
          })}
        </div>
        <div className="slider__arrow-right">
          <span
            className="arrow"
            onClick={() => {
              document.getElementById(id).scrollLeft += window.innerWidth - 80;
            }}
          >
            {">"}
          </span>
        </div>
      </div>
      {modalOpen && (
        <MovieModal
          modalOpen={modalOpen}
          {...movieSelected}
          setModalOpen={setModalOpen}
        />
      )}
    </div>
  );
};

export default Row;
