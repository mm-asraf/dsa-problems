function runProgram(input) {
    input = input.split('\n')
    let len = +input[0]
    let str = input[1].trim()
    let newStr = "" ,
    curr = 0;
   subSequence(str,newStr,curr)
   }



function subSequence(str,newStr,curr){
if(newStr.length > 0){
    console.log(newStr)
} 

if(curr == str.length) {
    return;
}

for(let i = curr;i < str.length;i++){
    newStr += str[i];
    subSequence(str,newStr,i+1)
    newStr = newStr.substring(0,newStr.length-1)
}
}

  if (process.env.USERNAME === "HP") {
    runProgram(`4
    abcd`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }