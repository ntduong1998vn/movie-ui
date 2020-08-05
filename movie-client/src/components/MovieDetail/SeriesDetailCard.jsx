import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import classNames from "classnames";

SeriesDetailCard.defaultProps = {
  single: true,
};

SeriesDetailCard.prototype = {
  single: PropTypes.bool,
  movie: PropTypes.object,
};

function SeriesDetailCard({ single, movie }) {
  return (
    <React.Fragment>
      {/* <!-- title --> */}
      <Col xs={12}>
        <h1 className="details__title">{movie.title}</h1>
      </Col>
      {/* <!-- end title --> */}

      {/* <!-- content --> */}
      <div
        className={classNames({
          "col-12 col-xl-6": single,
          "col-10": !single,
        })}
      >
        <div
          className={classNames({
            "card card--details": true,
            "card--series": !single,
          })}
        >
          <Row>
            {/* <!-- card cover --> */}
            <div
              className={classNames({
                "col-12 col-sm-4 col-md-4 col-lg-3": true,
                "col-xl-5": single,
                "col-xl-3": !single,
              })}
            >
              <div className="card__cover">
                <img src={movie.poster} alt="" />
              </div>
            </div>
            {/* <!-- end card cover --> */}

            {/* <!-- card content --> */}
            <div
              className={classNames({
                "col-12 col-sm-8 col-md-8 col-lg-9": true,
                "col-xl-7": single,
                "col-xl-9": !single,
              })}
            >
              <div className="card__content">
                <div className="card__wrap">
                  <span className="card__rate">
                    <i className="icon ion-ios-star"></i>
                    {movie.imdb}
                  </span>

                  <ul className="card__list">
                    <li>{movie.resolution}</li>
                    <li>{movie.limitAge}</li>
                  </ul>
                </div>

                <ul className="card__meta">
                  <li>
                    <span>Genre:</span>
                    {movie.genres.map((genre) => {
                      return <a href="#">{genre}</a>;
                    })}
                  </li>
                  <li>
                    <span>Release year:</span> {movie.release}
                  </li>
                  <li>
                    <span>Running time:</span> {`${movie.time} min`}
                  </li>
                  <li>
                    <span>Country:</span> <a href="#">{movie.country}</a>{" "}
                  </li>
                </ul>

                <div className="card__description card__description--details">
                  {movie.desc}
                </div>
              </div>
            </div>
            {/* <!-- end card content --> */}
          </Row>
        </div>
      </div>
      {/* <!-- end content --> */}
    </React.Fragment>
  );
}

export default SeriesDetailCard;
