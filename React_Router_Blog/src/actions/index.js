import axios from "axios";

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY  = "key=vivid1234";

export const FETCH_POSTS = "FETCH_POSTS";
export const CREATE_POST = "CREATE_POST";
export const FETCH_SINGLE_POST = "FETCH_SINGLE_POST";
export const DELETE_POST = "DELETE_POST";

export function fetchPosts(){
	const request = axios.get(`${ROOT_URL}/posts?${API_KEY}`);
	console.log("requesting posts...");
	return {
		type: FETCH_POSTS,
		payload: request
	};
}

export function createPost(values, callback){
	console.log("sending post...");
	const request = axios.post(`${ROOT_URL}/posts?${API_KEY}`, values)
					.then(()=>callback());
	return {
		type: CREATE_POST,
		payload: request
	}
}

export function fetchSinglePost(id){
	console.log("requesting single post...");
	const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

	return {
		type: FETCH_SINGLE_POST,
		payload: request
	}
}

export function deletePost(id,callback){
	console.log("deleting a post...");

	const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
					.then(()=>callback());	

	return {
		type: DELETE_POST,
		payload: id
	}
}



