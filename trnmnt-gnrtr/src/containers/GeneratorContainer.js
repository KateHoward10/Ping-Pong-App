import { connect } from "react-redux";
import Generator from '../components/Generator';
import { addPlayer } from '../data/reducer';

const mapStateToProps = state => {
	return {
		players: state.get("players"),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onClick: () => dispatch({ type: "addPlayer" }),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Generator);