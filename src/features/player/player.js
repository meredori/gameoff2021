import { clearEnemies } from "../combat/combat";
var player = {
    name: "Name",
    attack: 1,
    health: 10,
    maxHealth: 10,
    experience: 0
}

var PlayerDied = () => {
    player.health = player.maxHealth;
    clearEnemies();
    player.experience = 0;
}

var PlayerWon = () => {
    console.log("You Won!");
}

export {player, PlayerDied};