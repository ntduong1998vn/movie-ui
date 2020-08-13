import React, { useState } from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import { connect } from 'react-redux'
import { addReview, getListReviews } from "../redux/review/actions"

function ReviewList({ movieId, reviews, ...props }) {
  const [reviewContent, setReviewContent] = useState("");
  const [reviewRate, setReviewRate] = useState("");

  function handleChange(e) {
    setReviewContent(e.target.value);
  }
  function handleRateChange(e) {
    setReviewRate(parseFloat(e))
  }
  function handleSubmit(event) {
    event.preventDefault();
    let reviewForm = {
      content: "",
      id: 0,
      movie_id: 0,
      user_id: 0,
      score: 0,
    }
    const {user} = props;
    // console.log(reviewRate)
    reviewForm.content = reviewContent;
    reviewForm.score = reviewRate;
    reviewForm.movie_id = movieId;
    reviewForm.user_id = user.id;
    // console.log(reviewForm)
    props.addReview(reviewForm)
    setTimeout(() => {
      props.getListReviews(6, 0, movieId, -1);
    }, 200)
  }
  // console.log(reviews)
  return (
    <div className="reviews">
      <ul className="reviews__list">
        <li className="reviews__item">
          {reviews !== undefined && reviews.map((review) => {
            return (
              <div className="reviews__autor">
                <img className="reviews__avatar" src={review.avatar} alt="" />
                <span className="reviews__time">{review.createAt} bởi {review.username}</span>

                <span className="reviews__rating">
                  <i className="icon ion-ios-star"></i>{review.score}
                </span>
                <p className="reviews__text">
                  {review.content}
                </p>
              </div>
            )
          })}
        </li>
      </ul>

      <form className="form" onSubmit={handleSubmit} >
        <textarea
          className="form__textarea"
          placeholder="Review"
          id="text"
          name="text"
          onChange={handleChange}
          value={reviewContent}
        ></textarea>
        <div className="form__slider">
          {/* <div className="form__slider-rating" id="slider__rating"></div> */}
          <Nouislider
            className="form__slider-rating"
            range={{ min: 0, max: 10 }}
            start={8.6}
            step={0.1}
            connect={[true, false]}
            onChange={handleRateChange}
          />
          <div className="form__slider-value" id="form__slider-value"></div>
        </div>
        <input type='submit' class="form__btn" value="Send">
        </input>
      </form>
    </div>
  );
}

const mapStateToProps = ({ reviewData, authUser }) => {
  const { reviews } = reviewData;
  const { user } = authUser;
  return { reviews, user }
}
export default connect(
  mapStateToProps,
  {
    addReview,
    getListReviews
  }
)(ReviewList);
