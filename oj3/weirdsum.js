function runProgram(input) {
    input = input.trim().split("\n");
    var test = +input[0];
    var line = 1;

    for(let i = 0;i < test;i++) {
        let size = +input[line++].trim();
        let arr = input[line++].trim().split(" ").map(Number);
        // console.log(size,arr);

        let ans = weird(arr);
        console.log(ans)
    }
   
     
     }m

     function weird(arr) {
        if(bubble(arr)) {
           for(let i = 0;i < arr.length;i++) {
               var sum = 0;
               if(arr[i]+arr[i+1]) {
                 if(arr.length-1) {
                     sum+=arr[i]
                     continue;
                 }
               }
           }
        }

        if(sum === arr.length-1) {
            return "Yes"
        }else{
            return "No"
        }
     }


     function bubble(arr) {
        for(let i = 0;i<arr.length-1;i++) {
            for(let j = 0;j < arr.length-1-i;j++) {
                if(arr[j] > arr[j+1]) {
                    var temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1]=temp;
                }
            }
        }
        return arr.join(" ")
     }
    
    
             if (process.env.USERNAME === "HP") {
                runProgram(`3
                3
                1 2 3
                4
                0 2 1 3
                4
                2 3 6 10`);
                
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
    
     
   