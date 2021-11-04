/**
 * const、let等の変数宣言
 */

//  var val1 = "var変数";
//  console.log(val1);

//  //　var変数は上書き可能
//  val1 = "var変数を上書き";
//  console.log(val1);

//  // var変数は再宣言可能
//  var val1 = "var変数を再宣言";
//  console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言";//Identifier 'val2' has already been declared (24:4)

// const val3 = "const変数";
// console.log(val3);

// constは上書き不可能
// val3 = "const上書き";//"val3" is read-only

// const val3 = "constを上書き";//Identifier 'val3' has already been declared (32:6)

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "じゃけえ",
//   age: 28,
// };

// val4.name = "jake";
// val4.address = "Hiroshima";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */

// const name = "じゃけぇ";
// const age = 28;
// //「私の名前はじゃけぇです。年齢は28歳です。」

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//  return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// // アロー関数
// const func2 = (str) => {
//   return str;
// };
// // const func2 = (str) => str; この様にも書ける
// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "じゃけぇ",
//   age: 28
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ["じゃけぇ", 28];
// const [name, age] = myProfile;

// const message3 = `名前は${name}です。年齢は${age}歳です`;
// console.log(message3);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// //↑初期値の設定
// sayHello("じゃけえ");

/**
 * スプレッド構文
 */
// 配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);//配列としてログされる
// // console.log(...arr1);//配列の中身を展開する

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1); //3が出力される、forEach的な？

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(...arr3);
// //arr2の3, 4, 5がまとめてarr3に代入されている

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6); // arr4のと同じ内容が出力される/コピー

// const arr7 = [...arr4, ...arr5];
// console.log(arr7); // arr4とarr5を結合した

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr4);
//コピーのやり方が上記だと、参照元ををコピーしているので、
//arr8に変更を加えた時、arr4の中身も変る
//スプレッド構文でのコピーは参照元のコピーではなく、
//中身、要素のコピーなので元の配列の中身は変更されない

/**
 * mapやfilterを使った配列の処理
 */

//～番目は～です　としたいとき
const nameArr = ["田中", "山田", "じゃけえ"];
//従来の配列の中身を出力する記述
// for (let i = 0; i < nameArr.length; i++) {
//   console.log(`${i + 1}番目は${nameArr[i]}です`);
// }
//上記も以下の1文で記述できる、mapの第二引数はindexが入る
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

//以下がmapの基本的な構文
// const nameArr2 = nameArr.map((name) => {
//   return name;
// })
// console.log(nameArr2);
//従来の記法がmapを使うことによって以下の1文で済むようになる

//ある条件になるもの(条件はfilterの中の関数で自分で指定する)を抽出できる
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });

// console.log(newNumArr);

//nameArrの自分(じゃけえ)以外に"さん"をつけて出力したい
// const newNameArr = nameArr.map((name) => {
//   if (name == "じゃけえ") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });

// console.log(newNameArr);

//mapは配列の中身を順番に処理する
//filterは配列の中身から条件に合致したものを抽出できる

/**
 * 三項演算子
 */
//ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 < 0 ? "trueです" : "falseです";
// console.log(val1);
//if~else を1行で記述できるのが三項演算子

// const num = 1300;
// // console.log(num.toLocaleString());//数字を3桁ごとにカンマを入れて表示してくれる関数

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
};
console.log(checkSum(50, 40));
