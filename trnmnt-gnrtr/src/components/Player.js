import React, { Component } from 'react';
import Button from './Button';

class Player extends Component {
	render() {
		const {player} = this.props;
		return (
			<li className="list-group-item d-flex justify-content-between align-items-center">{player}</li>
		);
	}
}

export default Player;
