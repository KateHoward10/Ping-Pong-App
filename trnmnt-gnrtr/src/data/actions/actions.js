
export const addPlayer = player => {
    return {
        type: "addPlayer",
        player: player,
    };
};

export const setPlayers = players => {
    return {
        type: "setPlayers",
        players: players,
    };
};