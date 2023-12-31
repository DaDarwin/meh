import { AppState } from "../AppState.js";
import { Player } from "../models/player.js";
import { playerService } from "../services/PlayerServices.js";



export class PlayerController{

    constructor(){
        this.drawPlayers()
    }
    
    
    drawPlayers(){
        const players = AppState.players
        let content = ''
        // console.log(players)
        players.forEach(player => content += player.playerTemplate())
        console.log(content)
        document.getElementById('Players').innerHTML = content
    }

    adjustPoints(name, points){
        console.log(name, points)
        playerService.adjustPoints(name, points)
        this.drawPlayers()
    }

    addPlayerForm(){

    }

    addPlayer(event){
        event.preventDefault()
        console.log(document.querySelector("input").value)
        let newPlayerName = document.querySelector('input').value
        document.querySelector('input').value = null
        playerService.addPlayer(newPlayerName)
        this.drawPlayers()
    }



}