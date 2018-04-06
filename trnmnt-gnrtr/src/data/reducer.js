import { Map } from "immutable";

let lastID = 0;
const createPlayer = ({ player }) => {
	lastID += 1;
	return Map({
		id: lastID,
		name: player,
	});
};

// Create a new player Map with id and name properties
const addPlayer = (state, action) => state.update("players", players => (players.push(createPlayer(action))));

// Remove player from the array using their id
const deletePlayer = (state, {id}) => state.update("players", players => players.filter(player => player.get("id") !== id));

// Shuffle the list of players	
const generateMatches = (state, action) => state.update("players", players => players.sortBy(Math.random));

// Players is currently an array of pairs - reduces the array to just winners
const addWinner = (state, {winner}) => state.update("newPlayers", newPlayers => newPlayers.push(winner));
	// players.reduce(function(result, value) {
// 	result.push(winner);
// 	return result;
// }, []));

const generateRound = (state, {newPlayers}) => state.update("newPlayers", newPlayers => newPlayers.sortBy(Math.random));

const reducer = (state, action) => {
	switch (action.type) {
		case "addPlayer": return addPlayer(state, action);
		case "deletePlayer": return deletePlayer(state, action);
		case "generateMatches": return generateMatches(state, action);
		case "addWinner": return addWinner(state, action);
		case "generateRound": return generateRound(state, action);
		default: return state;
	}
};

export default reducer;