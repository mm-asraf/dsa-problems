function runProgram(input) {
    input = input.trim().split("\n");
    
    let str = input[0].trim().split(" ");
    str = str.join("")

    unique(str)


}

function unique(str) {
    let len = str.length;
    let b = [];

    for(let i = 0; i < len; i++) {
        if(b.indexOf(str[i]) === -1) {
            b.push(str[i]);
        }
    }
    console.log(b.join(""))
}



if (process.env.USERNAME === "HP") {
runProgram(`my name is ankush`);
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