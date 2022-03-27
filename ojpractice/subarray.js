function runProgram(input) {
  input = input.trim().split('\n');

  let arr = input[1].trim().split(' ').map(Number);
  subArray(arr)

}

function subArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      var sub_arr = "";
      for (let k = i; k <= j; k++) {
        sub_arr += arr[k]

      }
      console.log(sub_arr);
    }
  }
}




if (process.env.USERNAME === 'HP') {
  runProgram(`4
1 2 3 4`);
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