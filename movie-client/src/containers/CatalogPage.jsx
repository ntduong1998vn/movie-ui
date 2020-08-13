import React, { useEffect } from "react";
import PageTitle from "../components/PageTitle";
import FilterMovie from "../components/FilterMovie";

import { qualities as qualityList } from "../constants/const";
import CatalogList from "../components/CatalogList";
import { getListGenres } from "../redux/genre/actions";
import { getListMovies, getMovieByGenre } from "../redux/movie/actions";
import { connect } from "react-redux";

function CatalogPage(props) {
  useEffect(() => {
    fetchData();
  }, []);

  function searchMovie(searchTerm) {
    // axios.get(`${apiPath/movie/advanced?=}`)
    console.log(searchTerm);
  }

  function fetchData() {
    props.getListGenres("", "");
    // props.getListMovies(6,1,"","")
    // props.getMovieByGenre(6, 0);
  }
  const { genres} = props;

  return (
    <React.Fragment>
      <PageTitle title="Tìm Kiếm" location="Tìm Kiếm" />
      <FilterMovie
        qualities={qualityList}
        genreList={genres}
        onSearch={searchMovie}
      />
      <CatalogList />
    </React.Fragment>
  );
}

CatalogPage.propTypes = {};
const mapStateToProps = ({ genreData, movieData }) => {
  const { genres } = genreData;
  const { movieByGenre } = movieData;
  return { genres, movieByGenre };
};

export default connect(mapStateToProps, {
  getListGenres,
  getListMovies,
  getMovieByGenre,
})(CatalogPage);
