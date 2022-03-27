function runProgram(input) {
    input = input.trim().split('\n');

    let str = input[0].trim().split(" ")
   
  education(str)

}

function education(str) {
    let str2 = [];
  for(let i = str.length - 1; i >= 0; i--) {
        str2.push(str[i])
  }
    console.log(str2.join(" "));
}




if (process.env.USERNAME === 'HP') {
runProgram(`A Transformation in education`);
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