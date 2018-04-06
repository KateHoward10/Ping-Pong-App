import React, { Component } from 'react';

class Winners extends Component {	
	render() {
		const { winners } = this.props;
		return (
			<div>
				{winners.count() > 0 ?
					<h4>{winners.count() === 1 ? "Winner: " : "Winners: "}{ winners.map((winner, index) => (
							<span key={index}> {winner.get("name")} </span>)
						)}
					</h4>
					: null
				}
			</div>
		);
	}
}

export default Winners;
