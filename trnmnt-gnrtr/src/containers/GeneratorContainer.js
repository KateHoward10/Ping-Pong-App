import { connect } from "react-redux";
import Generator from '../components/Generator';
import { addPlayer, deletePlayer, generateMatches, addWinner, resetWinners, generateRound } from '../data/actions/actions';

const mapStateToProps = state => {
	return {
		players: state.get("players"),
		matches: state.get("matches"),
		winners: state.get("winners"),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		add: ( player ) => dispatch(addPlayer(player)),
		delete: ( id ) => dispatch(deletePlayer(id)),
		generate: () => dispatch(generateMatches()),
		addWinner: (winner) => dispatch(addWinner(winner)),
		resetWinners: () => dispatch(resetWinners()),
		generateRound: () => dispatch(generateRound()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Generator);