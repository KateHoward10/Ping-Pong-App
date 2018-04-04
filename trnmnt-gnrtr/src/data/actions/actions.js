
export const setPlayers = players => {
    return {
        type: "setPlayers",
        players: players,
    };
};

export const addPlayer = player => {
    return {
        type: "addPlayer",
        player: player,
    };
};

export const deletePlayer = (id) => {
    return {
        type: "deletePlayer",
        id: id,
    };
};

export const generateMatches = players => {
    return {
        type: "generateMatches",
        players: players,
    }
}