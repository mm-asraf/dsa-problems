function runProgram(input) {
    input = input.trim().split("\n");
    
    let [rows,cols] = input[0].trim().split(" ").map(Number);
    let mat = [];
    for ( let i = 1; i <= rows;i++) {
        mat.push(input[i].trim().split(" ").map(Number))
       
    }

    console.log(transposeAlgo(rows,cols,mat))

}

function transposeAlgo(rows,cols,mat) {

    let arr=[];
    for(let i=0;i<=rows;i++){
        // arr.push([])
        for(let j=0;j<=cols;j++){
            arr.push(mat[j][i])
        }
        
    }
    
    return arr.join(' ');
   
}



if (process.env.USERNAME === "HP") {
runProgram(`5 4
0 0 0 0
1 1 1 1
2 2 2 2
3 3 3 3
4 4 4 4`);
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