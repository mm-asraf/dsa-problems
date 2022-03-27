function runProgram(input) {
    input = input.trim().split('\n');

    let str = input[0].trim().split(" ").toString();
    let ans = subString(str)
    console.log(ans);

}



function subString(str) {
    for (let i = 0; i < str.length; i++) {
        for (let j = i ; j < str.length; j++) {
            var count = "";
           
            for (let k = i; k <= j; k++) {
                count+=str[k];
                
                }
            
            
            console.log(count);
          }
    }
}



if (process.env.USERNAME === 'HP') {
runProgram(`abcab`);
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