/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { storage } from "../constants/firebase";

SimpleCard.defaultProps = {
  movie: {
    adults: 0,
    genres: [],
    imdb: 0,
    languages: "",
    nation: "",
    overview: "",
    popularity: 0,
    poster: "",
    quality: "",
    release_date: "",
    runtime: 0,
    title: "",
    view: 0,
  },
};
function SimpleCard({ movie, size = "normal" }) {
  const refImage = useRef(null);

  useEffect(() => {
    fetchImage();
  }, []);
  // console.log(movie)
  function fetchImage() {
    let pathReference = storage.refFromURL(
      "gs://movie-app-d4c77.appspot.com/poster"
    );
    let starsRef = pathReference.child(`${movie.poster}`);
    // console.log(starsRef)
    starsRef
      .getDownloadURL()
      .then((url) => {
        // let img = document.querySelector(".avatar");
        // img.src = url;
        refImage.current.src = url;
      })
      .catch((error) => {
        switch (error.code) {
          case "storage/object-not-found":
            break;

          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;

          case "storage/canceled":
            // User canceled the upload
            break;

          case "storage/unknown":
            // Unknown error occurred, inspect the server response
            break;

          default:
            break;
        }
      });
  }
  return (
    <div className={`card ${size === "lg" ? "card--big" : null}`}>
      <div className="card__cover">
        <img className="avatar" alt="" ref={refImage} />
        <Link
          to={{
            pathname: `/movie/${movie.id}`,
          }}
          className="card__play"
        >
          <i className="icon ion-ios-play"></i>
        </Link>
      </div>
      <div className="card__content">
        <h3 className="card__title">
          <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
        </h3>
        <span className="card__category">
          {movie.genres.map((genre) => {
            return (
              // <Link to = {`genre/${genre.name}/1`}>{genre.name}</Link>
              <Link
                to={{
                  pathname: `/genre/${genre.name}/1`,
                  // search: "?sort=name",
                  state: { genre: genre },
                }}
              >
                {genre.name}
              </Link>
            );
          })}
        </span>
        <span className="card__rate">
          <i className="icon ion-ios-star"></i>
          {movie.imdb}
        </span>
      </div>
    </div>
  );
}

SimpleCard.prototype = {
  movie: PropTypes.object.isRequired,
  size: PropTypes.string,
};

// MovieCard.defaultProps = {};

export default SimpleCard;
