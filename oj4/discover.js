function runProgram(input) {
    input = input.trim().split("\n")
    let [n,l] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);

    
    arr.sort((x,y) => (x-y));

    let start = 0;
    let end = n-1;

    let line = 2;
    for(let i = 0;i < l;i++){
        let k = +input[line++];
        console.log(discover(k,arr,start,end))
    }
}

function discover(k,arr,start,end) {
    while(start <= end) {
        let mid =  Math.floor(start + (end-start)/2);
        if(arr[mid] === k) {
            return "YES"
        }else if(k < arr[mid]) {
            return discover(k,arr,start,mid-1)
        }else{
            return discover(k,arr,mid+1,end)
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
    100
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