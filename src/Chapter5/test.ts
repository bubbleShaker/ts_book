const getMessage = createUser("uhyo", 26);

// "uhyo (26) 「こんにちは」" と表示される
console.log(getMessage("こんにちは"));
function createUser(name:string,age:number){
  return (message:string):string=>{
    return `${name} (${age}) 「${message}」`;
  }
}



// class User {
//   name:string;
//   age:number;
//   constructor(name:string,age:number){
//     this.name=name;
//     this.age=age;
//   }
//   getMessage(message:string):string{
//     return `${this.name} (${this.age}) 「${message}」`;
//   }
// }

// const uhyo = new User("uhyo", 26);
// // "uhyo (26) 「こんにちは」" と表示される
// console.log(uhyo.getMessage("こんにちは"));