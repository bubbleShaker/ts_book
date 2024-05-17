for(let i=1;i<=100;i++){
  if(i%15===0){
    process.stdout.write("FizzBuzz");
  }else if(i%3===0){
    process.stdout.write("Fizz");
  }else if(i%5===0){
    process.stdout.write("Buzz");
  }else{
    process.stdout.write(String(i));
  }
  process.stdout.write(((i!==100)?" ":""));
}