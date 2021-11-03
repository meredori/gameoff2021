import "./style.scss";
import { updateUI } from "./features/interface/interface";
import { takeTurn } from "./features/combat/combat";
import globals from "./features/globals/vars";
import "./features/enemy/enemy";

var frameCount = globals.frameCount;
//create game loop
const gameLoop = () => {
  //update
  update();
  //render
  render();
  //loop
  requestAnimationFrame(gameLoop);
};
function update() {
    frameCount++;
    if(frameCount % 60 === 0) {
        console.log(frameCount);
        frameCount = 0;
        if(globals.fight){
            console.log("fight");
            takeTurn();
        }
    }
    updateUI();
}
function render() {}
function requestAnimationFrame(callback) {
  setTimeout(callback, 1000 / 60);
}
gameLoop();

