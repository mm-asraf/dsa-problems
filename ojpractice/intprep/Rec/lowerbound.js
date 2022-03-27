function runProgram(input) {
    input = input.trim().split("\n");
    
    let [n,k] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);

    
    let ans = lowerBoundAlgorithm(arr,k,0,n-1)
    console.log(ans);
}

function lowerBoundAlgorithm(arr,k,start,end) {
    let ans = -1;
    while(start <= end) {
        
        let mid = Math.floor(start + (end-start)/2);
        if(k === arr[mid]) {
            ans = mid;
            end = mid-1;
        }

        if(k < arr[mid]) {
            end = mid - 1;
        }else{
            start = mid + 1;
        }
    }
    return ans;
}




if (process.env.USERNAME === "HP") {
runProgram(`5 2
1 1 2 2 5`);
}

else {
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
 process.stdin.on("data", function (input) {
   read += input;
 });
process.stdin.on("end", function () {
  read = read.replace(/\n$/, "");
  read = read.replace(/\n$/,  "");
  runProgram(read);
});
 process.on("SIGINT", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
});
 }