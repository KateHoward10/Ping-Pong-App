import React, { Component } from 'react';
import Match from './Match';
import Button from './Button';

class Tournament extends Component {	
	constructor(props) {
		super(props);
		this.state = {
			displayNext: false,
		}
		this.generateRound = this.generateRound.bind(this);
	}

	generateRound() {
		this.props.generateRound();
		this.props.resetWinners();
		// this.setState ({ displayNext: true });
	}

	render() {
		const {tournament, matches} = this.props;
		const {displayNext} = this.state;
		return (
			<div>
				{tournament ?
					matches.map((match, index) =>
						<div>
						<h2>Round {index+1}:</h2>
						<p>Click on the winner of each match to generate the next round.</p>
						<ul>
							{match.reduce(function(result, value, index, array) {
						  	if (index % 2 === 0)
							    result.push(array.slice(index, index + 2));
							  	return result;
							}, []).map((pair, index) =>
							<Match pair={pair} addWinner={this.props.addWinner} />)}
						</ul>
						<Button onClick={this.generateRound} className="btn btn-info" buttonName="Generate Next Round"/>
					</div>
					)
					
					: null
				}
				
			</div>
		);
	}
}
// {displayNext ?
// 					<div>
// 						<h2>Round 2:</h2>
// 						<ul>
// 							{matches.get(1).reduce(function(result, value, index, array) {
// 						  	if (index % 2 === 0)
// 							    result.push(array.slice(index, index + 2));
// 							  	return result;
// 							}, []).map((pair, index) =>
// 							<Match pair={pair} addWinner={this.props.addWinner} key={index}/>)}
// 						</ul>
// 						<Button onClick={this.generateRound} className="btn btn-info" buttonName="Generate Next Round"/>
// 					</div>
// 					: null
// 				}

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