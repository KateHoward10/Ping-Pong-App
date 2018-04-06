import { connect } from "react-redux";
import Generator from '../components/Generator';
import { addPlayer, deletePlayer, generateMatches, addWinner, generateRound } from '../data/actions/actions';

const mapStateToProps = state => {
	return {
		players: state.get("players"),
		newPlayers: state.get("newPlayers"),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		add: ( player ) => dispatch(addPlayer(player)),
		delete: ( id ) => dispatch(deletePlayer(id)),
		generate: () => dispatch(generateMatches()),
		addWinner: (winner) => dispatch(addWinner(winner)),
		generateRound: (newPlayers) => dispatch(generateRound(newPlayers)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Generator);