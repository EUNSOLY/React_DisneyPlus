import React, { useRef, useState } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";

function MovieModal({
  modalOpen,
  backdrop_path,
  title,
  overview,
  name,
  first_air_date,
  release_date,
  vote_average,
  setModalOpen,
}) {
  const ref = useRef();
  useOnClickOutside(ref, () => {
    setModalOpen(false);
    console.log(modalOpen, "여긴Hook");
  });
  console.log(modalOpen, "여긴 모달창");
  return (
    <div className="presentation" role="presentation">
      <div className="wrapper-modal">
        <div className="modal" ref={ref}>
          <span
            className="modal-close"
            onClick={() => {
              setModalOpen(false);
            }}
          >
            X
          </span>
          <img
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt="modal__poster-img"
            className="modal__poster-img"
          />
          <div className="modal__content">
            <p className="modal__details">
              <span className="modal__user-perc">100% for you</span>
              {release_date ? release_date : first_air_date}
            </p>
            <h2 className="modal__title">{title ? title : name}</h2>
            <p className="modal__overview">평점 : {vote_average}</p>
            <p className="modal__overview">{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
