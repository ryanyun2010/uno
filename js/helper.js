function rectOverlap(rect1, rect2) {
    if (rect1.x < rect2.x + rect2.w &&
        rect1.x + rect1.w > rect2.x &&
        rect1.y < rect2.y + rect2.h &&
        rect1.h + rect1.y > rect2.y) {
        return true;
    }
    return false;
}

function resetX(deck){
    for(var i = 0; i < decks[deck].length; i++){
        decks[deck][i].index = i;
    }
    for(var card of decks[deck]){
        card.x = (600 - decks[card.player - 1].length * 45 - 22.5) + card.index * 90;
    }
}