function runProgram(input) {
    input = input.trim().split('');

    let count1 = 0;
    for(let i = 0; i < input.length; i++) {
        count1+=input[i];
    }

    let count2 = 0;

    for(let i = input.length - 1; i >= 0; i--) {
        count2+=input[i];
    }

    if(count1 == count2) {
        console.log("Yes")
    }else {
        console.log("No");
    }
}





if (process.env.USERNAME === 'HP') {
runProgram(`1221`);
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