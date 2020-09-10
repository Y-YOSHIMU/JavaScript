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



// #15 変数を代入してみよう
// #16 変数の挙動を理解しよう

// {
//   // let x = 1;
//   // let y = x;
//   // x = 5;
//   // console.log(x);
//   // console.log(y);

//   // let x = [1, 2];
//   // let y = x;
//   // x[0] = 5;
//   // console.log(x);
//   // console.log(y);

//   let x = [1, 2];
//   let y = [...x];
//   x[0] = 5;
//   console.log(x);
//   console.log(y);
// }



// #17 文字列を操作してみよう

// {
//   const str = 'hello';
//   // console.log(str.length);
//   // str.substring(開始位置<, 終了位置>);
//   // console.log(str.substring(2, 4));
//   // console.log(str[1]);
// }



// #18 join(), split()を使ってみよう
// {
//   // const d = [2019, 11, 14];
//   // console.log(d.join('/'));

//   const t = '17:08:24';
//   // console.log(t.split(':'));
//   const [hour, minute, second] = t.split(':');
//   console.log(hour);
//   console.log(minute);
//   console.log(second);
// }



// #19 数値を操作してみよう
// #20 ランダムな整数値を作ってみよう
// {
  // const scores = [10, 3, 9];
  // let sum = 0;

  // scores.forEach(score => {
  //   sum += score;
  // });

  // const avg = sum / scores.length;

  // console.log(sum);
  // console.log(avg);

  // console.log(Math.floor(avg)); //切り捨て
  // console.log(Math.ceil(avg)); //切り上げ
  // console.log(Math.round(avg)); //四捨五入
  // console.log(avg.toFixed(3)); //小数点を指定

  // console.log(Math.random());

  // 0, 1, 2
  // Math.floor(Math.random() * 3);
  // 0, ..., n
  // Math.floor(Math.random() * (n + 1));
  // min, ..., max
  // Math.floor(Math.random() * (max + 1 - min)) + min

//   console.log(Math.floor(Math.random() * 6) + 1);
// }



// #21 現在日時を扱ってみよう
// #22 特定の日時を扱ってみよう
// {
//   const d = new Date(2019, 10);
//   d.setHours(10, 20, 30);
//   d.setDate(31);
//   d.setDate(d.getDate() + 3);
//   console.log(d);

//   // console.log(`${d.getMonth() + 1} 月 ${d.getDate()} 日`);
//   // console.log(d.getTime());
// }



// #23 alert(),confirm()を使ってみよう
// {
//   // alert('hello');
//   const answer = confirm('削除しますか？');
//   if (answer) {
//     console.log('削除しました');
//   } else {
//     console.log('キャンセルしました');
//   }
// }



// #24 setInterval()を使ってみよう
// {
//   let i = 0;

//   function showTime() {
//     console.log(new Date());
//     i++;
//     if (i > 2) {
//       clearInterval(intervalId);
//     }
//   }

//   const intervalId = setInterval(showTime, 2000);
// }

// #25 setTimeout()を使ってみよう
{
  let i = 0

  function showTime() {
    console.log(new Date());
  const timeoutId = setTimeout(showTime, 1000);
  i++;
  if (i > 2) {
    clearTimeout(timeoutId);
    }
  }
  showTime();
}