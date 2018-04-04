import React, { Component } from 'react';
import Input from './Input';
import List from './List';
import Tournament from './Tournament';

class Generator extends Component {
	render() {
		return (
			<div>
				<Input add={this.props.add} generate={this.props.generate}/>
			    <List players={this.props.players} delete={this.props.delete}/>
			    <Tournament matches={this.props.matches}/>
			</div>
		);
	}
}

export default Generator;
