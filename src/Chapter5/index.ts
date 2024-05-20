class EmptyArrayError extends Error {}

try {
  getAverage([1, 2, 3]);
  getAverage([]); // ここでエラーが発生
} catch (err) {
  if (err instanceof EmptyArrayError) {
    console.log("EmptyArrayErrorをキャッチしました");
  } else {
    throw err;
  }
}

function getAverage(nums: number[]) {
  if (nums.length === 0) {
    throw new EmptyArrayError("配列が空です");
  }
  return sum(nums) / nums.length;
}

function sum(nums: number[]): number {
  let result = 0;
  for (const num of nums) result += num;
  return result;
}



// try {
//   throwNull();
// } catch (err) {
//   console.log(err, "が投げられました");
// }

// function throwNull() {
//   throw null;
// }



// console.log(sum(100));

// function sum(max: number): number {
//   try {
//     let result = 0;
//     for (let i = 1; i <= max; i++) {
//       result += i;
//     }
//     return result;
//   } finally {
//     console.log("sumから脱出します！！！！");
//   }
// }



// try {
//   console.log("エラーを発生させます");
//   throwError();
//   console.log("エラーを発生させました");
// } finally {
//   console.log("finallyブロック");
// }
// console.log("try文の後ろ");

// function throwError() {
//   throw new Error("エラーが発生しました！！！！！");
// }



// try {
//   console.log("tryブロック1")
//   throwError();
//   console.log("tryブロック2")
// } catch (err) {
//   console.log("catchブロック")
// } finally {
//   console.log("finallyブロック")
// }

// function throwError() {
//   const error = new Error("エラーが発生しました！！！！！");
//   throw error;
//   // 関数から脱出するのでここは実行されない
//   console.log("これも表示されない");
// }



// // try-catch-finallyの例
// try {
//   console.log("tryブロック")
// } catch (err) {
//   console.log("catchブロック")
// } finally {
//   console.log("finallyブロック")
// }

// // try-finallyの例
// try {
//   console.log("tryブロック")
// } finally {
//   console.log("finallyブロック")
// }



// try {
//   const bigInt = BigInt("foobar"); // ここでエラーが発生
//   // よって下のconsole.logは実行されない
//   console.log(bigInt);
// } catch(error) {
//   // SyntaxError: Cannot convert foobar to a BigInt が表示される（Node.jsの場合）
//   console.log(error);
// }



// try {
//   throwError();
//   // tryブロックから脱出するのでここは実行されない
//   console.log("これは表示されない");
// } catch (err) {
//   console.log(err);
// }



// try {
//   console.log("エラーを発生させます");
//   throwError();
//   console.log("エラーを発生させました");
// } catch (err) {
//   console.log("エラーをキャッチしました");
//   console.log(err);
// }
// console.log("おわり");

// function throwError() {
//   const error = new Error("エラーが発生しました！！！！！");
//   throw error;
// }



// function getAverage(nums: number[]) {
//   if (nums.length === 0) {
//     throw new Error("配列が空です");
//   }
//   return sum(nums) / nums.length;
// }



// console.log("エラーを発生させます");
// throwError();
// console.log("エラーを発生させました");

// function throwError() {
//   const error = new Error("エラーが発生しました！！！！！");
//   throw error;
// }



// class RepeatArray<T> extends Array<T> {
//   repeat(times: number): RepeatArray<T> {
//     const result = new RepeatArray<T>();
//     for (let i = 0; i < times; i++) {
//       result.push(...this);
//     }
//     return result;
//   }
// }

// // [1, 2] に相当するRepeatArrayを作成
// const arr = new RepeatArray(1, 2);
// // pushで [1, 2, 3] にする
// arr.push(3);
// // arr.repeat(3) は [1, 2, 3, 1, 2, 3, 1, 2, 3] に相当するRepeatArray
// const repeated = arr.repeat(3);

// // RepeatArray(9) [1, 2, 3, 1, 2, 3, 1, 2, 3] と表示される
// console.log(repeated);



// const map = new Map<string, number>();

// console.log(map instanceof Map); // true と表示される



// class A {
//   static foo = 123;
//   static bar = this.foo * 2;
//   static {
//     console.log("bar is", this.bar); // "bar is" 246 と表示される
//   }
// }



// class A {
//   foo = 123;
//   bar = this.foo + 100;
//   getFoo() {
//     return this.foo;
//   }
// }

// const obj = new A();
// console.log(obj.bar, obj.getFoo()); // 223 123 と表示される



// class A {
//   foo = 123;
//   bar = this.foo + 100;
// }

// const obj = new A();
// console.log(obj.bar); // 223 と表示される



// class User {
//   name: string;
//   #age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.#age = age;
//   }

//   public isAdult(): boolean {
//     return this.#age >= 20;
//   }
// }

// const uhyo = new User("uhyo", 25);
// const john = new User("John Smith", 15);

// // thisがuhyoに固定されたisAdult
// const boundIsAdult = uhyo.isAdult.bind(uhyo);

// console.log(boundIsAdult()); // true が表示される
// console.log(boundIsAdult.call(john)); // true が表示される



// class User {
//   name: string;
//   #age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.#age = age;
//   }

//   public isAdult(): boolean {
//     return this.#age >= 20;
//   }
// }

// const uhyo = new User("uhyo", 25);
// const john = new User("John Smith", 15);

// console.log(uhyo.isAdult()); // true が表示される

// // uhyo.isAdultを、johnをthisとして呼び出す
// console.log(uhyo.isAdult.apply(john, [])); // false が表示される



// class User {
//   name: string;
//   #age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.#age = age;
//   }

//   public isAdult(): boolean {
//     return this.#age >= 20;
//   }

//   // public filterOlder(users: readonly User[]): User[] {
//   //   return users.filter(u => u.#age > this.#age);
//   // }
//   public filterOlder(users: User[]): User[] {
//     const _this = this;
//     return users.filter(function(u) {return u.#age > _this.#age });
//   }
// }

// const uhyo = new User("uhyo", 25);
// const john = new User("John Smith", 15);
// const bob = new User("Bob", 40);
// const older = uhyo.filterOlder([john, bob]);
// // [ User { name: "Bob" } ] と表示される
// console.log(older);



// const user = {
//   name: "uhyo",
//   age: 26,
//   isAdult() {
//     return this.age >= 20;
//   }
// };

// console.log(user.isAdult()); // true が表示される
// user.age = 15;
// console.log(user.isAdult()); // false が表示される



// class User {
//   name: string;
//   #age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.#age = age;
//   }

//   public isAdult(): boolean {
//     return this.#age >= 20;
//   }
// }

// const uhyo = new User("uhyo", 26);

// const isAdult = uhyo.isAdult;
// // ランタイムエラー: attempted to get private field on non-instance
// console.log(isAdult());



// type HasName = {
//   name: string;
// }
// // エラー: Class 'User' incorrectly implements interface 'HasName'.
// //        Property 'name' is missing in type 'User' but required in type 'HasName'.
// class User implements HasName {
//   #age: number;

//   constructor(age: number) {
//     this.#age = age;
//   }

//   public isAdult(): boolean {
//     return this.#age >= 20;
//   }
// }



// type HasName = {
//   name: string;
// }

// class User implements HasName {
//   name: string;
//   #age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.#age = age;
//   }

//   public isAdult(): boolean {
//     return this.#age >= 20;
//   }
// }



// class User2 {
//   #age = 0;
// }
// class SuperUser2 extends User2 {
//   // これはOK
//   #age = 1;
// }



// class User1 {
//   private age = 0;
// }
// // エラー: Class 'SuperUser1' incorrectly extends base class 'User1'.
// //        Types have separate declarations of a private property 'age'.
// class SuperUser1 extends User1 {
//   private age = 1;
// }



// class User {
//   name: string;
//   protected age: number;
//   private _isAdult: boolean;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//     this._isAdult = age >= 20;
//   }

//   public isAdult(): boolean {
//     return this._isAdult;
//   }
// }

// class PremiumUser extends User {
//   // プレミアムユーザーは自分の年齢を編集できる
//   public setAge(newAge: number) {
//     this.age = newAge;
//   }
// }

// const uhyo = new PremiumUser("uhyo", 26);
// console.log(uhyo.isAdult()); // true が表示される

// uhyo.setAge(15);
// console.log(uhyo.isAdult()); // true が表示される



// class User {
//   name: string;
//   protected age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   public isAdult(): boolean {
//     return this.age >= 20;
//   }
// }

// class PremiumUser extends User {
//   public isAdult(): boolean {
//     return this.age >= 10;
//   }
// }
// const miniUhyo = new PremiumUser("uhyo", 15);
// const john = new User("John Smith", 15);

// console.log(miniUhyo.isAdult()); // true が表示される
// console.log(john.isAdult());     // false が表示される

// // // これはエラー: Property 'age' is protected and only accessible within class 'User' and its subclasses.
// // console.log(miniUhyo.age);



// class User {
//   name: string;
//   #age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.#age = age;
//   }

//   public isAdult(): boolean {
//     return this.#age >= 20;
//   }
// }

// class PremiumUser extends User {
//   public isAdult(): boolean {
//     // エラー: Property '#age' is not accessible outside class 'User' because it has a private identifier.
//     return this.#age >= 10;
//   }
// }



// class User {
//   name: string;
//   #age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.#age = age;
//   }

//   public isAdult(): boolean {
//     return this.#age >= 20;
//   }
// }
// class PremiumUser extends User {
//   // エラー: This member cannot have an 'override' modifier because it is not declared in the base class 'User'.
//   override rank: number = 1;

//   public override isAdult(): boolean {
//     return true;
//   }
// }



// class PremiumUser extends User {
//   rank: number = 1;

//   public override isAdult(): boolean {
//     return true;
//   }
// }



// class User {
//   name: string;
//   #age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.#age = age;
//   }

//   public isAdult(): boolean {
//     return this.#age >= 20;
//   }
// }
// class PremiumUser extends User {
//   rank: number;

//   constructor(name: string, age: number, rank: number) {
//     // エラー: 'super' must be called before accessing 'this' in the constructor of a derived class.
//     this.rank = rank;
//     super(name, age);
//   }
// }



// class PremiumUser extends User {
//   rank: number;

//   constructor(name: string, age: number, rank: number) {
//     super(name, age);
//     this.rank = rank;
//   }
// }

// const uhyo = new PremiumUser("uhyo", 26, 3);
// console.log(uhyo.name); // "uhyo" が表示される
// console.log(uhyo.rank); // 3 が表示される



// class PremiumUser extends User {
//   rank: number = 1;

//   // ここでisAdultを再宣言
//   public isAdult(): boolean {
//     return true;
//   }
// }

// const john = new User("John Smith", 15);
// const taro = new PremiumUser("Taro Yamada", 15);

// console.log(john.isAdult()); // false が表示される
// console.log(taro.isAdult()); // true が表示される



// class User {
//   name: string;
//   #age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.#age = age;
//   }

//   public isAdult(): boolean {
//     return this.#age >= 20;
//   }
// }

// class PremiumUser extends User {
//   rank: number = 1;
// }
// function getMessage(u: User) {
//   return `こんにちは、${u.name}さん`;
// }

// const john = new User("John Smith", 15);
// const uhyo = new PremiumUser("uhyo", 26);

// console.log(getMessage(john)); // "こんにちは、John Smithさん" と表示される
// console.log(getMessage(uhyo)); // "こんにちは、uhyoさん" と表示される



// const uhyo = new PremiumUser("uhyo", 26);
// console.log(uhyo.rank);      // 1 が表示される
// console.log(uhyo.name);      // "uhyo" が表示される
// console.log(uhyo.isAdult()); // true が表示される



// type HasAge = {
//   age: number;
// }

// class User {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }
// function getPrice(customer: HasAge) {
//   if (customer instanceof User) {
//     if (customer.name === "uhyo") {
//       return 0;
//     }
//   }
//   return customer.age < 18 ? 1000 : 1800;
// }

// const customer1: HasAge = { age: 15 };
// const customer2: HasAge = { age: 40 };
// const uhyo = new User("uhyo", 26);

// console.log(getPrice(customer1)); // 1000 と表示される
// console.log(getPrice(customer2)); // 1800 と表示される
// console.log(getPrice(uhyo));      // 0 と表示される



// class User {
//   name: string = "";
//   age: number = 0;
// }
// const uhyo = new User();
// // uhyoはUserのインスタンスなのでtrue
// console.log(uhyo instanceof User);
// // {}はUserのインスタンスではないのでfalse
// console.log({} instanceof User);

// const john: User = {
//   name: "John Smith",
//   age: 15,
// };
// // johnはUserのインスタンスではないのでfalse
// console.log(john instanceof User);



// class User {
//   name: string = "";
//   age: number = 0;
// }

// type MyUserConstructor = new () => User;
// // UserはMyUserConstructor型を持つ
// const MyUser: MyUserConstructor = User;
// // MyUserはnewで使用可能
// const u = new MyUser();
// // uはUser型を持つ
// console.log(u.name, u.age);



// // 型名の名前空間にItemを作成
// type Item = {
//   name: string;
//   price: number;
// }
// // 変数名の名前空間にItemを作成
// const Item: Item = {
//   name: "りんご",
//   price: 200
// };
// // このItemは型名のItem
// const orange: Item = {
//   name: "みかん",
//   price: 150
// };
// // このItemは変数名のItem
// console.log(Item);



// type Item = {
//   name: string;
//   price: number;
// }

// const apple: Item = {
//   name: "りんご",
//   price: 200
// };
// // エラー: 'apple' refers to a value, but is being used as a type here. Did you mean 'typeof apple'?
// const orange: apple = {
//   name: "みかん",
//   price: 150
// };
// // エラー: 'Item' only refers to a type, but is being used as a value here.
// console.log(Item);



// type Item = {
//   name: string;
//   price: number;
// }

// const apple: Item = {
//   name: "りんご",
//   price: 200
// };
// const orange: Item = {
//   name: "みかん",
//   price: 150
// };

// console.log(apple, orange);



// class User<T> {
//   name: string;
//   #age: number;
//   readonly data: T;

//   constructor(name: string, age: number, data: T) {
//     this.name = name;
//     this.#age = age;
//     this.data = data;
//   }
// }

// const uhyo: User<string> = new User("uhyo", 26, "追加データ");



// const User = class {
//   name: string = "";
//   age: number = 0;

//   isAdult(): boolean {
//     return this.age >= 20;
//   }
// };

// // これはOK
// const uhyo = new User();
// // エラー: 'User' refers to a value, but is being used as a type here. Did you mean 'typeof User'?
// const john: User = new User();



// class User {
//   name: string = "";
//   age: number = 0;

//   isAdult(): boolean {
//     return this.age >= 20;
//   }
// }
// // これはもちろんOK
// const uhyo: User = new User();
// // これもOK!
// const john: User = {
//   name: "John Smith",
//   age: 15,
//   isAdult: () => true
// };



// class User<T> {
//   name: string;
//   #age: number;
//   readonly data: T;
//   constructor(name: string, age: number, data: T) {
//     this.name = name;
//     this.#age = age;
//     this.data = data;
//   }

//   public isAdult(): boolean {
//     return this.#age >= 20;
//   }
// }

// // uhyoはUser<string>型
// const uhyo = new User<string>("uhyo", 26, "追加データ");
// // dataはstring型
// const data = uhyo.data;

// // johnはUser<{ num: number; }>型
// const john = new User("John Smith", 15, { num: 123 })
// // data2は{ num: number; }型
// const data2 = john.data;



// class User {
//   static adminUser: User;
//   static {
//     this.adminUser = new User();
//     this.adminUser.#age = 9999;
//   }

//   #age: number = 0;
//   getAge() {
//     return this.#age;
//   }
//   setAge(age: number) {
//     if (age < 0 || age > 150) {
//       return;
//     }
//     this.#age = age;
//   }
// }

// console.log(User.adminUser.getAge()); // 9999 と表示される


// console.log("Hello");
// class C {
//   static {
//     console.log("uhyo");
//   }
// }
// console.log("world!");



// class User {
//   name: string;
//   #age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.#age = age;
//   }

//   public isAdult(): boolean {
//     return this.#age >= 20;
//   }
// }

// const uhyo = new User("uhyo", 26);
// console.log(uhyo.name);      // "uhyo" が表示される
// console.log(uhyo.isAdult()); // true が表示される
// // エラー: Property '#age' is not accessible outside class 'User' because it has a private identifier.
// console.log(uhyo.#age);



// const User = class {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   public isAdult(): boolean {
//     return this.age >= 20;
//   }
// };
// // Userは今までと同様に使用可能
// const uhyo = new User("uhyo", 26);
// console.log(uhyo.name);      // "uhyo" が表示される
// console.log(uhyo.isAdult()); // true が表示される



// class User {
//   name: string;
//   private age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   public isAdult(): boolean {
//     return this.age >= 20;
//   }
// }

// const uhyo = new User("uhyo", 26);
// console.log(uhyo.name);      // "uhyo" が表示される
// console.log(uhyo.isAdult()); // true が表示される
// // // エラー: Property 'age' is private and only accessible within class 'User'.
// // console.log(uhyo.age);



// class User {
//   static adminName: string = "uhyo";
//   static getAdminUser() {
//     return new User(User.adminName, 26);
//   }

//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   isAdult(): boolean {
//     return this.age >= 20;
//   }
// }

// console.log(User.adminName);  // "uhyo" が表示される
// const admin = User.getAdminUser();
// console.log(admin.age);       // 26 が表示される
// console.log(admin.isAdult()); // true が表示される

// // const uhyo = new User("uhyo", 26);
// // // エラー: Property 'adminName' does not exist on type 'User'. Did you mean to access the static member 'User.adminName' instead?
// // console.log(uhyo.adminName);



// class User {
//   name: string;
//   readonly age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     // これはOK
//     this.age = age;
//   }

//   setAge(newAge: number) {
//     // エラー: Cannot assign to 'age' because it is a read-only property.
//     this.age = newAge;
//   }
// }

// const uhyo = new User("uhyo", 26);
// // エラー: Cannot assign to 'age' because it is a read-only property.
// uhyo.age = 27;



// class User {
//   name: string;
//   // エラー: Property 'age' has no initializer and is not definitely assigned in the constructor.
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//   }
// }



// class User {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   isAdult(): boolean {
//     return this.age >= 20;
//   }
// }

// const uhyo = new User("uhyo", 26);
// console.log(uhyo.name);      // "uhyo" が表示される
// console.log(uhyo.isAdult()); // true が表示される



// class User {
//   name: string = "";
//   age: number = 0;

//   isAdult(): boolean {
//     return this.age >= 20;
//   }

//   setAge(newAge: number) {
//     this.age = newAge;
//   }
// }



// // Userのインスタンスを2つ作成
// const uhyo = new User();
// const baby = new User();

// uhyo.age = 26;
// console.log(uhyo.isAdult()); // true が表示される
// console.log(baby.isAdult()); // false が表示される



// const uhyo = new User();
// console.log(uhyo.isAdult()); // false が表示される

// uhyo.setAge(26);
// console.log(uhyo.isAdult()); // true が表示される



// class User {
//   readonly name: string = "";
//   age: number = 0;
// }

// const uhyo = new User();
// // エラー: Cannot assign to 'name' because it is a read-only property.
// uhyo.name = "うひょ";



// class User {
//   name?: string;
//   age: number = 0;
// }

// const uhyo = new User();
// console.log(uhyo.name); // undefined が表示される
// uhyo.name = "うひょ";
// console.log(uhyo.name); // "うひょ" が表示される



// class User {
//   name: string = "";
//   // エラー: Property 'age' has no initializer and is not definitely assigned in the constructor.
//   age: number;
// }



// class User {
//   name: string = "";
//   age: number = 0;
// }

// const uhyo = new User();
// console.log(uhyo.name); // "" が表示される
// console.log(uhyo.age);  // 0 が表示される



// class User {
//   name: string = "";
//   age: number = 0;
// }

// // Userクラスが入ったオブジェクト
// const obj = {
//   cl: User
// };

// // new obj.cl でUserのインスタンスが作成できる
// const uhyo = new obj.cl();
// console.log(uhyo.age); // 0 が表示される



// // エラー: Class 'User' used before its declaration.
// const uhyo = new User();

// class User {
//   name: string = "";
//   age: number = 0;
// }



// class User {
//   name: string = "";
//   age: number = 0;
// }

// const uhyo = new User();
// console.log(uhyo.name); // "" が表示される
// console.log(uhyo.age); // 0 が表示される

// uhyo.age = 26;
// console.log(uhyo.age); // 26 が表示される