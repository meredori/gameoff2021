import "./style.scss";
var frameCount = 0;
var fight = false;
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
        if(fight){
            console.log("fight");
        }
    }
}
function render() {}
function requestAnimationFrame(callback) {
  setTimeout(callback, 1000 / 60);
}
gameLoop();

document.getElementById("fight-button").onclick = () => {
  fight = !fight;
  if(fight){
        document.getElementById("fight-button").innerHTML = "Stop";
  }
  else{
        document.getElementById("fight-button").innerHTML = "Fight";
  }
}