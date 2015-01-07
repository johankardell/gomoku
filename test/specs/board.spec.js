/*jshint -W030 */

describe('Board', function() {
	var board;

	beforeEach(function(){
		board = new Board();		
	});

	it('Should exist', function(){
		expect(board).to.not.be.undefined;
	});

	it('Should not present a winner when the board is empty', function(){
		expect(board.winner()).to.be.undefined;
	});

	describe('Horizontal winner', function(){
		it('Should declare black winner when starting at 0,0', function(){
			board.placePiece(0,0,'b');
			board.placePiece(1,0,'b');
			board.placePiece(2,0,'b');
			board.placePiece(3,0,'b');
			board.placePiece(4,0,'b');
			expect(board.winner()).to.equal('Black');
		});

		it('Should declare white winner when starting at 0,3', function(){
			board.placePiece(0,3,'w');
			board.placePiece(1,3,'w');
			board.placePiece(2,3,'w');
			board.placePiece(3,3,'w');
			board.placePiece(4,3,'w');
			expect(board.winner()).to.equal('White');
		});

		it('Should declare black winner when starting at 14,5', function(){
			board.placePiece(14,5,'w');
			board.placePiece(15,5,'w');
			board.placePiece(16,5,'w');
			board.placePiece(17,5,'w');
			board.placePiece(18,5,'w');
			expect(board.winner()).to.equal('White');
		});
	});

	describe('Vertical winner', function(){
		it('Should declare black winner when starting at 0,0', function(){
			board.placePiece(0,0,'b');
			board.placePiece(0,1,'b');
			board.placePiece(0,2,'b');
			board.placePiece(0,3,'b');
			board.placePiece(0,4,'b');
			expect(board.winner()).to.equal('Black');
		});

		it('Should declare white winner when starting at 0,3', function(){
			board.placePiece(0,3,'w');
			board.placePiece(0,4,'w');
			board.placePiece(0,5,'w');
			board.placePiece(0,6,'w');
			board.placePiece(0,7,'w');
			expect(board.winner()).to.equal('White');
		});

		it('Should declare black winner when starting at 5,14', function(){
			board.placePiece(5,14,'b');
			board.placePiece(5,15,'b');
			board.placePiece(5,16,'b');
			board.placePiece(5,17,'b');
			board.placePiece(5,18,'b');
			expect(board.winner()).to.equal('Black');
		});
	});

});