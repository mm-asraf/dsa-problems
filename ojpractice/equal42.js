function runProgram(input) {
    input = input.trim().split('\n');

    let n = +input[0].trim();
    let arr = input[1].trim().split(" ").map(Number);
    console.log(equal(arr))

}

function equal(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == 42) {
            return "Yes"
        }else {
            return "No"
        }
    }
}



if (process.env.USERNAME === 'HP') {
runProgram(`5
3 7 0 9 8`);
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