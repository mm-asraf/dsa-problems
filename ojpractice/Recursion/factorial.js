function runProgram(input) {
    input = input.trim().split("\n");
    console.log(fac(+input))

}

function fac(n) {
    if(n==1 || n==0) return n;
    return n*fac(n-1)
}


if (process.env.USERNAME === "HP") {
runProgram(`5`);
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