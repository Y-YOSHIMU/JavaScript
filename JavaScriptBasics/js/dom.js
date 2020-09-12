'use strict';
// #02 要素を操作してみよう
// #03 複数の要素を取得してみよう

{
  function update() {
    // document.getElementById('target').textContent = 'Changed!';
    // document.querySelector('p').textContent = 'Changed!'; //一番最初の要素のみ
    // document.querySelectorAll('p')[1].textContent = 'Changed!'; //[]で指定した要素を変更
    document.querySelectorAll('p').forEach((p, index) => {
    p.textContent = `${index}番目のpです！`;
    });
  }

  setTimeout(update, 1000);
}