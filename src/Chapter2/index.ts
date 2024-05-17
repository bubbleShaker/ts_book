const secret = process.env.SECRET ?? "default";
console.log(`secretは${secret}です`);



// import { createInterface } from 'readline';

// const rl = createInterface({
//   input: process.stdin,
//   output: process.stdout
// });



// rl.question('名前を入力してください:', (name) => {
//   const displayName = name || "名無し";
//   console.log(`こんにちは、${displayName}さん`);
//   rl.close();
// });



// const input1 = "123", input2 = "";

// const input1isNotEmpty = !!input1;
// console.log(input1isNotEmpty); // true と表示される
// const input2isNotEmpty = !!input2;
// console.log(input2isNotEmpty); // false と表示される



// const str: any = "3";

// // true が表示される（文字列が数値に変換されるので）
// console.log(str == 3);

// // false が表示される（異なる型である文字列と数値を比較しているので）
// console.log(str === 3);



// rl.question('パスワードを入力してください:', (password) => {
//   if (password === 'hogehoge') {
//     console.log('ようこそ！');
//   } else {
//     console.log('誰？');
//   }
//   rl.close();
// });



// const left: number = 1;
// const right: number = 2;

// console.log(left === right); // false が表示される
// console.log(left !== right); // true が表示される



// rl.question('名前を入力してください:', (name) => {
//   console.log("こんにちは、" + name + "さん");
//   rl.close();
// });



// let foo = 10;
// console.log(++foo); // 変動後の値 11 が表示される
// console.log(foo--); // 変動前の値 11 が表示される



// let foo = 10;
// foo++;
// console.log(foo); // 11 が表示される
// --foo;
// console.log(foo); // 10 が表示される



// const x = 123;
// const minusx = -x; // minusxはnumber型
// console.log(minusx); // -123 と表示される



// const addResult = 1024 + 314 + 500;
// console.log(addResult); // 1838 と表示される
// const discounted = addResult * 0.7;
// console.log(discounted); // 1286.6 と表示される

// const sqrt2 = 2 ** 0.5;
// console.log(sqrt2);     // 1.4142135623730951 と表示される
// console.log(sqrt2 - 1); // 0.41421356237309515 と表示される

// console.log(18 / 12);   // 1.5 と表示される
// console.log(18n / 12n); // 1n と表示される
// console.log(18 % 12);   // 6 と表示される
// console.log(18n % 12n); // 6n と表示される


// console.log(Boolean(123)); // true と表示される
// console.log(Boolean(0));   // false と表示される
// console.log(Boolean(1n));  // true と表示される
// console.log(Boolean(0n));  // false と表示される
// console.log(Boolean(""));  // false と表示される
// console.log(Boolean("foobar"));  // true と表示される
// console.log(Boolean(null)); // false と表示される
// console.log(Boolean(undefined)); // false と表示される



// // 数値から文字列へ
// const str1 = String(1234.5); // "1234.5" という文字列になる
// console.log(str1); // "1234.5" と表示される

// // 真偽値から文字列へ
// const str2 = String(true); // "true" という文字列になる
// console.log(str2); // "true" と表示される

// // nullやundefinedも文字列に変換可能
// const str3 = String(null); // "null" という文字列になる
// const str4 = String(undefined); // "undefined" という文字列になる
// console.log(str3, str4); // "null undefined" と表示される



// const bigint = BigInt("foooooo");

// console.log("bigint is ", bigint);



// const bigint1 = BigInt("1234");
// console.log(bigint1); // 1234n と表示される

// const bigint2 = BigInt(500);
// console.log(bigint2); // 500n と表示される

// const bigint3 = BigInt(true);
// console.log(bigint3); // 1n と表示される



// const num1 = Number(true);
// console.log(num1); // 1 と表示される
// const num2 = Number(false);
// console.log(num2); // 0 と表示される
// const num3 = Number(null);
// console.log(num3); // 0 と表示される
// const num4 = Number(undefined);
// console.log(num4); // NaN と表示される



// import { createInterface } from 'readline';

// const rl = createInterface({
//   input: process.stdin,
//   output: process.stdout
// });



// rl.question('数値を入力してください:', (line) => {
//   const num = Number(line);
//   // 1000を足して出力
//   console.log(num + 1000);
//   rl.close();
// });



// rl.question('数値を入力してください:', (line) => {
//   // 1000を足して出力
//   console.log(line+1000);
//   rl.close();
// });



// rl.question('文字列を入力してください:', (line) => {
//   // 文字列が入力されるとここが実行される
//   console.log(`${line} が入力されました`);
//   rl.close();
// });



// const val1 = null;
// const val2 = undefined;
// console.log(val1, val2); // null undefined と表示される



// const no: boolean = false;
// const yes: boolean = true;
// console.log(yes, no); // true false と表示される



// console.log("Hello \u{796d} world!");



// console.log(`Hello \nworld`);



// console.log("Hello \\world/");



// const str1: string = "Hello";
// const str2: string = "world!";
// console.log(`${str1}, ${str2}`); // "Hello, world!" と表示される



// const message: string = `Hello
// world!`;
// console.log(message);



// const million = 1_000_000;
// // 1000000 と表示される
// console.log(million);



// const big = 1e8;
// const small = 4e-5;
// // 100000000 0.00004 と表示される
// console.log(big, small);



// const binary = 0b1010;    // 2進数リテラル
// const octal = 0o755;      // 8進数リテラル
// const hexadecimal = 0xff; // 16進数リテラル
// // 10 493 255 と表示される
// console.log(binary, octal, hexadecimal);



// const greeting = "Hello, ",
//   target = "world!",
//   text = greeting+target;
// console.log(text);



// const greeting = "Hello, ";
// const target = greeting;
// console.log(greeting+target);



// const greeting = "Hello, ";
// const target = "world!";
// console.log(greeting+target);