function runProgram(input) {
    input = input.trim().split("\n");
    

    let [n,l] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);


    let ans = iterativeLBoundAlgo(arr,l)
    console.log(ans);

}

function iterativeLBoundAlgo(arr,l) {
    let start = 0;
    let end = arr.length - 1;
    let ans = -1;
    while(start <= end) {
        let mid = Math.floor(start + (end-start)/2);

        if(l === arr[mid]) {
            ans = mid;
            end = mid-1;
        }

        if(l < arr[mid]) {
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