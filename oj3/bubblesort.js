function runProgram(input) {
    input = input.trim().split("\n");
    var n = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
 //   console.log(arr)
  
      console.log(bubble(arr));
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
                 runProgram(`5
                 3 5 0 9 8`);
                 
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