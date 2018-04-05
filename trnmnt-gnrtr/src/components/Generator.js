import React, { Component } from 'react';
import Input from './Input';
import List from './List';
import Button from './Button';
import Tournament from './Tournament';

class Generator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tournament: false,
			// check whether number of players is a power of 2
			// {(Math.log(this.props.players.count())/Math.log(2)) % 1 !== 0 ? "btn btn-info disabled" : "btn btn-info"}
			disabled: (Math.log(this.props.players.count())/Math.log(2)) % 1 !== 0,
		}
		this.generate = this.generate.bind(this);
	}

	generate = () => {
		this.props.generate();
		this.setState ({
			tournament: true,
		});
	}

	render() {
		return (
			    
			<div>
				<Input add={this.props.add} generate={this.props.generate}/>
			    <Button onClick={this.generate} className="btn btn-info" buttonName="Generate Tournament"/>
			    <List players={this.props.players} delete={this.props.delete}/>
				<Tournament players={this.props.players} display={this.state.tournament}/>
			</div>
		);
	}
}

export default Generator;
