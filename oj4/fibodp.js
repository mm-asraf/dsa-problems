function runProgram(input) {
  input = input.trim().split('\n');
  let n = +input[0]

  let ans = fibo(n)
  console.log(ans)



}


function fibo(n) {
  let memo = {}

  for (let i = 0; i <= n; i++) {
    if (i < 2) {
      memo[i] = i;
    } else {
      memo[i] = memo[i - 2] + memo[i - 1]
    }
  }

  return memo[n];
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