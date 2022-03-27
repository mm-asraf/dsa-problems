function runProgram(input) {
    input = input.trim().split('\n');

    let str = input[0].trim().split("").map(Number);
    str.sort((a,b) => b-a)
    console.log(str.join(" "));

}





if (process.env.USERNAME === 'HP') {
runProgram(`574674546476`);
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