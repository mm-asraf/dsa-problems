function runProgram(input) {
    input = input.trim().split('\n');

    let n = +input[0].trim();
    let arr = input[1].trim().split(" ").map(Number);
    let target = +input[2].trim();
    // console.log(arr);
   let ans =  sumExit(arr,target);
   console.log(ans);

}

function sumExit(arr,target) {
  
  for(let i = 0; i < arr.length; i++) {
    for(let j = i+1; j < arr.length; j++) {
      if(arr[i]+arr[j] == target) {
      
      }
    }
  }
}




if (process.env.USERNAME === 'HP') {
runProgram(`9
1 2 3 4 5 6 7 8 9
5`);
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