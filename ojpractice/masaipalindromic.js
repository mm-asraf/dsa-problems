function runProgram(input) {
    input = input.trim().split('\n');

    let str = input[0].trim().split(" ").toString();
    masaiPalindromic(str)
}

function masaiPalindromic(str) {
    for (let i = 0; i < str.length; i++) {
        for(let j = i; j < str.length; j++) {
            let sub = "";
           for(let k = i; k <=j; k++) {
             sub+=str[k];
           }
           console.log(sub);
        }
    }
}




if (process.env.USERNAME === 'HP') {
runProgram(`thisracecarisgood`);
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