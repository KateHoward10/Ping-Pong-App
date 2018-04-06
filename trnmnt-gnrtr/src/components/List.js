import React, { Component } from 'react';
import Player from './Player';

class List extends Component {	
	render() {
		const { players, nodisplay } = this.props;
		return (
			<div>
				{!nodisplay && players.count() > 0 ?
					<div>
						<h2>Players:</h2>
						<ul>
							{ players.map((player, index) => (
								<Player name={player.get("name")} id={player.get("id")} delete={this.props.delete} key={index} />)
							)}
						</ul>
					</div>
					: null
				}
			</div>
		);
	}
}

export default List;
