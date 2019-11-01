import React, { Component } from 'react';

class Comments extends Component {

	constructor(props){
		super(props);		
		console.log(this.props.match.params);
	}

	render() {
		return(
			<h1>Raj</h1>
		)
	}
}

export default Comments;