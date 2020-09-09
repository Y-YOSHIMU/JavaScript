'use strict';

// #01 配列を作ってみよう
// #02 配列の要素にアクセスしてみよう
// #03 配列とループ処理を組み合わせよう
// #04 配列の要素を変更してみよう
// #05 splice()で配列を変更してみよう
// #06 スプレッド構文を使ってみよう


// {
  // const score1 = 80;
  // const score2 = 90;
  // const score3 = 40;

  // const otherScores = [10, 20];
  // const scores = [80, 90, 40, 70, ...otherScores];
  // // console.log(scores);
  // function sum(a, b, c) {
  //   console.log(a + b + c);
  // }
  // sum(...otherScores);

  // scores.splice(1, 1, 40,50);

  // scores.push(60, 50);
  // scores.shift();
  // 90, 40, 70, 60, 50

  // console.log(scores[1]); // 指定した要素を取り出す

  // scores[2] = 44; // 要素の値変更
  // console.log(scores);

  // console.log(scores.length);

  // console.log(`Score: ${scores[0]}`);
  // console.log(`Score: ${scores[1]}`);
  // console.log(`Score: ${scores[2]}`);
  // for (let i = 0; i < 3; i++) {
//   for (let i = 0; i < scores.length; i++) {
//     console.log(`Score ${i}: ${scores[i]}`);
//   }
// }



// #07 分割代入を使ってみよう
// #08 forEach()を使ってみよう

{
  const scores = [80, 90, 40, 70];

  // const [a, b, c, d] = scores;
  // console.log(a);
  // console.log(b);
  // console.log(c);
  // console.log(d);

  // const [a, b, ...others] = scores;
  // console.log(a);
  // console.log(b);
  // console.log(others);

// 値の交換
  // let x = 30;
  // let y = 70;
  // console.log(x);
  // console.log(y);
  // [x, y] = [y, x];
  // console.log(x);
  // console.log(y);

  // scores.forEach((score) => {
  scores.forEach((score, index) => {
    console.log(`Score ${index}: ${score}`);
  })
}