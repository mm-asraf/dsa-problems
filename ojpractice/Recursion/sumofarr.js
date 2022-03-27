function runProgram(input) {
    input = input.trim().split("\n");
    
    let testcase = +input[0];
    let line = 1;

    for(let i = 0;i < testcase;i++) {
        let n = +input[line++].trim();
        let arr = input[line++].trim().split(" ").map(Number);
        console.log(sum(arr));
    }

}

function sum(arr) {
 
    // if(arr.length === 1) return arr[0]
    if(arr.length === 0) return 0
    return arr[0] + sum(arr.slice(1,arr.length))

}



if (process.env.USERNAME === "HP") {
runProgram(`3
5
6 3 8 2 -4
5
-10 -7 10 2 -2
5
-4 -5 6 -3 9`);
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