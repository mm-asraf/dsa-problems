function runProgram(input) {
    input = input.trim().split('\n');

    let [l,r] = input[0].trim().split(" ").map(Number);
    
    for(let i = l; i < r;i*=2) {
        console.log(i)
    }

}





if (process.env.USERNAME === 'HP') {
runProgram(`10 95`);
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