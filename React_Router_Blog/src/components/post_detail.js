import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {fetchSinglePost, deletePost} from "../actions";


class PostDetail extends Component{
	componentDidMount(){
		const {id} = this.props.match.params;
		this.props.fetchSinglePost(id);
	}

	onDeleteClick(){
		const {id} = this.props.match.params;
		this.props.deletePost(id, ()=>{
			this.props.history.push("/");
		});
	}

	render(){
		console.log("props.post: ", this.props.post);
		const {post} = this.props;

		if(!post){
			return <div>Loading...</div>
		}

		return (
			<div>
				<Link to="/">Back to Home</Link>
				<button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>
					Delete
				</button>
				<h3>{post.title}</h3>
				<h6>Category: {post.categories}</h6>
				<p>{post.content}</p>
			</div>
		);
	}
}

function mapStateToProps({posts}, ownprops){
	return { post: posts[ownprops.match.params.id]};
}

export default connect(mapStateToProps, {fetchSinglePost, deletePost})(PostDetail);





