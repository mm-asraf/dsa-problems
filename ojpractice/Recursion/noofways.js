function runProgram(input) {
    input = input.trim().split("\n");
    console.log(noofWays(+input))

}

function noofWays(n) {
    if( n < 0  ) return 0;
    if( n == 0  ) return 1;
    return (noofWays(n-1) + noofWays(n-2) + noofWays(n-3)) 
}



if (process.env.USERNAME === "HP") {
runProgram(`4`);
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