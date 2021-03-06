import React, { Component } from 'react';
import Button from './Button';

class Match extends Component {
	constructor(props) {
		super(props);
		this.state = {
			winner: "",
		}
		this.aWins = this.aWins.bind(this);
		this.bWins = this.bWins.bind(this);
	}

	// These two functions set the winner in local state to the corresponding player
	// They only work if winner has not been set already, preventing both players being selected
	aWins() {
		const { pair } = this.props;
		if (this.state.winner === "") {
			const winner = pair.get(0);
			this.setState ({
				winner: winner,
			});
			this.props.addWinner(winner);
		}
	}

	bWins() {
		const { pair } = this.props;
		if (this.state.winner === "") {
			const winner = pair.get(1);
			this.setState ({
				winner: winner,
			})
			this.props.addWinner(winner);
		}
	}
	

	render() {
		const { pair } = this.props;
		return (
			<li className="list-group-item d-flex justify-content-between align-items-center">
				<Button onClick={this.aWins} buttonName={pair.get(0).get("name")} className={ "btn btn-outline-primary" }/>
				 vs 
				<Button onClick={this.bWins} buttonName={pair.get(1).get("name")} className={ "btn btn-outline-primary" }/>
			</li>
		);
	}
}

export default Match;
