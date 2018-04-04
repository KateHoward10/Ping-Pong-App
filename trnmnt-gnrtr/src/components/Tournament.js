import React, { Component } from 'react';

class List extends Component {	
	render() {
		const {matches} = this.props;
		return (
			<div>
				{matches.count() > 0 ?
					<ul>
						{ matches.map((match, index) => <li>{match}</li>) }
						}
					</ul>
					: null
				}
			</div>
		);
	}
}

export default List;