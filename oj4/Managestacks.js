function runProgram(input) {
    input = input.trim().split("\n");
    var N = +input[0]
    var arr = input[1].trim().split(" ").map(Number).sort((a,b) =>  a-b);
    
     var sum = 0;
     for(var i=0;i<N;i++){
         sum=sum+arr[i]*i
     }
     console.log(sum)

}

function neelamsJourney(arr) {
    let sum = 0;
    let less = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (less <= arr[i]) {
            sum = sum + less
        }
        else {
            less = arr[i]
            sum = sum + less
        }
    }
    return sum;
}

if (process.env.USERNAME === "HP") {
    runProgram(`1
    3
    6
    4
    3 1
    1 2
    1 2`);

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