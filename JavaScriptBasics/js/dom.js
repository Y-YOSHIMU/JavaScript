'use strict';
// #02 要素を操作してみよう

{
  function update() {
    // document.querySelector('h1').textContent = 'Changed!';
    // document.querySelector('#target').textContent = 'Changed!';
    document.getElementById('target').textContent = 'Changed!';
  }

  setTimeout(update, 1000);
}