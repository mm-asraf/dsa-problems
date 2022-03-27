function runProgram(input) {
    input = input.trim().split('\n');

    let n = +input[0]
    let arr = input[1].trim().split(" ").map(Number);
    arr.sort((a,b) => a-b)
   console.log(arr[0])
   console.log(arr[arr.length - 1]);

}
   




if (process.env.USERNAME === 'HP') {
runProgram(`11
55 -5 -8 2 0 9 4 5 6 9 1`);
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