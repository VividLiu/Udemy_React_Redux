import React, {Component} from "react";


class SearchBar extends Component{
	constructor(props){
		super(props);

		//initialize state
		this.state = {user_input: ""};
	}

	render(){
		//version 1: pass handler to property
		//return <input onChange={this.onInputChange}/>;

		//version 2: ES6 syntax
		return (
			<div>
				<input 
				value={this.state.user_input}
				onChange={(e)=>{this.onInputChange(e.target.value)}} />
			</div>
		);

	}

	//event handler
	onInputChange(term){
		this.setState({user_input: term});
		this.props.onSearch(term);
	}
}

/*
//version 3: using functional component instead of class base component
const SearchBar = () =>{
	return <input onChange={(e)=>{console.log("output: " + e.target.value)}} />;
}
*/

export default SearchBar;