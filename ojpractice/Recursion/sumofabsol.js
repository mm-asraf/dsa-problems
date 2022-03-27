function runProgram(input) {
    input = input.trim().split("\n");
    
    let testcase = +input[0].trim();
    let line = 1;

    for(let i = 0;i < testcase;i++) {
        let n = +input[line++].trim()
        let arr = input[line++].trim().split(" ").map(Number);
        // console.log(n,arr);
        absoluteRec(arr)
    }

}

function absoluteRec(arr) {
    let ans = 0;
   
    for(let i = 0;i < arr.length;i++) {
       ans =  arr[i] + Math.abs((arr[i+1]-arr[i]))
    }
    console.log(ans)
}




if (process.env.USERNAME === "HP") {
runProgram(`2
            3
            1 5 2
            5
            3 5 6 1 8`);
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