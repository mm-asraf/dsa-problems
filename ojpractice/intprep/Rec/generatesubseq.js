function runProgram(input) {
    input = input.trim().split("\n");
    
    let n = +input[0].trim();
    let str = input[1].trim().split(" ").toString()
    let ans = subseq(str)
    console.log(ans);

}

function subseq(str) {
   

    let p = "";
    if(str === "") {
      return p;
    }

    let ch = str.charAt(0);
    subseq(p+ch,str.substring(1))
    subseq(p,str.substring(1))
   
}



if (process.env.USERNAME === "HP") {
runProgram(`4
            abcd`);
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