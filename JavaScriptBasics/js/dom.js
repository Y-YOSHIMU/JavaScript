'use strict';
// #02 要素を操作してみよう
// #03 複数の要素を取得してみよう
// #04 要素の取得方法を理解しよう
// #05 addEventListener()を使ってみよう
// #06 要素の属性を操作してみよう
// #07 classNameを操作してみよう
// #08 classListを使ってみよう
// #09 カスタムデータ属性を扱ってみよう
// #10 要素を追加してみよう
// #11 要素の複製、挿入をしてみよう
// #12 要素の削除をしてみよう

{

  document.querySelector('button').addEventListener('click', () => {
    const item1 = document.querySelectorAll('li')[1];

    // item1.remove();
    // 親Node.removeChild(削除するNode)
    document.querySelector('ul').removeChild(item1);
  });

}