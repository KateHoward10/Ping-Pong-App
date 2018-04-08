import React, { Component } from 'react';
import Input from './Input';
import Player from './Player';
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

	generate() {
		this.props.generate();
		this.setState ({
			tournament: true,
		});
	}

	render() {
		const {players} = this.props;
		// Displays input to take players' names, lists out players if there are any
		// If number of players is valid, Generate first round button appears
		// The Tournament component displays any rounds as they are generated
		return (
			<div>
				<Input add={this.props.add} players={players}/>
			    <div className="list container">
				{players.count() > 0 ?
					<div>
						<h2>Players:</h2>
						<ul className="playerList">
							{ players.map((player, index) => (
								<Player name={player.get("name")} id={player.get("id")} delete={this.props.delete} key={index} />)
							)}
						</ul>
					</div>
					: null
					}
				{players.count() > 1 && (Math.log(players.count())/Math.log(2)) % 1 === 0 ? 
			    	<Button onClick={this.generate} className="btn btn-danger" buttonName="Generate first round"/>
					: null
				}
				</div>
				<Tournament addWinner={this.props.addWinner} generateRound={this.props.generateRound} resetWinners={this.props.resetWinners} players={this.props.players} matches={this.props.matches} winners={this.props.winners} tournament={this.state.tournament} />
			</div>
		);
	}
}

export default Generator;
