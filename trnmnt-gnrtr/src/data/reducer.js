
const addPlayer = (state, { player }) => state.update("players", players => (
	players.push(player)
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