function runProgram(input) {
    input = input.trim().split("\n");
    
    let [rows,cols] = input[0].trim().split(" ").map(Number);
    let mat = [];
    for(let i = 1;i <= rows;i++) {
        mat.push(input[i].trim().split(" ").map(Number));
    }

    console.log(traverse(rows,cols,mat))
}

function traverse(rows,cols,mat) {

    let ans = [];
   
   for(let i = cols-1;i>=0;i--) {
       for(let j = 0;j <= rows-1;j++) {
        ans.push(mat[j][i]);
       }
    }

return ans.join(" ")

}



if (process.env.USERNAME === "HP") {
runProgram(`4 3
1 8 9
2 7 10
3 6 11
4 5 12`);
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