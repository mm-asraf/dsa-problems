function runProgram(input) {
    input = input.trim().split("\n");
    
    let testcase = +input[0];
    let line = 1;

    for(let i = 0;i < testcase;i++) {
        let arr = input[line++].trim().split(" ").map(Number);
        console.log(TomNick(arr));
    }


}

function TomNick(arr) {
    let firsthack  = 10;
    let secondhack = 20

    for(let i = 0;i < arr.length;i++) {
        if(arr[i] == arr[i]*10 || arr[i] == arr[i]*20 ) {
         return 'Yes' 
        } else {
            return 'NO'
        }
        
    }

}



if (process.env.USERNAME === "HP") {
runProgram(`5
1
2
10
25
200`);
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