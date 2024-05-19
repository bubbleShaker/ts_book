// type User = {
//   name: string;
//   age: number;
//   premiumUser: boolean;
// }

// const data: string = `
// uhyo,26,1
// John Smith,17,0
// Mary Sue,14,1
// `;

// let users:Array<User>=[];

// for(const d of data.split("\n")){
//   if(d.length==0){
//     continue;
//   }
//   const da=d.split(",")
//   const obj={
//     name:da[0],
//     age:Number(da[1]),
//     premiumUser:((da[2]==="0")?false:true),
//   };
//   users.push(obj);
// }

// for (const user of users) {
//   if (user.premiumUser) {
//     console.log(`${user.name} (${user.age})はプレミアムユーザーです。`);
//   } else {
//     console.log(`${user.name} (${user.age})はプレミアムユーザーではありません。`);
//   }
// }