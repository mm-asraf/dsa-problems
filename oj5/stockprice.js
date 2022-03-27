function runProgram(input) {
    input = input.trim().split("\n");
    
    let testCase = input[0].trim();
    let line = 1;

    for(let i = 0;i < testCase;i++) {
        let n = +input[line++].trim()
        let arr = input[line++].trim().split(" ").map(Number);
        // console.log(n,arr);
        maxProfit(arr)
    }


}

function maxProfit(arr) {
  
    let cp = 1;
    let check = false;
    for(let i = 0; i < arr.length-1; i++) {
        if(arr[i]== cp) {
            check = true;
        }
        if(cp == arr.length-1) {
            check = false;
        }
        
    }
    var max = Math.max(cp,arr.length)
    // console.log('this'+max)

    if(check == true) {
        let profit = max - cp;
        console.log(profit)
    }
    if(check == false) {
        console.log(0)
    }


}



if (process.env.USERNAME === "HP") {
runProgram(`2
6
7 1 5 3 6 4
4
4 3 2 1
`);
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