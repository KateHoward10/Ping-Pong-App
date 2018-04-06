import React, { Component } from 'react';
import Match from './Match';
import Button from './Button';

class Tournament extends Component {	
	constructor(props) {
		super(props);
		this.state = {
			winner: "",
			displayRound2: false,
		}
		this.winner = this.winner.bind(this);
		this.generateRound = this.generateRound.bind(this);
		// this.aWins = this.aWins.bind(this);
		// this.bWins = this.bWins.bind(this);
	}

	winner(winner) {
		this.props.addWinner(winner);
		console.log(winner);
	}

	generateRound(e) {
		// e.preventDefault();
		// const winners = this.state.winners;
		this.props.generateRound();
		this.setState ({ displayRound2: true });
	}

	render() {
		const {players, display, newPlayers} = this.props;
		const {displayRound2} = this.state;
		return (
			<div>
				{display ?
					<div>
						<h2>Round 1:</h2>
						<p>Click on the winner of each match to generate the next round.</p>
						<ul>
							{players.reduce(function(result, value, index, array) {
						  	if (index % 2 === 0)
							    result.push(array.slice(index, index + 2));
							  	return result;
							}, []).map((pair, index) =>
							<Match pair={pair} addWinner={this.props.addWinner} />)}
						</ul>
						<Button onClick={this.generateRound} className="btn btn-info" buttonName="Generate Next Round"/>
					</div>
					: null
				}
				{displayRound2 ?
					<div>
						<h2>Round 2:</h2>
						<ul>
							{newPlayers.reduce(function(result, value, index, array) {
						  	if (index % 2 === 0)
							    result.push(array.slice(index, index + 2));
							  	return result;
							}, []).map((pair, index) =>
							<Match pair={pair} addWinner={this.props.addWinner} key={index}/>)}
						</ul>
						<Button onClick={this.generateRound} className="btn btn-info" buttonName="Generate Next Round"/>
					</div>
					: null
				}
			</div>
		);
	}
}


// <div class="custom-control custom-radio custom-control-inline">
//   <input onClick={this.winner}  type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input"/>
//   <label class="custom-control-label" for="customRadioInline1">{pair.get(0).get("name")}</label>
// </div>
// vs
// <div class="custom-control custom-radio custom-control-inline">
//   <input onClick={this.winner}  type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input"/>
//   <label class="custom-control-label" for="customRadioInline2">{pair.get(1).get("name")}</label>
// </div>

export default Tournament;