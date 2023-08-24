import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../Api/axios";

const DetailPage = () => {
  // let movieId = useParams().movieId
  let { movieId } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    async function fetchData() {
      const respense = await axios.get(`/movie/${movieId}`);

      setMovie(respense.data);
    }

    fetchData();
  }, [movieId]);
  if (!movie) return null;

  return (
    <section>
      <img
        className="modal__poster-img"
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="movieImage"
      />
    </section>
  );
};

export default DetailPage;
