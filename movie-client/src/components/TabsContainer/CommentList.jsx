import React from "react";
import CommentList from "../CommentList";
import Comment from "../Comment";

export default function CommentListTest({ commentList }) {
  return (
    <div className="row">
      {/* <!-- comments --> */}
      <div className="col-12">
        <CommentList>
          {commentList.map((comment) => {
            return <Comment {...comment} key={comment.id} />;
          })}
        </CommentList>
      </div>
      {/* <!-- end comments --> */}
    </div>
  );
}
