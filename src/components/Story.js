import React, { Component } from 'react';
import axios from 'axios';

import './css/Story.css';

class Story extends Component {

	state = {
		id: this.props.storyId,
		author: '',
		comments: [],
		time: new Date(),
		title: '',
		url: '',
		likes: 0
	}

	componentDidMount(){
		this.getStory();
	}

	getStory = () => {
		axios.get(`https://hacker-news.firebaseio.com/v0/item/${this.props.storyId}.json`)
			.then(res => this.setState({ author: res.data.by, comments: (res.data.kids) ? res.data.kids : [], time: new Date(res.data.time * 1000), title: res.data.title, url: res.data.url, likes: res.data.score }));
		console.log(this.state);
	}

	render() {
		return(
			<div className="storyItem">
				<div className="Name">
					{ this.state.title }, by - {this.state.author}
				</div>
				<div className="toUrl"><a href={this.state.url}>Goto Original Post</a></div>
				<div className="det">
					<div className="detItem">
						<div className="detHead">ID</div>
						<div className="detBody">{ this.state.id }</div>
					</div>
					<div className="detItem">
						<div className="detHead">Likes</div>
						<div className="detBody">{ this.state.likes }</div>
					</div>
					<div className="detItem">
						<div className="detHead">Comments</div>
						<div className="detBody">{ this.state.comments.length }</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Story;