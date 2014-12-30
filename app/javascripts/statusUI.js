var StatusUI = StatusUI || {};

(function(StatusUI){
  StatusUI.create = function(nextPlayerElement, winnerElement) {
    return {
      nextPlayer: function(player) {
        nextPlayerElement.textContent = 'Next: ' + player;
      },

      winnerIs: function(winner) {
        winnerElement.textContent = 'Winner is: ' + winner;
      },

      clear: function() {
        nextPlayerElement.textContent = '';
        winnerElement.textContent = '';
      }
    };
  };
})(StatusUI);
