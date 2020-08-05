import React, { useEffect } from "react";
import HomeCarousel from "../components/HomeCarousel";
import { TabItem, Tabs } from "../components/CustomTabs";
import GridList from "../components/GridList";
import DetailList from "../components/DetailList";
// import { detailList, gridList, SimpleCards, movie } from "../../data";
import { getListMovies } from "../redux/movie/actions";
import { connect } from "react-redux";

function HomePage(props) {
  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    props.getListMovies(6,1,"","")
  }
  const {movies} = props;
  return (
    <React.Fragment>
      <HomeCarousel movies={movies} />
      <Tabs activeTab="Bản phát hành mới">
        <TabItem label="Bản phát hành mới">
          <DetailList movieList={movies} />
        </TabItem>
        <TabItem label="Phim Lẻ">
          <GridList movieList={movies} />
        </TabItem>
        <TabItem label="Phim Dài Tập">
          <GridList movieList={movies} />
        </TabItem>
        <TabItem label="Phim Hoạt Hình">
          <GridList movieList={movies} />
        </TabItem>
      </Tabs>
    </React.Fragment>
  );
}

HomePage.propTypes = {};
const mapStateToProps = ({  movieData }) => {
  const { movies } = movieData;
  return { movies };
};

export default connect(
  mapStateToProps,
  {
    getListMovies
  }
)(HomePage);
