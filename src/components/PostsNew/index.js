import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { postActions } from "../../actions";

class PostsNew extends Component {
  renderField(field) {
    const {
      meta: { touched, error },
      input,
      label,
    } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input className="form-control" type="text" {...input} />
        <div className="text-help">{touched ? error : ""}</div>
      </div>
    );
  }
  onSubmit(values) {
    this.props.createPost(values, () => this.props.history.push("/"));
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title For Post"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/" className="btn btn-danger ml-5">
          Cancel
        </Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  // Validate the inputs from 'values'
  if (!values.title) errors.title = "Enter a title!";

  if (!values.categories) errors.categories = "Enter some categories";

  if (!values.content) errors.content = "Enter some content please";

  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: "PostsNewForm",
})(connect(null, { createPost: postActions.createPost })(PostsNew));
