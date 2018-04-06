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
		return (
			<div>
				{tournament ?
					matches.map((match, index) =>
						<div key={index}>
						{ match.count() === 2 ?
							<h2><span role="img" aria-label="ping pong bat emoji">🏓</span> Final <span role="img" aria-label="ping pong bat emoji">🏓</span></h2>
							: <div>
								<h2><span role="img" aria-label="ping pong bat emoji">🏓</span> Round {index+1} <span role="img" aria-label="ping pong bat emoji">🏓</span></h2>
								<p>Click on the winner of each match to generate the next round.</p>
							</div>
						}
						<ul>
							{match.reduce(function(result, value, index, array) {
						  	if (index % 2 === 0)
							    result.push(array.slice(index, index + 2));
							  	return result;
							}, []).map((pair, index) =>
							<Match pair={pair} addWinner={this.props.addWinner} key={index}/>)}
						</ul>
						{match.count() === 2 ? null :
							<Button onClick={this.generateRound} className="btn btn-info" buttonName="Generate Next Round"/>
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