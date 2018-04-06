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
			showGenerate: true,
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
		const {showGenerate, winnersSelected} = this.state;
		return (
			<div>
				<Input add={this.props.add}/>
				{showGenerate ? 
			    	<Button onClick={this.generate} className="btn btn-info" buttonName="Generate Tournament"/>
				: null}
			    <List players={this.props.players} delete={this.props.delete} nodisplay={this.state.tournament}/>
				<Tournament generateRound={this.props.generateRound} addWinner={this.props.addWinner} players={this.props.players} newPlayers={this.props.newPlayers} display={this.state.tournament} />
			</div>
		);
	}
}

export default Generator;
