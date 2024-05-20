const repeatLength = 5;
const repeat = function<T>(element: T): T[] {
  const repeatLength = 3;

  const result: T[] = [];
  for (let i = 0; i < repeatLength; i++) {
    result.push(element);
  }
  return result;
};

console.log(repeat("a"));  // ["a", "a", "a"] と表示される
console.log(repeatLength); // 5 と表示される



// const repeatLength = 5;
// const repeat = function<T>(element: T): T[] {
//   const result: T[] = [];
//   for (let i = 0; i < repeatLength; i++) {
//     result.push(element);
//   }
//   return result;
// };

// console.log(repeat("a")); // ["a", "a", "a", "a", "a"] と表示される



// const repeat = function<T>(element: T, length: number): T[] {
//   const result: T[] = [];
//   for (let i = 0; i < length; i++) {
//     result.push(element);
//   }
//   // エラー: Cannot redeclare block-scoped variable 'result'.
//   const result = [];
//   return result;
// };



// const repeat = function<T>(element: T, length: number): T[] {
//   // この変数resultはrepeatの変数スコープに属する
//   const result: T[] = [];
//   for (let i = 0; i < length; i++) {
//     result.push(element);
//   }
//   return result;
// };

// // 関数の外には変数resultは存在しない
// // エラー: Cannot find name 'result'.
// console.log(result);



// function double<T>(func: (arg: T) => T): (arg: T) => T {
//   return (arg) => func(func(arg));
// }

// type NumberToNumber = (arg: number) => number;

// const plus2: NumberToNumber = double(x => x + 1);
// console.log(plus2(10)); // 12 と表示される



// function makeTriple<T>(x: T, y: T, z: T): T[] {
//   return [x, y, z];
// }

// const stringTriple = makeTriple("foo", "bar", "baz");
// const mixed = makeTriple("foo", 123, false);



// type Func = <T>(arg: T, num: number) => T[];

// const repeat: Func = (element, length) => {
//   const result = [];
//   for (let i = 0; i < length; i++) {
//     result.push(element);
//   }
//   return result;
// };



// function repeat<T>(element: T, length: number): T[] {
//   const result: T[] = [];
//   for (let i = 0; i < length; i++) {
//     result.push(element);
//   }
//   return result;
// }

// // resultはstring[]型となる
// const result = repeat("a", 5);



// const repeat = <T extends {
//   name: string;
// }>(element: T, length: number): T[] => {
//   const result: T[] = [];
//   for (let i = 0; i < length; i++) {
//     result.push(element);
//   }
//   return result;
// }

// type HasNameAndAge = {
//   name: string;
//   age: number;
// }

// // これはOK
// console.log(repeat<HasNameAndAge>({name: "uhyo",age: 26,}, 3));
// // これはコンパイルエラー
// // // エラー: Type 'string' does not satisfy the constraint '{ name: string; }'.
// // console.log(repeat<string>("a", 5));



// const pair = <Left, Right>(left: Left, right: Right): [Left, Right] => [left, right];
// // pは[string, number]型
// const p = pair<string, number>("uhyo", 26);



// const utils = {
//   repeat<T>(element: T, length: number): T[] {
//     const result: T[] = [];
//     for (let i = 0; i < length; i++) {
//       result.push(element);
//     }
//     return result;
//   }
// }



// const repeat = <T>(element: T, length: number): T[] => {
//   const result: T[] = [];
//   for (let i = 0; i < length; i++) {
//     result.push(element);
//   }
//   return result;
// }



// const repeat = function<T>(element: T, length: number): T[] {
//   const result: T[] = [];
//   for (let i = 0; i < length; i++) {
//     result.push(element);
//   }
//   return result;
// }



// function repeat<T>(element: T, length: number): T[] {
//   const result: T[] = [];
//   for (let i = 0; i < length; i++) {
//     result.push(element);
//   }
//   return result;
// }

// // ["a", "a", "a", "a", "a"] が表示される
// console.log(repeat<string>("a", 5));
// // [123, 123, 123] が表示される
// console.log(repeat<number>(123, 3));



// type User = { name: string };
// type ReadonlyUser = { readonly name: string };

// const uhyoify = (user: User) => {
//   user.name = "uhyo";
// };

// const john: ReadonlyUser = {
//   name: "John Smith"
// };
// // // これはコンパイルエラー（john.nameはreadonlyなので）
// // // エラー: Cannot assign to 'name' because it is a read-only property.
// // john.name = "Nanashi";

// // これはエラーにならない！
// uhyoify(john);

// // readonlyなのにnameが変えられてしまった
// console.log(john.name); // "uhyo" と表示される



// function fillZero(nums: number[]): void {
//   for (let i = 0; i < nums.length; i++) {
//     nums[i] = 0;
//   }
// }

// // fillZeroにはnumber[]型を与えることができる
// const nums1: number[] = [1, 10, 100];
// fillZero(nums1);
// console.log(nums1); // [0, 0, 0] と表示される

// // fillZeroにreadonly number[]型を与えるのはコンパイルエラー
// const nums2: readonly number[] = [1, 1, 2, 3, 5, 8];
// // エラー: Argument of type 'readonly number[]' is not assignable to parameter of type 'number[]'.
// // The type 'readonly number[]' is 'readonly' and cannot be assigned to the mutable type 'number[]'.
// fillZero(nums2);



// function sum(nums: readonly number[]): number {
//   let result = 0;
//   for (const num of nums) {
//     result += num;
//   }
//   return result;
// }
// // sumにはreadonly number[]型を与えることができる
// const nums1: readonly number[] = [1, 10, 100];
// console.log(sum(nums1)); // 111 と表示される
// // sumにはnumber[]型も与えることができる
// const nums2: number[] = [1, 1, 2, 3, 5, 8];
// console.log(sum(nums2)); // 20 と表示される



// type UnaryFunc = (arg: number) => number;
// type BinaryFunc = (left: number, right: number) => number;

// const double: UnaryFunc = arg => arg * 2;
// const add: BinaryFunc = (left, right) => left + right;

// // UnaryFuncをBinaryFuncとして扱うことができる
// const bin: BinaryFunc = double;
// // 20 が表示される
// console.log(bin(10, 100));



// type HasName = {
//   name: string;
// }
// type HasNameAndAge = {
//   name: string;
//   age: number;
// }

// const showName = (obj: HasName) => {
//   console.log(obj.name);
// };
// const g: (obj: HasNameAndAge) => void = showName;

// g({
//   name: "uhyo",
//   age: 26,
// });



// type SwapFunc = {
//   (arg: string): number;
//   (arg: number): boolean;
// }



// type F = (arg: string) => number;
// type G = { (arg: string): number; };



// type MyFunc = {
//   isUsed?: boolean;
//   (arg: number): void;
// };

// const double: MyFunc = (arg: number) => {
//   console.log(arg * 2)
// };

// // doubleはisUsedプロパティを持つ
// double.isUsed = true;
// console.log(double.isUsed);
// // doubleは関数として呼び出せる
// double(1000);



// // Parameter 'num' implicitly has an 'any' type.
// const f = (num) => num * 2;



// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const arr2 = nums.filter((x) => x % 3 === 0);
// console.log(arr2); // [3, 6, 9] と表示される



// type F = (arg: number) => string;
// // この関数式は引数の型を書かなくてもOK
// const xRepeat: F = (num) => "x".repeat(num);



// function range(min: number, max: number): number[] {
//   const result = [];
//   for (let i = min; i <= max; i++) {
//     result.push(i);
//   }
//   return result;
// }

// const arr = range(5, 10);
// for (const value of arr) console.log(value);



// const g = (num: number) => {
//   for (let i = 0; i < num; i++) {
//     console.log("Hello, world!");
//   }
// };
// g(5);



// const xRepeat = (num: number) => "x".repeat(num);



// type F2 = (arg: string, arg2: string) => boolean;
// // エラー: Type '(num: number) => void' is not assignable to type 'F2'.
// const fun: F2 = (num: number): void => console.log(num);



// type F = (repeatNum: number) => string;

// const xRepeat: F = (num: number): string => "x".repeat(num);



// const xRepeat = (num: number): string => "x".repeat(num);



// type User = { name: string; age: number };
// const users: User[] = [
//   { name: "uhyo", age: 26 },
//   { name: "John Smith", age: 15 }
// ];

// const names = users.map((u: User): string => u.name);
// console.log(names); // ["uhyo", "John Smith"] と表示される



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