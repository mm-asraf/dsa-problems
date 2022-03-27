function runProgram(input) {
    input = input.trim().split("\n")
    
    let str = input[0].trim().split(" ").toString()

    let ans = longestSub(str)
    console.log(ans)

}

function longestSub(str) {
    let count = 0
    for(let i = 0; i < str.length; i++) {
        for(let j = i; j < str.length; j++) {
            if(str.charAt[i] == str.charAt[j]) {
                count++
            }
        }
    }
    return count
}



if (process.env.USERNAME === "HP") {
runProgram(`thisracecarisgood`);
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