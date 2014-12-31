function StatusUI(nextPlayerElement, winnerElement){
  // private  
  var _nextPlayerElement = nextPlayerElement;
  var _winnerElement = winnerElement;

  // privileged
  this.nextPlayer = function(player){
    _nextPlayerElement.textContent = 'Next: ' + player;
  };

  this.winnerIs = function(winner){
    _winnerElement.textContent = 'Winner is: ' + winner;
  };

  this.clear = function(){
    _nextPlayerElement.textContent = '';
    _winnerElement.textContent = '';  
  };
}

/*
function StatusUI(nextPlayerElement, winnerElement){
  this.nextPlayerElement = nextPlayerElement;
  this.winnerElement = winnerElement;
}

StatusUI.prototype.nextPlayer = function(player){
  this.nextPlayerElement.textContent = 'Next: ' + player;
};

StatusUI.prototype.winnerIs = function(winner){
  this.winnerElement.textContent = 'Winner is: ' + winner;
};

StatusUI.prototype.clear = function(){
  this.nextPlayerElement.textContent = '';
  this.winnerElement.textContent = '';  
};
*/
