function runProgram(input) {
    input = input.trim().split("\n");
    
    let testCase = +input[0].trim()
    let line = 1;

    for(let i = 0;i < testCase;i++) {
        let n = +input[line++].trim()
        let arr = input[line++].trim().split(" ").map(Number)
        console.log(sumdig(arr))
    }

}

function sumdig(arr) {
 let n = arr.length;
    let sum = 0;
    while (n != 0) {
        sum = sum + n%10;
        n = parseInt(n/10);
    }
    return sum;


}



if (process.env.USERNAME === "HP") {
runProgram(`2
5
12 14 16 17 29
6
1 2 3 4 5 51`);
}

else {
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
 process.stdin.on("data", function (input) {
   read += input;
 });
process.stdin.on("end", function () {
  read = read.replace(/\n$/, "");
  read = read.replace(/\n$/,  "");
  runProgram(read);
});
 process.on("SIGINT", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
});
 }