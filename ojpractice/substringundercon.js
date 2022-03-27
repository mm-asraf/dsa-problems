function runProgram(input) {
    input = input.trim().split('\n');

    let str = input[0].trim().split(" ").toString();
    
    console.log(countSub(str))

    

}

function countSub(str) {
    let count = 0;

    for(let i = 0; i < str.length; i++) {
        for(let j = i; j < str.length; j++) {
            if(str.charAt(i) == str.charAt(j)){
                count++;
            }
        }
    }
    return count;

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