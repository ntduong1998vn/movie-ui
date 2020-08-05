import React from "react";
import { connect } from "react-redux";
import { addComment,getListComments } from "../redux/comment/actions"
class CommentList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      commentContent: '',
      commentForm: {
        content: "",
        id: 0,
        movie_id: 0,
        user_id: 0,
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(e) {
    this.setState({ commentContent: e.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    // console.log("You are submitting " + this.state.commentContent);
    const {commentForm} = this.state;
    const movieId = parseInt(this.props.movieId);

    commentForm.content = this.state.commentContent;
    commentForm.movie_id = movieId;
    commentForm.user_id = 2;
    this.props.addComment(commentForm);
    setTimeout(() => {
      this.props.getListComments(6, 0, movieId, -1);
    },200)
  } 
  
  render() {
    return (
      <div>
        <div class="comments">
          <ul class="comments__list">
            {this.props.children}
          </ul>
          <form onSubmit={this.handleSubmit} class="form">
            <textarea
              id="text"
              name="text"
              class="form__textarea"
              placeholder="Add comment"
              onChange={this.handleChange}
              value={this.state.commentContent}
            ></textarea>
            <input type='submit' class="form__btn" value="Send">
            </input>
          </form>
        </div>
      </div>
    );
  }

}
const mapStateToProps =({  commentData }) => {
  const { comments } = commentData;
  return comments
}
export default connect(
  mapStateToProps,
  {
    addComment,
    getListComments,
  }
)(CommentList);
