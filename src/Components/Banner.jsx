import React, { useEffect, useState } from "react";
import axios from "../Api/axios";
import requests from "../Api/requests";
import { styled } from "styled-components";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const [isClick, setIsClick] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    //현재 상영중인 영화 정보를 가져오기(여러영화)
    const response = await axios.get(requests.fetchNowPlaying);
    // 여러 영화중 영화 하나의 ID가져오기
    const movieId =
      response.data.results[
        Math.floor(Math.random() * response.data.results.length)
      ].id;
    // 특정 영화 상세 정보 가져오기(비디오 정보 포함)
    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: { append_to_response: "videos" },
    });
    console.log(movieDetail);
    setMovie(movieDetail);
  };
  const truncate = (str, n) => {
    return str?.length > n ? str.substring(0, n) + "..." : str;
  };
  if (isClick) {
    return (
      <>
        <Container>
          <HomeContainer>
            <Iframe
              src={`http://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
              width="640"
              height="360"
              allow="autoplay; fullscreen"
            ></Iframe>
          </HomeContainer>
        </Container>
        <Button onClick={() => setIsClick(false)}> X </Button>
      </>
    );
  } else {
    return (
      <header
        className="banner"
        style={{
          backgroundImage: `url("http://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie.title || movie.name || movie.original_name}
          </h1>
          <div className="banner__buttons">
            {movie?.videos?.results[0]?.key && (
              <button
                className="banner__button play"
                onClick={() => setIsClick(true)}
              >
                Play
              </button>
            )}
          </div>
          <p className="banner__description">{truncate(movie.overview, 100)}</p>
        </div>
        <div className="banner--fadeBottom" />
      </header>
    );
  }
};

export default Banner;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;
const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.65;
  border: none;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Button = styled.button`
  border: none;
  outline: none;
  background-color: #fff;
  color: black;
  font-weight: 500;
  padding: 0.25rem 1.25rem;
  cursor: pointer;
`;
