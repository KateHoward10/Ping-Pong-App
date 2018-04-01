import { Map } from "immutable";

let lastID = 0;

const createPlayer = ({ player }) => {
	lastID += 1;
	return Map({
		id: lastID,
		name: player,
	});
};

const addPlayer = (state, action) => state.update("players", players => (
	players.push(createPlayer(action))
));

const setPlayers = (state, { players }) => state.set("players", players);


const reducer = (state, action) => {

	switch (action.type) {
		case "addPlayer": return addPlayer(state, action);
		case "setPlayers": return setPlayers(state, action);
		default: return state;
	}
};

export default reducer;