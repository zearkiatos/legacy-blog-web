import React, { Component } from "react";
import { connect } from "react-redux";
import { postActions } from "../../actions";

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    return <div>Posts Index</div>;
  }
}

export default connect(null, { fetchPosts: postActions.fetchPosts })(
  PostsIndex
);
