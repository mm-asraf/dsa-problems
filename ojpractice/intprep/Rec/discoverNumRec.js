function runProgram(input) {
    input = input.trim().split("\n");
    
    let [n,q] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    arr.sort((a,b) => (a-b))

    let line = 2;
    for(let i = 0; i < q;i++) {
        let x = +input[line++].trim();

    }


}

function discoverRecAlgorithm(arr,k,start,end) {
    while(start <= end) {
        let mid = Math.floor(start + (end-start)/2);
    
        if(k === arr[mid]) {
            return "YES"
        }

        if(k < arr[mid]) {
            return discoverRecAlgorithm(arr,k,start,mid-1);
        }else if(k > arr[mid]) {
            return discoverRecAlgorithm(arr,k,mid+1,end)
        }else{
            return mid;
        }
        
    }
    return "NO"
}



if (process.env.USERNAME === "HP") {
runProgram(`5 10
50 40 30 20 10
10
20
30
40
50
60
70
80
90
100`);
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