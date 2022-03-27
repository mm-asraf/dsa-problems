function runProgram(input) {
    input = input.trim().split("\n")
    let n = input[0].trim().split(" ").map(Number);
    let n1 = +n[0];
    let k = +n[1];
  
    let arr = input[1].trim().split(" ").map(Number);

  let ans = binarySearch(arr,0,arr.length-1,k)
  console.log(ans)
}

function binarySearch(arr,start,end,target){
   while(start <= end) {
       let mid = Math.floor(start + (end-start)/2);
       if (start > end) {
        return -1;
    }
       if(target === arr[mid]){
        return 1;
    }
      
       if (target < arr[mid]){
       return binarySearch(arr, start, mid - 1, target);
       }
       if(target > arr[mid]){
       return binarySearch(arr, mid + 1, end, target);
       }
       else{
           return mid;
       }
   }
   return -1;
  
}

if (process.env.USERNAME === "HP") {
    runProgram(`5 2
    8 4 1 9 11`);

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