function player(){

}

player.prototype.play =  function() {
  var audio = new Audio('sound/cracking_whip.mp3');
  audio.play();
}
