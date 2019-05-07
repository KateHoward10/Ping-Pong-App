import { Map, List } from "immutable";

const initial = Map({
	// Array of players as inputted by the user
	players: List([
		]),
	// Array of arrays, each one half as large - all players left in at that point
	matches: List([
		]),
	// The list of current winners, hopefully half as large as the previous match
	winners: List([
		])
});

export default initial;