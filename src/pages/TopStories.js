import React, { Component } from 'react';
import axios from 'axios';

import Story from '../components/Story'

class TopStories extends Component {

	componentDidMount() {
		this.getStories();
	}

	state = {
		stories: []
	}

	getStories = () => {
		axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
			.then(res => this.setState({ stories: res.data }));
	}

	render() {
		return (
			<div style={{ width: '100%', display: 'flex', flexWrap: 'wrap'}}>
				{
					this.state.stories.slice(0, 19).map(story => {
						return (
							<Story key={story} storyId={story}/>
						)
					})
				}
			</div>
		)
	}
}

export default TopStories;