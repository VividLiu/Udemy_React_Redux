import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {createPost} from "../actions/index";


class PostsNew extends Component{
	renderField(field){
		//meta = field.meta
		//touched = meta.touched
		//error = meta.error
		//const {meta: {touched, error}} = field;
		const meta = field.meta;
		const touched = meta.touched;
		const error = meta.error;
		const className = `form-group ${touched && error ? ' has-danger' : ''}`;
		//const className = "has-danger";

		return (
			<div className={className}>
				<label>{field.label}</label>
				<input className="form-control" type="text" {...field.input} />
				<div className="text-help">
					{field.meta.touched ? field.meta.error : ""}
				</div>
			</div>
		);
	}

	onFormSubmit(values){
		console.log("Submiting form...");
		this.props.createPost(values, ()=>{
			this.props.history.push("/");
		});
	}

	render(){
		const {handleSubmit} = this.props;

		return (
			<div>
				<form onSubmit={handleSubmit(this.onFormSubmit.bind(this))} >
					<Field label="Title" name="title" component={this.renderField} />
					<Field label="Categories" name="categories" component={this.renderField} />
					<Field label="Content" name="content" component={this.renderField} />
					<button type="submit" className="btn btn-primary">Submit</button>
					<Link to="/" className="btn btn-danger">Cancel</Link>
				</form>
			</div>
		);
	}
}

function validate(values){
	//ex. values: {title: 'addfd', category: 'adfdd', content: 'dfdf'}
	const error = {};

	if(!values.title){
		error.title = "Enter a title";
	}
	if(!values.categories){
		error.categories = "Enter some categories";
	}
	if(!values.content){
		error.content = "Enter some content";
	}

	//if error object is an empty object, the form will submit successfully
	//if the error object has *any* properties, the form will not submit
	return error;
}

//reduxForm binds some props automatically to the component PostsNew, 
//similar to what connect do
export default reduxForm({
	validate,
	form: "PostsNewForm"
})(
	connect(null, {createPost})(PostsNew)
);