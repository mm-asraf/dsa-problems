
function runProgram(input) {
    var input = input.trim().split("\n");
    var testCase = +input[0];
    var line = 1;

    for(let i = 0;i < testCase;i++) {
        var size = +input[line++];
      
        var arr = input[line++].trim().split(" ").map(Number);
        
        
    }
    console.log(nearestGreater(arr));

}

      
function nearestGreater(arr) {
    let result = [];
  
    for (let i = 0; i < arr.length; i++) {
      let flag = false;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
          result.push(arr[j]);
          flag = true;
          break;
        }
      }
      if (!flag) {
        result.push(-1);
      }
    }
  
    return result.join(" ");
  }

      
     
      









if (process.env.USERNAME === "HP") {
    runProgram(`1
    5
    5 4 1 3 2 `);
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