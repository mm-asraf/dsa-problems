function runProgram(input) {
    input = input.trim().split("\n");
    
    let n = +input[0].trim();
    let line = 1;
    for(let i = 1;i < input.length;i++) {
        let [n1,n2,n3] = input[line++].trim().split(" ").map(Number)
        console.log(isTriangleAlgo(n1,n2,n3));
    }

}

function isTriangleAlgo(a,b,c) {

    if(a+b>c && b+c>a && c+a>b) {
            return 'Yes'
    }else{
        return 'No'
    }
}



if (process.env.USERNAME === "HP") {
runProgram(`4
4 5 13
7 1 8
2 5 4
2 2 2
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