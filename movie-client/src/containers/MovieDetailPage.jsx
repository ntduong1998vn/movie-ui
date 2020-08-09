import React, { useEffect } from "react";
import { SeriesMovie } from "../components/MovieDetail";
import CommentList from "../components/CommentList";
import ReviewList from "../components/ReviewList";
import { Tabs, TabItem } from "../components/CustomTabs";
import Comment from "../components/Comment";
import Gallery from "../components/TabsContainer/Gallery";

import { getMovieByID } from "../redux/movie/actions";
import { getListComments } from "../redux/comment/actions";
import { getListReviews } from "../redux/review/actions";
import { getListEpisodes } from "../redux/episode/actions";

import { connect } from "react-redux";

function MoveDetailPage(props) {
  const movieId = props.match.params.id;

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    props.getMovieByID(movieId);
    props.getListComments(6, 0, movieId, -1);
    props.getListReviews(6, 0, movieId, -1);
    props.getListEpisodes(movieId);
  }

  const { comments, reviews } = props;
  return (
    <React.Fragment>
      {/* <SingleMovie movie={movie} /> */}
      <SeriesMovie />
      {/* <TabsContainer commentList={comments} sideCards={detailList} /> */}
      <Tabs activeTab="Comments">
        <TabItem label="Comments">
          <CommentList movieId={movieId}>
            {comments.map((comment) => {
              return <Comment {...comment} key={comment.id} />;
            })}
          </CommentList>
        </TabItem>
        <TabItem label="Review">
          <ReviewList movieId={movieId} reviews={reviews} />
        </TabItem>
        <TabItem label="Photo">
          <Gallery />
        </TabItem>
      </Tabs>
    </React.Fragment>
  );
}

const mapStateToProps = ({
  movieData,
  commentData,
  episodeData,
  reviewData,
}) => {
  const { movie } = movieData;
  const { episodes } = episodeData;
  const { comments } = commentData;
  const { reviews } = reviewData;
  return { movie, episodes, comments, reviews };
};
export default connect(mapStateToProps, {
  getMovieByID,
  getListComments,
  getListReviews,
  getListEpisodes,
})(MoveDetailPage);
