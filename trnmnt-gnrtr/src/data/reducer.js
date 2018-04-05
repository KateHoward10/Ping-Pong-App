import { Map } from "immutable";

let lastID = 0;

const createPlayer = ({ player }) => {
	lastID += 1;
	return Map({
		id: lastID,
		name: player,
	});
};

const createMatches = (players) => {
	players.reduce(function(result, value, index, array) {
  	if (index % 2 === 0)
	    result.push(array.slice(index, index + 2));
	  return result;
	}, []);
	// let index = 0;
	// let array = [];
	// while (index < players.size) {
	// 	array.push(List({players.get(index), players.get(index+1)}),
	// 	});
	// }
	// index=index+2;
	// return array;
}


const addPlayer = (state, action) => state.update("players", players => (
	players.push(createPlayer(action))
));

const deletePlayer = (state, {id}) => state.update("players", players => players.filter(player => player.get("id") !== id));

const generateMatches = (state, action) => state.update(
	"players", players => players.sortBy(Math.random)
	
	// Shuffle the list of players
	
	// ("players", players => players.sortBy(Math.random));
	// state.update("matches", matches => matches.push(Map({id: 5, name: "Kate"})));	
);

const reducer = (state, action) => {
	switch (action.type) {
		case "addPlayer": return addPlayer(state, action);
		case "deletePlayer": return deletePlayer(state, action);
		case "generateMatches": return generateMatches(state, action);
		default: return state;
	}
};

export default reducer;