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
const arr1 = [1, 2];
// console.log(arr1);//配列としてログされる
// console.log(...arr1);//配列の中身を展開する

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1); //3が出力される、forEach的な？
