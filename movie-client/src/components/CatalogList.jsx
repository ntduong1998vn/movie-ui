import React, { useState, useEffect } from "react";
import DetailList from "../components/DetailList";
// import Paginator from "../components/Paginator";
import Pagination from '../components/Pagination';

import { getMovieByGenre } from "../redux/movie/actions";
import { connect } from "react-redux";

function CatalogList(props ) {
  const [currentPage, setCurrentPage] = useState(1)
  // console.log(props)
  useEffect(() => {
    fetchData(1);
  }, []);

  function fetchData(currentPage) {
    props.getMovieByGenre(2, currentPage)
  }
  function onChangePage(page) {
    setCurrentPage(page);
    fetchData(page-1)
  }
  // };
  const { movieByGenre,totalPages } = props;
  console.log(totalPages)
  return (
    <div className="catalog">
      <div className="container">
        <DetailList movieList={movieByGenre} />
        <Pagination
          currentPage={currentPage}
          totalPage={totalPages}
          onChangePage={i => onChangePage(i)}
        />
      </div>
    </div>
  );
}
const mapStateToProps = ({ movieData }) => {

  const { movieByGenre, totalPages } = movieData;
  return { movieByGenre,totalPages };
};

export default connect(
  mapStateToProps,
  {
    getMovieByGenre
  }
)(CatalogList);
// export default CatalogList;
