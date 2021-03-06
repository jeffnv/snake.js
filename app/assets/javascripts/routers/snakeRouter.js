(function () {
  'use strict';
  
  var SnakeGame = window.SnakeGame = (window.SnakeGame || {});

  SnakeGame.Routers.snakeRouter = Backbone.Router.extend({
    routes: {
      'play': 'startGame',
      'highscores': 'highScores'
    },

    initialize: function (options) {
      this.$rootEl = $(options.rootEl);
    },

    startGame: function () {
      SnakeGame.gameState = new SnakeGame.Models.highScore();
      var gameView = new SnakeGame.Views.gameView();
      this._swapView(gameView);
    },

    highScores: function () {
      var highScoresPage = new SnakeGame.Views.highScoresPage();
      this._swapView(highScoresPage);
    },

    _swapView: function (newView) {
      this._currentView && this._currentView.remove();
      this._currentView = newView;
      this.$rootEl.html(newView.render().$el);
    }
  });
})();