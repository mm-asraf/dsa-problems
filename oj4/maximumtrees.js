function runProgram(input) {
    input = input.trim().split('\n');

    let n = +input[0].trim();
    let arr = input[1].trim().split(" ").map(Number.parseFloat);


    let ans = maxTrees(arr, n);
    console.log(ans);
}

function maxTrees(arr) {
    let count1 = [];
    let count2 = [];
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1;j < arr.length;j++) {
            if(arr[i] > arr[j]){
                count1.push(arr[j]);
                break;
            } else {
                count2.push(arr[i])
            }
        }
    }
    console.log(count1,count2);
}





if (process.env.USERNAME === 'HP') {
runProgram(`9
10 22 9 33 21 50 41 60 80`);
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