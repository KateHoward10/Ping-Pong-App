import { Map } from "immutable";

let lastID = 0;

const createPlayer = ({ player }) => {
	lastID += 1;
	return Map({
		id: lastID,
		name: player,
	});
};

const randomise = ( players ) => {
	let currentIndex = players.length, temporaryValue, randomIndex;
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = players[currentIndex];
		players[currentIndex] = players[randomIndex];
		players[randomIndex] = temporaryValue;
	}
	return players;
}

const createMatches = ({ players, matches }) => {
	for (let i=0; i<players.length; i=i+2) {
		return Map({
			a: players[i],
			b: players[i+1],
		});
	}	
}


const setPlayers = (state, { players }) => state.set("players", players);

const addPlayer = (state, action) => state.update("players", players => (
	players.push(createPlayer(action))
));

const deletePlayer = (state, {id}) => state.update("players", players => players.filter(player => player.get("id") !== id));

const generateMatches = (state, action) => {
	state.update("players", players => (randomise(players)));
	state.update("matches", matches => (
		matches.push(createMatches(action))));
};

const reducer = (state, action) => {
	switch (action.type) {
		case "setPlayers": return setPlayers(state, action);
		case "addPlayer": return addPlayer(state, action);
		case "deletePlayer": return deletePlayer(state, action);
		case "generateMatches": return generateMatches(state, action);
		default: return state;
	}
};

export default reducer;