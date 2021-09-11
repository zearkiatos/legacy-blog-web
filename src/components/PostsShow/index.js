import React, { Component } from "react";
import { connect } from 'react-redux';
import { postActions } from "../../actions";
class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  helperFunction() {
    this.props.posts[this.props.match.params.id];
  }

  render() {
    return <div>Posts Show</div>;
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, {
  fetchPost: postActions.fetchPost,
})(PostsShow);
