import React, {Component} from "react";
import ReactDom from "react-dom";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
import YTsearch from "youtube-api-search";
import _ from "lodash";

//api key
const API_KEY = 'AIzaSyCCDw-k52DY90Irc2k4I3dQvuhmr1tD6bI';

//creat component class
class App extends Component{
	constructor(props){
		super(props);

		//initiate state
		this.state = { 
			video: [],
			selectedVideo: null
		};

		//set default state
		this.searchVideo("sex and the city Mr. Big");

	}

	//define seachVideo method
	searchVideo(term){
		YTsearch({key: API_KEY, term: term}, (data)=>{
			this.setState({
				video: data, 
				selectedVideo: data[0]
			});
		});	
	};


	render(){
		//create a debouce function which can only run every other 300ms
		const intervalSearch = _.debounce((term)=>this.searchVideo(term) ,300);

		return (
			<div className="search-bar">
				<SearchBar onSearch={(term) => this.searchVideo(term)} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList videos = {this.state.video} onVideoSelect={ (sVideo)=>{this.setState({selectedVideo: sVideo})} } />
			</div>
		);		
	}

}

//render to dom
ReactDom.render(<App />, document.querySelector(".container"));