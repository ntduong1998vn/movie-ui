import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

function Comment({ avatar, username, time, content, like, dislike, answer }) {
  let commentClass = classNames({
    comments__item: true,
    "comments__item--answer": answer,
  });

  return (
    <li class={commentClass}>
      <div class="comments__autor">
        <img class="comments__avatar" src={avatar} alt="" />
        <span class="comments__name">{username}</span>
        <span class="comments__time">{time}</span>
      </div>
      <p class="comments__text">{content}</p>
      <div class="comments__actions">
        <div class="comments__rate">
          <button type="button">
            <i class="icon ion-md-thumbs-up"></i>
            {like}
          </button>

          <button type="button">
            {dislike}
            <i class="icon ion-md-thumbs-down"></i>
          </button>
        </div>

        <button type="button">
          <i class="icon ion-ios-share-alt"></i>Reply
        </button>
        <button type="button">
          <i class="icon ion-ios-quote"></i>Quote
        </button>
      </div>
    </li>
  );
}

Comment.prototype = {
  username: PropTypes.string.isRequired,
  time: PropTypes.string,
  content: PropTypes.string.isRequired,
  like: PropTypes.number,
  dislike: PropTypes.number,
  answer: PropTypes.bool,
};

Comment.defaultProps = {
  time: "1-1-1990",
  content: "",
  like: 0,
  dislike: 0,
  answer: false,
};

export default Comment;
