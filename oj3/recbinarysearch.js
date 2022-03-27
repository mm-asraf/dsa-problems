
function runProgram(input) {
    input = input.trim().split(" ").map(Number);
    let target = +input[3]
    console.log(RecbinarySearch(input,target))
   
       
 }
 
 function RecbinarySearch(arr,target) {
     let start = 0;
     let end = arr.length - 1;

     let mid = (start + (end-start)/2);

     if(target == arr[mid]){
         return mid;
     }

     if(target < arr[mid]){
         return RecbinarySearch(arr,target,start,mid - 1)
     }
     return RecbinarySearch(arr,target,mid+1,end)
 }
 
 
 
 if (process.env.USERNAME === "HP") {
     runProgram(`3 5 0 9 8
     `);
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