function runProgram(input) {
    input = input.trim().split('\n');

    let [n1,n2] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);

    countSuchPair(arr,n2)

}

function countSuchPair(arr,n2) {
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            
            if(arr[i]+arr[j] == n2) {
                count++;
            }
        }
    }
    console.log(count)
}



if (process.env.USERNAME === 'HP') {
runProgram(`5 9
3 0 6 2 7`);
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