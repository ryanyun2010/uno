class Card{
  constructor(type,color,zorder,player){
    this.type = type;
    this.color = color;
    this.zorder = zorder;
    this.index = this.zorder;
    this.player = player;
    this.y = (this.player == 1) ? 480 : (this.player == 3) ? 250 : 20
    this.x = 0;
    this.top = false;
  }
  setup(){
    if(this.player == 3){
      this.x = 530;
      return;
    }
    this.x = (600 - decks[this.player - 1].length * 45 - 22.5) + this.index * 90;
  }
  draw(){
    fill(this.color);
    stroke("black");
    strokeWeight(6);
    rect((this.top) ? this.x - 10 : this.x, (this.top) ? this.y - 15 : this.y, (this.top) ? 150 : 130, (this.top) ? 240 : 210);
    fill("white");
    ellipse(this.x + 65,(this.top) ? this.y + 105 : this.y + 100, (this.top) ? 100 : 75,(this.top) ? 130 : 100);
    textSize(40);
    fill("white");
    text(this.type, (this.top) ? this.x + 82 : this.x + 72, (this.top) ? this.y + 215 : this.y + 200)
    text(this.type, (this.top) ? this.x -2 : this.x + 8, (this.top) ? this.y + 25 : this.y + 40) 
  }

  checkHover(){
    if(curplayer == this.player){
    if(this.x < mouseX && this.x + ((this.index == (decks[this.player-1].length - 1)) ? 160 : 90) > mouseX && this.y < mouseY && this.y + 210 > mouseY){
      this.zorder = decks[this.player-1].length;
      this.top = true;
    }else{
      this.zorder = this.index;
      this.top = false;
    }
  }
}
play(){
  curcard = new Card(this.type,this.color,1000,3);-
  curcard.setup();
  decks[this.player - 1].splice(this.index,1);
  resetX(this.player - 1);
}
}