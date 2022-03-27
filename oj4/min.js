function runProgram(input) {
    input = input.trim().split("\n");
   
    let n = +input[0].trim().split(" ");
    let str = input[1].trim().split(" ");

    
    console.log(find_FirstNotRepeatedChar(str))
}




function find_FirstNotRepeatedChar(str) {
   
    var result = '';
    var ctr = 0;
   
    for (var x = 0; x < str.length; x++) {
      ctr = 0;
   
      for (var y = 0; y < x; y++) 
      {
        if (str[x] === str[y]) {
          ctr+= 1;
        }
      }
   
      if (ctr < 2) {
        result = str[x];
        break;
      }
    }
    return result;
  }
 


if (process.env.USERNAME === "HP") {
    runProgram(`5
    aabbc`);

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