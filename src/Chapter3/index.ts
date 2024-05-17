// これらはOK
let val: {} = 123;
val = "foobar";
val = { num: 1234 };
// // これはコンパイルエラー
// val = null;
// // これもコンパイルエラー
// val = undefined;



// const str = "Hello, world!";
// console.log(str.length); // 13 と表示される



// const map: Map<string, number> = new Map();
// map.set("foo", 1234);
// console.log(map.get("foo")); // 1234 と表示される
// console.log(map.get("bar")); // undefined と表示される



// const date = new Date("2020-02-03T15:00:00+09:00");
// const timeNum = date.getTime();
// console.log(timeNum); // 1580709600000 と表示される

// const date2 = new Date(timeNum);
// console.log(date2); // Mon Feb 03 2020 15:00:00 GMT+0900 (日本標準時) と表示される
// console.log(Date.now()); // 現在時刻を表す数値が表示される



// const d = new Date("2020-02-03T15:00:00+09:00");
// console.log(d);



// const d = new Date();
// console.log(d); // 現在の日付と時刻が表示される



// const arr = [1, 1, 2, 3, 5, 8, 13];

// const [first, second, third, ...rest] = arr;
// console.log(first); // 1 が表示される
// console.log(second); // 1 が表示される
// console.log(third); // 2 が表示される
// console.log(rest); // [3, 5, 8, 13] が表示される



// const obj = {
//   foo: 123,
//   bar: "string",
//   baz: false,
// };

// const { foo, ...restObj } = obj;

// console.log(foo); // 123 が表示される
// console.log(restObj); // { bar: "string", baz: false } が表示される



// type NestedObj = {
//   obj?: {
//     foo: number
//   }
// };
// const nested1: NestedObj = {
//   obj: { foo: 123 }
// };
// const nested2: NestedObj = {};

// // 変数foo1には123が代入される
// const { obj: { foo: foo1 } = { foo: 500 } } = nested1;
// // 変数foo2には500が代入される
// const { obj: { foo: foo2 } = { foo: 500 } } = nested2;



// type Obj = { foo?: number };
// const obj1: Obj = {};
// // fooの型はnumber型
// const { foo = 500 } = obj1;



// const obj = { foo: null };

// const { foo = 123 } = obj;
// console.log(foo); // null が表示される



// type Obj = { foo?: number };
// const obj1: Obj = {};
// const obj2: Obj = { foo: -1234 };

// // 変数fooには500が代入される
// const { foo = 500 } = obj1;
// console.log(foo);
// // 変数barには-1234が代入される
// const { foo: bar = 500 } = obj2;
// console.log(bar);



// const tuple: [string, number] = ["uhyo", 26];
// // myNameはstring型、ageはnumber型になる
// const [myName, age] = tuple;

// console.log(myName); // "uhyo" と表示される
// console.log(age); // 26 と表示される



// const arr = [1, 2, 4, 8, 16, 32];

// const [, foo, , bar, , baz] = arr;
// console.log(foo); // 2 が表示される
// console.log(bar); // 8 が表示される
// console.log(baz); // 32 が表示される



// const arr = [1, 2, 4, 8, 16, 32];

// const [first, second, third] = arr;
// console.log(first); // 1 が表示される
// console.log(second); // 2 が表示される
// console.log(third); // 4 が表示される



// const nested = {
//   num: 123,
//   obj: {
//     foo: "hello",
//     bar: "world"
//   }
// }
// const { num, obj: { foo } } = nested;

// console.log(num); // 123 と表示される
// console.log(foo); // "hello" と表示される



// let tuple: [string, number] = ["foo", 0];
// tuple = ["aiueo", -555];

// const str = tuple[0]; // strはstring型
// const num = tuple[1]; // numはnumber型
// // // エラー: Tuple type '[string, number]' of length '2' has no element at index '2'.
// // const nothing = tuple[2];



// const arr = [1, 10, 100];
// for (let elm of arr) {
//   elm *= 10;
//   console.log(elm);
// }



// const arr = [1, 10, 100];

// for (const elm of arr) {
//   console.log(elm);
// }



// const arr = [1, 10, 100];
// console.log(arr.length); // 3 が表示される
// arr.push(1000);
// console.log(arr.length); // 4 が表示される



// const arr = [1, 10, 100];
// console.log(arr.includes(100)); // true と表示される
// console.log(arr.includes(50));  // false と表示される

// // これはコンパイルエラー:
// // Argument of type '"foobar"' is not assignable to parameter of type 'number'.
// console.log(arr.includes("foobar"));



// const arr: readonly number[] = [1, 10, 100];
// // エラー: Property 'push' does not exist on type 'readonly number[]'.
// arr.push(1000);



// const arr = [1, 10, 100];
// arr.push(1000);
// console.log(arr); // [1, 10, 100, 1000] と表示される

// // これはコンパイルエラー:
// // Argument of type '"foobar"' is not assignable to parameter of type 'number'.
// arr.push("foobar");



// const arr: readonly number[] = [1, 10, 100];
// // エラー: Index signature in type 'readonly number[]' only permits reading.
// arr[1] = -500;



// // number[]型
// const arr = [1, 10, 100];
// // (string | number | boolean)[]型
// const arr2 = [100, "文字列", false];



// // 簡単な型の配列
// const arr1: boolean[] = [false, true];
// // 複雑な型の配列
// const arr2: Array<{
//   name: string;
// }> = [
//   { name: "山田さん" },
//   { name: "田中さん" },
//   { name: "鈴木さん" }
// ];



// // これはOK
// const arr: number[] = [1, 10, 100];
// // これはコンパイルエラー
// // エラー: Type 'number' is not assignable to type 'string'.
// const arr2: string[] = [123, -456];



// const arr = [0, 123, -456 * 100];
// // これはOK
// arr[1] = 5400;
// // これはエラー
// // エラー: Cannot assign to 'arr' because it is a constant.
// arr = [1, 2, 345, 67];



// const arr = [0, 123, -456 * 100];
// console.log(arr); // [0, 123, -45600] が表示される
// arr[1] = 5400;
// console.log(arr); // [0, 5400, -45600] が表示される



// const arr = [0, 123, -456 * 100];
// console.log(arr[0]); // 0 が表示される
// console.log(arr[1]); // 123 が表示される



// const arr1 = [4, 5, 6];
// const arr2 = [1, 2, 3, ...arr1];

// console.log(arr2); // [1, 2, 3, 4, 5, 6] が表示される



// const arr = [0, 123, -456 * 100];
// console.log(arr);
// const arr2 = [100, "文字列", false];



// type Animal = {
//   name: string;
// }
// type HasName = {
//   name: string;
// };
// type Family<Parent extends HasName, Child extends HasName = Animal> = {
//   mother: Parent;
//   father: Parent;
//   child: Child;
// }



// type Family<Parent, Child = Animal> = {
//   mother: Parent;
//   father: Parent;
//   child: Child;
// }



// type Family<Parent = Animal, Child = Animal> = {
//   mother: Parent;
//   father: Parent;
//   child: Child;
// }
// // 通常どおりの使い方
// type S = Family<string, string>;
// // TはFamily<Animal, Animal>と同じ
// type T = Family;
// // UはFamily<string, Animal>と同じ
// type U = Family<string>;



// type Animal = {
//   name: string;
// };
// type Human = {
//   name: string;
//   age: number;
// };
// type Family<Parent extends HasName, Child extends Parent> = {
//   mother: Parent;
//   father: Parent;
//   child: Child;
// };

// // これはOK
// type S = Family<Animal, Human>;
// // これはエラー （AnimalはHumanの部分型ではないため）
// type T = Family<Human, Animal>;



// type Family<Parent extends HasName, Child extends HasName> = {
//   mother: Parent;
//   father: Parent;
//   child: Child;
// };
// // // エラー: Type 'number' does not satisfy the constraint 'HasName'.
// // type T = Family<number, string>;

// type T = Family<Animal, Human>;



// // エラー: Generic type 'Family' requires 2 type argument(s).
// const obj: Family = {
//   mother: 0,
//   father: 100,
//   child: "1000"
// }



// type Family<Parent, Child> = {
//   mother: Parent;
//   father: Parent;
//   child: Child;
// };
// const obj: Family<number, string> = {
//   mother: 0,
//   father: 100,
//   child: "1000"
// };



// type User<T> = {
//   name: string;
//   child: T;
// };



// type User = { name: string; age: number };
// const u: User = {
//   name: "uhyo",
//   age: 26,
//   // エラー: Type '{ name: string; age: number; telNumber: string; }' is not assignable to type 'User'.
//   //   Object literal may only specify known properties, and 'telNumber' does not exist in type 'User'.
//   telNumber: "09012345678"
// };



// type FooBar = {
//   foo: string;
//   bar: number;
// }
// type FooBarBaz = {
//   foo: string;
//   bar: number;
//   baz: boolean;
// }

// const obj: FooBarBaz = {
//   foo: "hi",
//   bar: 1,
//   baz: false
// };
// const obj2: FooBar = obj;



// const obj = {
//   foo: 123,
//   bar: "hi"
// };

// type T = typeof obj;
// const obj2: T = {
//   foo: -50,
//   bar: ""
// };



// const num: number = 0;
// // 型Tはnumber型
// type T = typeof num;
// // fooはnumber型の変数となる
// const foo: T = 123;



// type MyObj = {
//   readonly foo: number;
// }
// const obj: MyObj = { foo: 123 };
// // エラー: Cannot assign to 'foo' because it is a read-only property.
// obj.foo = 0;



// type MyObj = {
//   foo: boolean;
//   bar: boolean;
//   baz?: number;
// }

// const obj: MyObj  = { foo: false, bar: true };
// const obj2: MyObj = { foo: true, bar: false, baz: 1234 };

// console.log(obj.baz); // undefined と表示される
// console.log(obj2.baz); // 1234 と表示される

// // console.log(obj2.baz * 1000); // これはコンパイルエラー

// if (obj2.baz !== undefined) {
//   console.log(obj2.baz * 1000); // これはOK
// }



// type MyObj = { [key: string]: number };
// const obj: MyObj = { foo: 123 };
// const num: number = obj.bar;
// // undefined と表示される
// console.log(num);



// type PriceData = {
//   [key: string]: number;
// }
// const data: PriceData = {
//   apple: 220,
//   coffee: 120,
//   bento: 500
// };
// // これはOK
// data.chicken = 250;
// // これはコンパイルエラー: Type '"foo"' is not assignable to type 'number'.
// data.弁当 = "foo";



// interface FooBarObj {
//   foo: number;
//   bar: string;
// }
// const obj: FooBarObj = {
//   foo: 0,
//   bar: "string"
// };



// type FooObj = { foo: number };
// type MyObj = FooObj;

// const obj: MyObj = { foo: 0 };



// const obj: FooBarObj = {
//   foo: 123,
//   bar: "Hello, world!"
// };
// type FooBarObj = {
//   foo: number;
//   bar: string;
// };



// type FooBarObj = {
//   foo: number;
//   bar: string;
// };
// const obj: FooBarObj = {
//   foo: 123,
//   bar: "Hello, world!"
// };



// const obj = {
//   foo: 123,
//   bar: "Hello, world!",
// };
// // エラー: Property 'hoge' does not exist on type '{ foo: number; bar: string; }'.
// console.log(obj.hoge);



// const obj = {
//   foo: 123,
//   bar: "Hello, world!",
// };
// // エラー: Type 'null' is not assignable to type 'number'.
// obj.foo = null;



// // エラー: Property 'bar' is missing in type '{ foo: number; }' but required in type '{ foo: number; bar: string; }'.
// const obj: {
//   foo: number;
//   bar: string;
// } = {
//   foo: 123,
// };


// const obj: {
//   foo: number;
//   bar: string;
// } = {
//   foo: 123,
//   // エラー: Type 'boolean' is not assignable to type 'string'.
//   bar: true,
// };



// const obj: {
//   "foo bar": number;
// } = {
//   "foo bar": 123,
// };



// const obj: {
//   foo: number;
//   bar: string;
// } = {
//   foo: 123,
//   bar: "Hello, world!"
// };



// const foo = { num: 1234 };
// const bar = foo;
// const baz = { num: 1234 };

// console.log(foo === bar); // true と表示される
// console.log(foo === baz); // false と表示される



// const foo = { obj: { num: 1234 } };
// const bar = { ...foo };
// bar.obj.num = 0;
// console.log(foo.obj.num); // 0 と表示される



// const foo = { num: 1234 };
// const bar = { ...foo }; // { num: 1234 } になる
// console.log(bar.num); // 1234 と表示される
// bar.num = 0;
// console.log(foo.num); // 1234 と表示される



// const foo = { num: 1234 };
// const bar = foo;
// console.log(bar.num); // 1234 と表示される
// bar.num = 0;
// console.log(foo.num); // 0 と表示される



// const obj1 = {
//   foo: 123,
//   bar: 456,
// };

// const obj2 = {
//   bar: -999,
//   baz: -9999,
// };

// const obj3 = {
//   ...obj1,
//   ...obj2
// };

// // obj3は { foo: 123, bar: -999, baz: -9999 }
// console.log(obj3);



// const obj1 = {
//   foo: 123,
//   bar: 456,
//   baz: 789
// };

// const obj2 = {
//   ...obj1,
//   foo: -9999,
// };

// // obj2は { foo: -9999, bar: 456, baz: 789 }
// console.log(obj2);



// const obj1 = {
//   bar: 456,
//   baz: 789
// };

// const obj2 = {
//   foo: 123,
//   ...obj1
// };

// // obj2は { foo: 123, bar: 456, baz: 789 }
// console.log(obj2);



// import { createInterface } from 'readline';

// const rl = createInterface({
//   input: process.stdin,
//   output: process.stdout
// });



// const messages = {
//   good: "0以上の数値が入力されました！",
//   bad: "負の数値を入力しないでください！"
// }

// rl.question('数値を入力してください:', (line) => {
//   const num = Number(line);
//   console.log(messages[num >= 0 ? "good" : "bad"]);
//   rl.close();
// });



// const user = {
//   name: "uhyo",
//   age: 25,
// };

// user.age = 26;
// console.log(user.age); // 26 が表示される



// const propName = "foo";
// const obj = {
//   [propName]: 123
// };

// console.log(obj.foo); // 123 と表示される



// const obj = {
//   1: "one",
//   2.05: "two point o five",
// };
// console.log(obj["1"]);    // "one" と表示される
// console.log(obj["2.05"]); // "two point o five" と表示される



// const obj = {
//   "foo": 123,
//   "foo bar": -500,
//   '↑↓↑↓': ""
// };

// console.log(obj.foo);        // 123 と表示される
// console.log(obj["foo bar"]); // -500 と表示される


// const obj = {
//   foo: 123,
//   bar: "Hello, world!"
// };

// console.log(obj.foo); // 123 と表示される
// console.log(obj.bar); // "Hello, world!" と表示される