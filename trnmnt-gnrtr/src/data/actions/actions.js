
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

export const generateMatches = () => {
    return {
        type: "generateMatches",
    }
}

export const addWinner = (winner) => {
    return {
        type: "addWinner",
        winner: winner,
    }
}

export const generateRound = (winners) => {
    return {
        type: "generateRound",
        newPlayers: winners,
    }
}