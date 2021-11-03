import { currentEnemies } from "../combat/combat";
var enemy = {
    name: "enemy",
    attack: 1,
    health: 2
}

var spawnEnemy = () => {
    console.log("spawn enemy")
    currentEnemies.push({...enemy});
}

document.getElementById("spawn-enemy").onclick = () => {
    spawnEnemy();
}

export default enemy;