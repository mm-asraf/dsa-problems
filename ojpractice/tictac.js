function runProgram(input) {
    input = input.trim().split("\n");
    

    let line = 1;
    for(let i = 0; i < input.length; i++) {
        let arr = input[line++].trim().split("\n");
        console.log(arr)
    }

}





if (process.env.USERNAME === "HP") {
runProgram(`x o x
            o x x
            o o o`);
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