var register = {};
function setup(){
  createCanvas(1200, 700);
  document.getElementById("defaultCanvas0").style.left = (window.outerWidth - 1200) / 2 + "px";
  document.getElementById("defaultCanvas0").style.top = (window.innerHeight - 700) / 2 + "px";
}

function draw() {
  background(230);
}
function keyPressed(e){
    register[e.which] = true;
}
function keyReleased(e){
    register[e.which] = false; 
}