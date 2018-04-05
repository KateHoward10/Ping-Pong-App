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


	update(e) {
		this.setState ({ player: e.target.value })
	}

	add(e) {
		e.preventDefault();
		const player = this.state.player;
		this.props.add(player);
	}

	render() {
		return (
			<form className="form-group d-flex flex-direction-row" style={{justifyContent: 'center'}} >
			    <input className="form-control" type="text" onChange={this.update}/>
			    <Button onClick={this.add} className="btn btn-primary" buttonName="Add player"/>
			</form>
		)
	}

};

export default Input;
