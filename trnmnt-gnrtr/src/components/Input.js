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
		this.generate = this.generate.bind(this);
	}

	update(e) {
		this.setState ({ player: e.target.value })
	}

	add(e) {
		e.preventDefault();
		let player = this.state.player;
		this.props.add(player);
	}

	generate() {
		// e.preventDefault();
		let { players } = this.props;
		this.props.generate(players);
	}

	render() {
		return (
			<form className="form-group d-flex flex-direction-row" style={{justifyContent: 'center'}} >
			    <input className="form-control" type="text" onChange={this.update}/>
			    <Button onClick={this.add} className="btn btn-primary" buttonName="Add player"/>
		    	<Button onClick={this.generate} className="btn btn-info" buttonName="Generate Tournament"/>
			</form>
		)
	}

};

export default Input;
