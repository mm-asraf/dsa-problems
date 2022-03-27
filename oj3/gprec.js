function runProgram(input) {
    input = input.trim().split(" ").map(Number);
    var b = input[0]
    var a = input[1]
    gp(b, a,1,1);
     
     }
 
    function gp(n,r,sum,i) {
        if(i>n) {
            console.log(sum.toFixed(4));
            return;
        }

        sum += 1/r**i;
        gp(n,r,sum,++i)
    }
    
             if (process.env.USERNAME === "HP") {
                runProgram(`1 1`);
                
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
    
     
   