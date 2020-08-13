import React, { useState, useEffect } from "react";
import DetailList from "../components/DetailList";
// import Paginator from "../components/Paginator";
import Pagination from '../components/Pagination';
import { getMovieByGenre,getMovieByKeyword } from "../redux/movie/actions";
import { connect } from "react-redux";

function CatalogList(props ) {
  const {keyword} = props
  const [currentPage, setCurrentPage] = useState(1)
  // console.log(props)
  useEffect(() => {
    fetchDataByKeyword(0);
 
    // let str = props.location.pathname
    // let res = str.replace('/tim-kiem/','')
    // console.log(res);

  }, [keyword]);


  // function fetchDataByGenre(currentPage) {
  //   props.getMovieByGenre(6, currentPage)
  //   // window.location.reload();
  // }

   function fetchDataByKeyword(currentPage) {
     console.log(currentPage)
     props.getMovieByKeyword(currentPage,keyword)
   }

  function onChangePage(page) {
    setCurrentPage(page);
    fetchDataByKeyword(page-1)
  } 
  
  // };
  const { movieBySearches,totalPages } = props;
  return (
    <div className="catalog">
      <div className="container">
        <DetailList movieList={movieBySearches} />
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

  const { movieBySearches, totalPages, keyword } = movieData;
  return { movieBySearches,totalPages, keyword};
};

export default connect(
  mapStateToProps,
  {
    getMovieByGenre,
    getMovieByKeyword
  }
)(CatalogList);
// export default CatalogList;
