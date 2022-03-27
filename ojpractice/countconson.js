function runProgram(input) {
    input = input.trim().split('\n');

    let str = input[0].trim().split("");
    
    console.log(countConsonent(str))

}

function countConsonent(str) {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i] != 'a' && str[i] != 'e' && str[i] != 'i' && str[i] != 'o' && str[i] != 'u') {
            count++;
        }
    }
    return count;
}



if (process.env.USERNAME === 'HP') {
runProgram(`masaischool`);
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