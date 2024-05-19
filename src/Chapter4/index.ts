type User = { name: string; age: number };
const users: User[] = [
  { name: "uhyo", age: 26 },
  { name: "John Smith", age: 15 }
];

const names = users.map((u: User): string => u.name);
console.log(names); // ["uhyo", "John Smith"] と表示される



// type User = { name: string; age: number };
// const getName = (u: User): string => {
//   console.log("u is", u);
//   return u.name;
// };
// const users: User[] = [
//   { name: "uhyo", age: 26 },
//   { name: "John Smith", age: 15 }
// ];

// const names = users.map(getName);
// console.log(names); // ["uhyo", "John Smith"] と表示される



// type User = { name: string; age: number };
// const getName = (u: User): string => u.name;
// const users: User[] = [
//   { name: "uhyo", age: 26 },
//   { name: "John Smith", age: 15 }
// ];

// const names = users.map(getName);
// console.log(names); // ["uhyo", "John Smith"] と表示される



// function foo(): void {}
// const bar = (): void => {};

// console.log(foo.name); // "foo" と表示される
// console.log(bar.name); // "bar" と表示される



// const toLowerOrUpper = (str: string, upper: boolean = false): string => {
//   if (upper) {
//     return str.toUpperCase();
//   } else {
//     return str.toLowerCase();
//   }
// }

// console.log(toLowerOrUpper("Hello"));        // "hello" と表示される
// console.log(toLowerOrUpper("Hello", false)); // "hello" と表示される
// console.log(toLowerOrUpper("Hello", true));  // "HELLO" と表示される



// const toLowerOrUpper = (str: string, upper?: boolean): string => {
//   if (upper) {
//     return str.toUpperCase();
//   } else {
//     return str.toLowerCase();
//   }
// }

// console.log(toLowerOrUpper("Hello"));        // "hello" と表示される
// console.log(toLowerOrUpper("Hello", false)); // "hello" と表示される
// console.log(toLowerOrUpper("Hello", true));  // "HELLO" と表示される
// console.log(toLowerOrUpper("Hello", undefined)); // "hello" と表示される



// const sum3 = (a: number, b: number, c: number) => a + b + c;

// const nums: [number, number, number] = [1, 2, 3];
// console.log(sum3(...nums)); // 6 と表示される



// const sum3 = (a: number, b: number, c: number) => a + b + c;

// const nums = [1, 2, 3];
// // エラー: A spread argument must either have a tuple type or be passed to a rest parameter.
// console.log(sum3(...nums));



// const sum = (...args: number[]): number => {
//   let result = 0;
//   for (const num of args) {
//     result += num;
//   }
//   return result;
// };

// const nums = [1, 2, 3, 4, 5];

// console.log(sum(...nums)); // 15 が表示される



// const sum = (base: number, ...args: number[]): number => {
//   let result = base * 1000;
//   for (const num of args) {
//     result += num;
//   }
//   return result;
// }

// console.log(sum(1, 10, 100)); // 1110 と表示される
// console.log(sum(123, 456));   // 123456 と表示される
// // // エラー: Expected at least 1 arguments, but got 0.
// // console.log(sum());



// const sum = (...args: number[]): number => {
//   let result = 0;
//   for (const num of args) {
//     result += num;
//   }
//   return result;
// };

// console.log(sum(1, 10, 100)); // 111 と表示される
// console.log(sum(123, 456));   // 579 と表示される
// console.log(sum());           // 0 と表示される



// const obj = {
//   // メソッド記法
//   double(num: number): number {
//     return num * 2;
//   },
//   // 通常の記法 + アロー関数
//   double2: (num: number): number => num * 2,
// };

// console.log(obj.double(100));  // 200 と表示される
// console.log(obj.double2(-50)); // -100 と表示される



// type Human = {
//   height: number;
//   weight: number;
// };
// type ReturnObj = {
//   bmi: number
// }
// // 正しい書き方
// const calcBMIObject = ({
//   height, weight
// }: Human): ReturnObj => ({
//   bmi: weight / height ** 2
// });

// // これはコンパイルエラーが発生
// // エラー: A function whose declared type is neither 'void' nor 'any' must return a value.
// const calcBMIObject2 = ({
//   height, weight
// }: Human): ReturnObj => {
//   bmi: weight / height ** 2
// };



// type Human = {
//   height: number;
//   weight: number;
// };
// // const calcBMI = ({height, weight}: Human): number => {
// //   return weight / height ** 2;
// // };
// const calcBMI = ({height, weight}: Human): number => weight / height ** 2;
// const uhyo: Human = { height: 1.84, weight: 72 };
// // 21.266540642722116 と表示される
// console.log(calcBMI(uhyo));



// type Human = {
//   height: number;
//   weight: number;
// };
// const calcBMI = function({ height, weight }: Human): number {
//   return weight / height ** 2;
// };
// const uhyo: Human = { height: 1.84, weight: 72 };
// // 21.266540642722116 と表示される
// console.log(calcBMI(uhyo));



// type Human = {
//   height: number;
//   weight: number;
// };
// const calcBMI = function(human: Human): number {
//   return human.weight / human.height ** 2;
// };
// const uhyo: Human = { height: 1.84, weight: 72 };
// // 21.266540642722116 と表示される
// console.log(calcBMI(uhyo));



// function helloWorldNTimes2(n: number): void {
//   if (n >= 100) {
//     console.log(`${n}回なんて無理です！！！`);
//     return;
//   }
//   for (let i = 0; i < n; i++) {
//     console.log("Hello, world!");
//   }
// }

// helloWorldNTimes2(5);
// helloWorldNTimes2(150);



// function helloWorldNTimes(n: number): void {
//   for (let i = 0; i < n; i++) {
//     console.log("Hello, world!");
//   }
// }

// helloWorldNTimes(5);



// console.log(range(5, 10)); // [5, 6, 7, 8, 9, 10] と表示される

// function range(min: number, max: number): number[] {
//   const result = [];
//   for (let i = min; i <= max; i++) {
//     result.push(i);
//   }
//   return result;
// }



// function range(min: number, max: number): number[] {
//   const result = [];
//   for (let i = min; i <= max; i++) {
//     result.push(i);
//   }
//   return result;
// }

// console.log(range(5, 10)); // [5, 6, 7, 8, 9, 10] と表示される