'use strict';
// #02 要素を操作してみよう
// #03 複数の要素を取得してみよう
// #04 要素の取得方法を理解しよう
// #05 addEventListener()を使ってみよう
// #06 要素の属性を操作してみよう
// #07 classNameを操作してみよう
// #08 classListを使ってみよう
// #09 カスタムデータ属性を扱ってみよう

{

  document.querySelector('button').addEventListener('click', () => {
    const targetNode = document.getElementById('target')

    // targetNode.textContent = 'Dotinstall';
    targetNode.textContent = targetNode.dataset.translation;
  });

}