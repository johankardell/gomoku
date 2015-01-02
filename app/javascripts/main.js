var main = function(){
  var boardui = new BoardUI(document.getElementById('board'));
  var statusui = new StatusUI(document.getElementById('next-player'), document.getElementById('winner'));

  var game = new Game(boardui, statusui);
  game.start();
}();