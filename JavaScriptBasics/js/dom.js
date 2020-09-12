'use strict';
// #02 要素を操作してみよう
// #03 複数の要素を取得してみよう
// #04 要素の取得方法を理解しよう
// #05 addEventListener()を使ってみよう

{

  document.querySelector('button').addEventListener('click', () => {
    document.getElementById('target').textContent = 'Changed!';
  });

}