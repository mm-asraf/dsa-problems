function runProgram(input) {
    input = input.trim().split('\n');

    let str1 = input[0].trim().split(" ").sort().join("");
    let str2 = input[1].trim().split(" ").sort();
    
   let cstr = str2[0] + str2[1] + str2[2];
   
   if(str1.length === cstr.length) {
       console.log("True")
   }else{
       console.log("False");
   }
   
}






if (process.env.USERNAME === 'HP') {
runProgram(`masai school a transformation
trasnformation school a masai`);
}

else {
process.stdin.resume();
process.stdin.setEncoding('ascii');
let read = '';
 process.stdin.on('data', function (input) {
   read += input;
 });
process.stdin.on('end', function () {
  read = read.replace(/$/, '');
  read = read.replace(/$/, '');
  runProgram(read);
});
 process.on('SIGINT', function () {
  read = read.replace(/$/, '');
  runProgram(read);
  process.exit(0);
});
 }