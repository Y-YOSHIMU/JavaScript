  'use strict'

// console.log('hello');
// console.log("hello");

// console.log("it's me!");
// console.log('it\'s me!');

// \nで改行、\tでtab
// console.log('hel\nlo wor\tld');

// console.log('hello' + 'world');



// #06
// console.log(10 + 3); // 13
// console.log(10 - 3); // 7
// console.log(10 * 3); // 30
// console.log(10 / 3); // 3.3333
// console.log(10 % 3); // 1
// console.log(10 ** 3); // 1000

// console.log(2 + 10 * 3); // 32
// console.log((2 + 10) * 3); // 36


// #07 定数 const


// console.log(150 * 140);
// console.log(150 * 160);

// let price = 150;
// console.log(price * 140);
// console.log(price * 160);

// #08 変数 let var

// price = 170;
// console.log(price * 140);
// console.log(price * 160);


// #09

// let price = 500;

// // price = price + 100;
// price += 100;  //600

// // price = price * 2;
// price *= 2; // 1200

// // price = price + 1;
// // price += 1;
// price++; // 1201

// // price -= 1;
// price--; // 1200

// console.log(price);


// #10 データ型

// console.log(typeof 'hello');
// console.log(typeof 5);
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null);


// #11
// console.log('5' * 3);
// console.log('5' - '3');

// console.log('5' + 3); // 文字列の結合としての+
// console.log(parseInt('5', 10) + 3); // 10進数の整数値に変換
 // console.log(parseInt('hello', 10)); //not a number NaN


// #12 比較演算子を使ってみよう

// const price = 1200;

// console.log(price > 1000); //true
// console.log(price < 1000); //false
// console.log(price >= 1000); //true
// console.log(price <= 1000); //false
// console.log(price === 1000); //false
// console.log(price !== 1000); //true

// false <- 0, null, undefined, '', false
// true <- それ以外

// console.log(Boolean(0));
// console.log(Boolean('hello'));


// #13 ifで条件分岐をしてみよう

// const score =40;

// if (score >= 80) {
//   console.log('Great!');
// } else if (score >= 60) {
//   console.log('Good.');
// } else {
//   console.log('OK...');
// }


// #14 条件演算子を使ってみよう

// const score = 90;

// score >= 80 ? console.log('Great!') : console.log('OK...');


// #15 論理演算子を使ってみよう

// const score = 60;
// const name = 'taguchi';

// // if (score >= 50) {
// //   if(name === 'taguchi') {
// //     console.log('Good job!');
// //   }
// // }

// // && なおかつ (AND)
// // || もしくは (OR)
// // !  ~ではない (NOT)

// if (score >= 50 && name === 'taguchi') {
//   console.log('Good job!');
// }


// #16 switchで条件分岐をしてみよう

// const signal = 'pink';

// // if (signal === 'red') {
// //   console.log('Stop!');
// // } else if (signal === 'yellow') {
// //   console.log('Caution!');
// // } else if (signal === 'blue') {
// //   console.log('Go!');
// // }

// switch (signal) {
//   case 'red':
//     console.log('Stop!');
//     break;
//   case 'yellow':
//     console.log('Caution!');
//     break;
//   case 'blue':
//   case 'green':
//     console.log('Go!');
//     break;
//   default:
//     console.log('Wrong signal!');
//     break;
// }



// #17 forを使ったループ処理をしよう

// for (let i = 1; i <= 10; i++) {
//   // console.log('hello');
//   // console.log('hello' + i);
//   console.log(`hello ${i}`);  //バッククオート`` shift + @
// }



// #18 whileを使ったループ処理をしよう

// let hp = 100;

// while (hp > 0) {
//   console.log(`${hp} HP left!`);
//   hp -= 15;
// }

// let hp = -50;

// do {
//   console.log(`${hp} HP left!`);
//   hp -= 15;
// } while (hp > 0);



// #19 continue,breakを使ってみよう

// for (let i = 1; i <= 10; i++) {
//   // if (i === 4) {
//   //   if (i % 3 === 0) {
//   //   continue;
//   // }
//   if (i === 4) {
//     break;
//   }
//   console.log(i);
// }



// #20 関数で処理をまとめてみよう

// function showAd() {
//   console.log('------------');
//   console.log('-----Ad-----');
//   console.log('------------');
// }

// showAd();
// console.log('Tom is great!');
// console.log('Bob is great!');
// showAd();
// console.log('Steve is great!');
// console.log('Richard is great!');
// showAd();



// #21 引数を使ってみよう


// function showAd(message = 'Ad') { // 仮引数
//   console.log('------------');
//   console.log(`--- ${message} ---`); //テンプレートリテラル
//   console.log('------------');
// }

// showAd('Header Ad'); // 実引数
// console.log('Tom is great!');
// console.log('Bob is great!');
// // showAd('Ad');
// showAd();
// console.log('Steve is great!');
// console.log('Richard is great!');
// showAd('Footer Ad');



// #22 returnで値を返してみよう

// function sum(a, b, c) {
//   // console.log(a + b + c);
//   return a + b + c;
//   console.log(a + b + c);
// }

// // sum(1, 2, 3);
// // sum(3, 4, 5);

// const total = sum(1, 2, 3) + sum(3, 4, 5);
// // console.log(total);



// #23 関数式を使ってみよう

// const sum = function(a, b, c) {
//   return a + b + c;
// };

// const total = sum(1, 2, 3) + sum(3, 4, 5);
// console.log(total);



// #24 アロー関数を使ってみよう

// const sum = (a, b, c) => a + b + c;

// const total = sum(1, 2, 3) + sum(3, 4, 5);
// console.log(total);

// const double = function(a) {
//   return a * 2;
// };

// const double = a => a * 2;

// console.log(double(12));



// #25 スコープについて理解しよう

// const x = 2;

// function f() {
//   // const x = 1;
//   console.log(x);
// }

// f();
// console.log(x);



// #26 コードをブロックで囲っておこう

// const x = 100;
// console.log(x);