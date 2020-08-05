import React, { useRef } from "react";
// import PropTypes from "prop-types";
import SimpleCard from "./SimpleCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function HomeCarousel({ movies }) {
  const sliderEl = useRef(null);
  const settings = {
    // className: "slider variable-width",
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // variableWidth: true,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  function next() {
    sliderEl.current.slickNext();
  }

  function previous() {
    sliderEl.current.slickPrev();
  }


  return (
    <section className="home home--bg">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="home__title">
              <b>Phim mới</b> của mùa
            </h1>

            <button
              className="home__nav home__nav--prev"
              type="button"
              onClick={previous}
            >
              <i className="icon ion-ios-arrow-round-back"></i>
            </button>
            <button
              className="home__nav home__nav--next"
              type="button"
              onClick={next}
            >
              <i className="icon ion-ios-arrow-round-forward"></i>
            </button>
          </div>

          <div className="col-12">
            <Slider className="home__carousel" {...settings} ref={sliderEl}>
              {movies.map((movie) => {
                return <SimpleCard movie={movie} size="lg" key={movie.id}  />;
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

HomeCarousel.propTypes = {};

export default HomeCarousel;
