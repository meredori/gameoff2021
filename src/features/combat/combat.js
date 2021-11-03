import {player,PlayerDied} from '../player/player';
var currentEnemies = [];

var clearEnemies = () => {
    currentEnemies = [];
}

var takeTurn = () => {
    if(currentEnemies.length > 0){
        currentEnemies[0].health -= player.attack;
        if(currentEnemies[0].health <= 0){
            currentEnemies.shift();
        }
        if(currentEnemies.length > 0){
            currentEnemies.forEach((enemy) => {
                player.health -=  enemy.attack;
                if(player.health <= 0){
                    console.log("You died!")
                    PlayerDied();
                }
            })
        }
        else {
            console.log("You Won!")
            //PlayerWon();
        }
    }
    else {
        console.log("Nothing to fight");
    }
}

export {currentEnemies,takeTurn,clearEnemies};