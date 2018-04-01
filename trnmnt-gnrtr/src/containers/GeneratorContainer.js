import { connect } from "react-redux";
import Generator from '../components/Generator';
import { addPlayer } from '../data/actions/actions';

const mapStateToProps = state => {
	return {
		players: state.get("players"),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onClick: ( player ) => dispatch(addPlayer(player)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Generator);