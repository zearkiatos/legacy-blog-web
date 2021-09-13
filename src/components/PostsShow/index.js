import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { postActions } from "../../actions";
class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  render() {
    const { post } = this.props;
    if (post) {
      return (
        <div>
          <Link to="/">Back to Index</Link>
          <h3>{post.title}</h3>
          <h6>Categories: {post.categories}</h6>
          <p>{post.content}</p>
        </div>
      );
    }

    return <div>Loading...</div>;
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, {
  fetchPost: postActions.fetchPost,
})(PostsShow);
