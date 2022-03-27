function runProgram(input) {
    input = input.trim().split('\n');
    let n = +input[0];
    let ans = isPrime(n);
    console.log(ans);

}

let isPrime = (arr)=> {
    let count = 0;
    for(let i=0; i<=arr; i++) {
        if(arr%i==0){
            count++;
        }
    }
    if(count==2){
        return "Yes"
    }else{
        return "No"
    }
}



if (process.env.USERNAME === 'HP') {
runProgram(`13`);
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