import React, { Component } from 'react';

class List extends Component {	
	render() {
		const {players, display} = this.props;
		return (
			<div>
				{display ?
					<ul>
						{players.reduce(function(result, value, index, array) {
					  	if (index % 2 === 0)
						    result.push(array.slice(index, index + 2));
						  return result;
						}, []).map((pair, index) => <li key={index} >{pair.get(0).get("name")} vs {pair.get(1).get("name")}</li>)}
					</ul>
					: null
				}
			</div>
		);
	}
}

export default List;