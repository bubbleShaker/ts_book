// function map<T,U>(array: T[], callback: (item:T)=>U): U[] {
//   let ret:Array<U> = [];
//   for(const elem of array){
//     ret.push(callback(elem));
//   }
//   return ret;
// }
// const data = [1, -3, -2, 8, 0, -1];

// const result: boolean[] = map(data, (x) => x >= 0);
// // [true, false, false, true, true, false] と表示される
// console.log(result);



// function map(array: number[], callback: (item:number)=>number): number[] {
//   let ret:Array<number> = [];
//   for(const elem of array){
//     ret.push(callback(elem));
//   }
//   return ret;
// }

// const data = [1, 1, 2, 3, 5, 8, 13];

// const result = map(data, (x) => x * 10);
// // [10, 10, 20, 30, 50, 80, 130] と表示される
// console.log(result);



// function getFizzBuzzString(i:number):string{
//   if (i % 3 === 0 && i % 5 === 0) {
//     return("FizzBuzz");
//   } else if (i % 3 === 0) {
//     return("Fizz");
//   } else if (i % 5 === 0) {
//     return("Buzz");
//   } else {
//     return String(i)
//   }
// }
// function sequence(start:number,end:number):number[]{
//   const ret:Array<number>=[];
//   for(let i=start;i<=end;i++){
//     ret.push(i);
//   }
//   return ret;
// }
// for (const i of sequence(1,100)) {
//   const message = getFizzBuzzString(i);
//   console.log(message);
// }



// for (let i = 1; i <= 100; i++) {
//   const message = getFizzBuzzString(i);
//   console.log(message);
// }