var register = {};
var curplayer = 1;
var decks = [
  [new Card("+2","green",0,1),
  new Card("8","yellow",1,1),
  new Card("3","blue",2,1),
  new Card("∞","black",3,1)],
  [
    new Card("8","red",0,2),
    new Card("+2","blue",1,2),
    new Card("3","yellow",2,2)
  ]];
var curcard = new Card("+2","red",100,3);
function setup(){
  createCanvas(1200, 700);
  document.getElementById("defaultCanvas0").style.left = (window.outerWidth - 1200) / 2 + "px";
  document.getElementById("defaultCanvas0").style.top = (window.innerHeight - 700) / 2 + "px";
  for(var card of decks[0]){
    card.setup();
  }
  for(var card of decks[1]){
    card.setup();
  }
  curcard.setup()
}

function draw() {
  background(230);
  var tempdeck = [];
  for(var i = 0; i < decks[0].length + 1; i++){
    tempdeck.push(0);
  }
  for(var i = 0; i < decks[0].length; i++){
    tempdeck[decks[0][i].zorder] = decks[0][i];
    decks[0][i].checkHover();
  }
  for(var i = 0; i < tempdeck.length; i++){
    var card = tempdeck[i];
    if(card != 0){
    card.draw();
    }
  }
   tempdeck = [];
  for(var i = 0; i < decks[1].length + 1; i++){
    tempdeck.push(0);
  }
  for(var i = 0; i < decks[1].length; i++){
    tempdeck[decks[1][i].zorder] = decks[1][i];
    decks[1][i].checkHover();
  }
  for(var i = 0; i < tempdeck.length; i++){
    var card = tempdeck[i];
    if(card != 0){
    card.draw();
    }
  }
  curcard.draw();
}
function keyPressed(e){
    register[e.which] = true;
}
function keyReleased(e){
    register[e.which] = false; 
}

function mousePressed(){
  for(var card of decks[curplayer - 1]){
    if(card.top){
      card.play();
    }
  }
}