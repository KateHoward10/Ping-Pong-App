import React, { Component } from 'react';
import Player from './Player';

class List extends Component {	
	render() {
		const {players} = this.props;
		return (
			<div>
				{players.count() > 0 ?
					<ul>
						{ players.map((player, index) => (
							<Player player={player} key={index} />)
						)}
					</ul>
					: null
				}
			</div>
		);
	}
}

export default List;
