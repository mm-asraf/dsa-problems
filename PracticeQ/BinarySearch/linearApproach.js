function runProgram(input) {
    input = input.trim().split("\n");
    
    let n = +input[0].trim();
    let arr = input[1].trim().split(" ").map(Number);
    let target = 23;
    console.log(linearSearchAlgo(arr,target));

}

function linearSearchAlgo(arr,target) {
    let len = arr.length;
    for(let i = 0; i <arr.length; i++) {
        if(arr[i] == target) {
            return target
        }
    }
    return -1;
}



if (process.env.USERNAME === "HP") {
runProgram(`6
8 7 12 15 71 23`);
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