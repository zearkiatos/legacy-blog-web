import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { postActions } from "../../actions";

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  renderPosts() {
    const posts = Object.values(this.props.posts);
    return posts.map((post) => {
      return (
        <li key={post.id} className="list-group-item">
          {post.title}
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">{this.renderPosts()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

export default connect(mapStateToProps, { fetchPosts: postActions.fetchPosts })(
  PostsIndex
);
