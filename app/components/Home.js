import React, { Component } from "react";
import Search from "./common/Search";
import Results from "./common/Results";
import API from "../utils/API";

//<div className="jumbotron" style={{backgroundColor: '#20315A', color: 'white'}}>

class Home extends Component {
	state = {
		articles: [],
		numArticles : 0
	};
	// Getting all quotes when the component mounts
	// componentDidMount() {
 //    	this.getArticles();
 //  	}

	getArticles = (term, startDate, endDate, numArticles) => {
		API.getArticles(term, startDate, endDate).then( (results) => {
			console.log("results", results);
			this.setState({articles: results.data.response.docs, numArticles: numArticles});
		});
	}

	render() {
		return(
			<div className="container">
			    
			    <div className="jumbotron">
			      <h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
    			</div>
    			<Search getArticles={this.getArticles} />
    			<Results articles = {this.state.articles} numArticles={this.state.numArticles}/>
    		</div>

		)
	}
}

export default Home;