import React, {Component} from 'react';
import Button from './Button';

class Input extends Component {
	constructor(props) {
		super(props);
		this.state = {
			player: "",
		}
		this.update = this.update.bind(this);
		this.add = this.add.bind(this);
	}

	// Updates name of player in local state as it is inputted
	update(e) {
		this.setState ({ player: e.target.value })
	}

	// Passes in name as an argument to the add function
	add(e) {
		e.preventDefault();
		const player = this.state.player;
		this.props.add(player);
	}

	render() {
		return (
			<form className="playerAdd form-group d-flex flex-direction-row align-items-center justify-content-center" >
			    <input className="form-control" type="text" onChange={this.update}/>
			    <Button onClick={this.add} className="btn btn-danger" buttonName="Add player"/>
			</form>
		)
	}

};

export default Input;
