
function runProgram(input) {
    input = input.trim().split("\n");
    let n = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
    
    let ans = bubbleSort(arr,n);
    console.log(ans)
       
 }
 
 
 function bubbleSort(arr,n) {
     
     for(let i = 0;i < n;i++) {
       let swap = false;
         for(let j = 1;j < n-i;j++){
             if(arr[j] < arr[j-1]){
              let temp = arr[j];
              arr[j] = arr[j-1];
              arr[j-1] = temp;
              swap = true;
             }
         }
         if(!swap) {
             break;
         }
         
     }
     return arr.join(" ");
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