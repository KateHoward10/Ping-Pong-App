import React, { Component } from 'react';
import Button from './Button';

class Player extends Component {
	constructor(props) {
		super(props);
		this.delete = this.delete.bind(this);
	}

	delete() {
		const { id } = this.props;
		this.props.delete(id);
	}

	render() {
		const { name } = this.props;
		return (
			<li className="player d-flex align-items-center">
				{name}
				<Button onClick={this.delete} buttonName={"x"} className={ "btn-sm" }/>
			</li>
		);
	}
}

export default Player;
