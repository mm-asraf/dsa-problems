function runProgram(input) {
    input = input.trim().split("\n");
    let testCase = +input[0].trim();
   let line = 1;
let mat = []
   for(let i = 0;i < testCase;i++) {
       let [rows] = input[line++].trim().split(" ").map(Number)
       for(let i = 2;i <= rows;i++) {
           mat.push(input[i].trim().split(" ").map(Number))
       }
   }
  
    console.log(mat);
}





if (process.env.USERNAME === "HP") {
runProgram(`1
3
1 2 3
4 5 6
7 8 9
`);
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