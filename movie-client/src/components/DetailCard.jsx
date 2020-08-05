import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { storage } from "../constants/firebase";

DetailCard.defaultProps = {
  movie: {
    adult: 0,
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
function DetailCard({ movie }) {
  const refImage = useRef(null);

  useEffect(() => {
    fetchImage();
  }, [movie]);

  // console.log(movie);

  function fetchImage() {
    let pathReference = storage.refFromURL(
      "gs://movie-app-d4c77.appspot.com/poster"
    );
    let starsRef = pathReference.child(`${movie.poster}`);
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
    <div className="card card--list">
      <div className="row">
        <div className="col-12 col-sm-4">
          <div className="card__cover">
            <img className="avatar" alt="" ref={refImage} />
            <Link
              to={{
                pathname: `/movie/${movie.id}/dadas`,
                search: "?search=25",
              }}
              className="card__play"
            >
              <i className="icon ion-ios-play"></i>
            </Link>
          </div>
        </div>

        <div className="col-12 col-sm-8">
          <div className="card__content">
            <h3 className="card__title">
              <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
            </h3>
            <span className="card__category">
              {movie.genres &&
                movie.genres.map((genre) => {
                  return (
                    <Link
                      to={{
                        pathname: `/genre/${genre.name}/1`,
                        // search: "?sort=name",
                      }}
                    >
                      {genre.name}
                    </Link>
                  );
                })}
            </span>

            <div className="card__wrap">
              <span className="card__rate">
                <i className="icon ion-ios-star"></i>
                {movie.imdb}
              </span>

              <ul className="card__list">
                <li>{movie.quality}</li>
                {movie.adult === 0 ? null : <li>{`${movie.adult}+`}</li>}
              </ul>
            </div>

            <div className="card__description">
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailCard;
