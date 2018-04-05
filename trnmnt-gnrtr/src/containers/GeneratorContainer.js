import { connect } from "react-redux";
import Generator from '../components/Generator';
import { addPlayer, deletePlayer, generateMatches } from '../data/actions/actions';

const mapStateToProps = state => {
	return {
		players: state.get("players"),
		matches: state.get("matches"),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		add: ( player ) => dispatch(addPlayer(player)),
		delete: ( id ) => dispatch(deletePlayer(id)),
		generate: () => dispatch(generateMatches()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Generator);