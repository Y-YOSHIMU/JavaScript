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

// {
//   const scores = [80, 90, 40, 70];

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
//   scores.forEach((score, index) => {
//     console.log(`Score ${index}: ${score}`);
//   })
// }



// #09 map()を使ってみよう

// {
//   const prices = [180, 190, 200];

//   // const updatedPrices = prices.map((price) => {
//   //   return price + 20;
//   // });
//   const updatedPrices = prices.map(price => price + 20);
//   console.log(updatedPrices);
// }



// #10 filter()を使ってみよう

// {
//   const numbers = [1, 4, 7, 8, 10];

//   // const evenNumbers = numbers.filter(number => {
//   //   if (number % 2 === 0) {
//   //     return true;
//   //   } else {
//   //     return false;
//   //   }
//   // });

//   const evenNumbers = numbers.filter(number => number % 2 === 0);

//   console.log(evenNumbers);
// }



// #11 オブジェクトを作ってみよう

// {
//   // const point = [100, 180];
//   // const point = {x: 100, y: 180};
//   const point = {
//   //｜ーーー｜プロパティ
//     x: 100,
// // | | |  |←値
// //  ^-名前(キー)
//     y: 180,
//   };

//   console.log(point);
// }



// #12 プロパティを操作してみよう
// #13 オブジェクトを操作してみよう
//配列とオブジェクトは別物！！
//スプレッド構文 = 値を参照する変数がある
//レスト構文 = これから値を入れる変数

// {
//   const otherProps = {
//     r: 4,
//     color: 'red',
//   }

//   const point = {
//     x: 100,
//     y: 180,
//     ...otherProps,
//   };

//   // console.log(point);

//   const {x, r, ...others} = point;
//   console.log(x);
//   console.log(r);
//   console.log(others);

//   // point.x = 120;
//   // point['y'] = 120;

//   // console.log(point.x);
//   // console.log(point['y']);

//   // point.z = 90;
//   // delete point.y;
//   // console.log(point);
// }



// #14 Object.keys()[]を使ってみよう

// {
//   const point = {
//     x: 100,
//     y: 180,
//   };

//   // const keys = Object.keys(point); // オブジェクトにはforEachが使えない為、キーを配列で取得
//   // keys.forEach(key => {
//   //   console.log(`Key: ${key} Value: ${point[key]}`);
//   // });

//   const points = [
//     {x: 30, y: 20},
//     {x: 10, y: 50},
//     {x: 40, y: 40},
//   ];

//   console.log(points[1].y);
// }