import { AppState } from "../AppState.js";
import { Player } from "../models/player.js";

class PlayerServices{
    adjustPoints(playerName, points){
        let selectedPlayer = AppState.players.find(player => player.name == playerName)
        selectedPlayer.points += points
    }

    addPlayer(name){
        let newPlayer = new Player(name)
        AppState.players.push(newPlayer)
    }

}

export const playerService = new PlayerServices