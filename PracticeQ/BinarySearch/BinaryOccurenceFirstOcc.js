function runProgram(input) {
    input = input.trim().split("\n");

    let n = +input[0].trim();
    let arr = input[1].trim().split(" ").map(Number);
    let target = +input[2].trim();

    
    console.log(BinarySearchFirstOcc(arr, target));

}



function BinarySearchFirstOcc(arr,target) {
    let start = 0;
    let end = arr.length - 1;

    let res = -1;

    while (start <= end) {
        let mid = Math.floor(start + ((end - start) / 2));
        if(target == arr[mid]) {
            res = mid;
            end = mid - 1;
        }else if(target < arr[mid]) {
            end = mid -1
        }else{
            start = mid + 1;
        }
        
    }
    return res;

}



if (process.env.USERNAME === "HP") {
    runProgram(`6
1 1 1 2 2 2	
1`);
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
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}