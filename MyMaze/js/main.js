'use strict';

// (() => {})(); 即時関数：アロー関数を括弧で囲み実行する。

(() => {
  class Maze {

  }

  const canvas = document.querySelector('canvas');
  if (typeof canvas.getContext === 'undefined') {
    return
  }

  const maze = new Maze(canvas);
  maze.render();
})();