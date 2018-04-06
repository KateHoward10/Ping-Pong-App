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
		const {players} = this.props;
		return (
			<div>
				<Input add={this.props.add} players={players}/>
			    <List players={players} delete={this.props.delete}/>
				{players.count() > 1 && (Math.log(players.count())/Math.log(2)) % 1 === 0 ? 
			    	<Button onClick={this.generate} className="btn btn-info" buttonName="Generate first round"/>
					: null
				}
				<Tournament addWinner={this.props.addWinner} generateRound={this.props.generateRound} resetWinners={this.props.resetWinners} players={this.props.players} matches={this.props.matches} winners={this.props.winners} tournament={this.state.tournament} />
			</div>
		);
	}
}

export default Generator;
