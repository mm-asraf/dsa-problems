function runProgram(input) {
    input = input.trim().split("\n");
    var n = +input[0];
   
    var arr = input[1].trim().split(" ").map(Number);
  
    quickSort(arr,0,arr.length-1);
    console.log(arr.join(" "));
}


function quick(arr, start, end){
    let pivotVal = arr[end];
    let pivotInd = start; 

    for (let i = start; i < end; i++) {
        if (arr[i] < pivotVal) {
            [arr[i], arr[pivotInd]] = [arr[pivotInd], arr[i]];
            pivotInd++;
            
            }
        }
        [arr[pivotInd], arr[end]] = [arr[end], arr[pivotInd]] 
        return pivotInd;
    };

    function quickSort(arr, start, end) {
        if (start >= end) {
            return;
        }
        
        let index = quick(arr, start, end);
       
        quickSort(arr, index + 1, end);
        quickSort(arr, start, index - 1);
       
    }
    
    if (process.env.USERNAME === "HP") {
       runProgram(`4
       5 3 0 9 8`);
       
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
       
        
       
    


  

  
 
  
     
  
    
     
   

