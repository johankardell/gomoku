var Main = Main || {};

(function(Main, BoardUI, StatusUI){
  var bui = BoardUI.create(document.getElementById('board')),
      sui = StatusUI.create(document.getElementById('next-player'),
                            document.getElementById('winner'));

  sui.nextPlayer('black');
 
  bui.drawBoard();
  bui.drawPiece(0,0, 'w');
  bui.drawPiece(0,17, 'w');
  bui.drawPiece(17, 0, 'b');
  bui.drawPiece(17, 17, 'B');
  bui.whenClicked(function (col, row) {
    bui.drawPiece(col, row, 'w');
    sui.winnerIs('black');
  });
})(Main, BoardUI, StatusUI);
