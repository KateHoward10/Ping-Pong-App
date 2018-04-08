import React, { Component } from 'react';
import Match from './Match';
import Button from './Button';
import Winners from './Winners';

class Tournament extends Component {	
	constructor(props) {
		super(props);
		this.generateRound = this.generateRound.bind(this);
	}

	generateRound() {
		this.props.generateRound();
		this.props.resetWinners();
	}

	render() {
		const {tournament, matches, winners} = this.props;
		// If the Generate first round button has been selected, iterate through the matches array and display each round
		// If only two players in the round, it is the final and no further rounds can be generated
		// Each round is reduced to an array of randomised pairs, to play each other
		return (
			<div>
				{tournament ?
					matches.map((round, index) =>
						<div className="round" key={index}>
						{ round.count() === 2 ?
							<h2><span role="img" aria-label="ping pong bat emoji">🏓</span> Final <span role="img" aria-label="ping pong bat emoji">🏓</span></h2>
							: <div>
								<h2><span role="img" aria-label="ping pong bat emoji">🏓</span> Round {index+1} <span role="img" aria-label="ping pong bat emoji">🏓</span></h2>
								<p>Click on the winner of each match to generate the next round.</p>
							</div>
						}
						<ul>
							{round.reduce(function(result, value, index, array) {
						  	if (index % 2 === 0)
							    result.push(array.slice(index, index + 2));
							  	return result;
							}, []).map((pair, index) =>
							<Match pair={pair} addWinner={this.props.addWinner} key={index}/>)}
						</ul>
						{round.count() === 2 ? null :
							<Button onClick={this.generateRound} className="btn btn-danger" buttonName="Generate Next Round"/>
						}
					</div>
					)
					
					: null
				}
				<Winners winners={winners} matches={matches}/>
			</div>
		);
	}
}

export default Tournament;