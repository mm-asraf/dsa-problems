function runProgram(input) {
    input = input.trim().split('\n');

    let n = +input[0];
    console.log(fibo(n));

}

function fibo(n) {
    if(n == 0 || n ==1){
        return n;
    }
    return fibo(n-1) + fibo(n-2)
}



if (process.env.USERNAME === 'HP') {
runProgram(`5`);
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