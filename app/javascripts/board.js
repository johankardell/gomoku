function Board(){
	var board = [];
	var dimension = 19;

	// Create the board
	(function(){
		for(var x=0; x<dimension; x++){
			board.push([]);
			var xumn = board[x];
			for(var y=0; y<dimension; y++){
				xumn.push(undefined);
			}
		}
	})();

	/* **************************************************  */

	function horizontalWinnerAt(x,y){
		var result = board[x][y];

		if(x > dimension-5){
			return undefined;
		}

		if(board[x+1][y] === result &&
			board[x+2][y] === result &&
			board[x+3][y] === result &&
			board[x+4][y] === result){
			return result;
		}

		return undefined;
	}

	function verticalWinnerAt(x,y){
		var result = board[x][y];

		if(y > dimension-5){
			return undefined;
		}

		if(board[x][y+1] === result &&
			board[x][y+2] === result &&
			board[x][y+3] === result &&
			board[x][y+4] === result) {
			return result;
		}

		return undefined;
	}

	/* **************************************************  */

	this.placePiece = function(x,y,color){
		board[x][y] = color[0];
	};

	this.winner = function(){
		var winner;

		for(var x=0; x<dimension; x++){
			for(var y=0; y<dimension; y++){
				winner = horizontalWinnerAt(x,y) || verticalWinnerAt(x,y);

				if(winner === 'b'){
					return 'Black';
				}
				if(winner === 'w'){
					return 'White';
				}
			}
		}
		return winner;
	};
}