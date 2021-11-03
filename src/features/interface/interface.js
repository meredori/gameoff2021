import globals from '../globals/vars';
import {player} from '../player/player';
import {currentEnemies} from '../combat/combat'

document.getElementById("fight-button").onclick = () => {
    globals.fight = !globals.fight;
    if(globals.fight){
          document.getElementById("fight-button").innerHTML = "Stop";
    }
    else{
          document.getElementById("fight-button").innerHTML = "Fight";
    }
  }

var updateUI = () => {
    document.getElementById("health").innerHTML = player.health;
    var enemyListInnerHTML = ""
    currentEnemies.forEach((enemy) => {
        enemyListInnerHTML += ("<span>" + enemy.health + "</span>");
    })
    document.getElementById("enemy-list").innerHTML = enemyListInnerHTML;
}

export {updateUI};