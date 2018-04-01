import React, { Component } from 'react';
import Input from './Input';
import List from './List';

class Generator extends Component {
	render() {
		return (
			<div>
				<Input onClick={this.props.onClick}/>
			    <List players={this.props.players}/>
			</div>
		);
	}
}

export default Generator;
