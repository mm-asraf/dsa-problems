function runProgram(input) {
    input = input.trim().split("\n");
    let n = input[0].trim()
    
    let ans = countString(n);
    console.log(ans);

}

function countString(str) {
   if(str == "") return 0;
   return countString(str.substring(1))+1
}

if (process.env.USERNAME === "HP") {
runProgram(`masaischool`);
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