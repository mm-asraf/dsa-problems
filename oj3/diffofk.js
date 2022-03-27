
function runProgram(input) {
    var input = input.trim().split("\n");
    var testCase = +input[0];
    var line = 1;

    for(let i = 0;i < testCase;i++) {
        var size = input[line++];
        var n = size[0];
        var k = size[1];
        var arr = input[line++].trim().split(" ").map(Number);

        isMatch(k,arr)
    }
      
}

function isMatch(k,arr) {
   
    var size = arr.length;
    var target = k;

    let i = 0;j = 1;

    while(i<size && j < size){
        if(i!=j && arr[i] - arr[j] == target){
            console.log('Yes');
        }
        else if(arr[i] - arr[j] < target)
        j++;
        else
        i++;
    }
    return target;
 
}



if (process.env.USERNAME === "HP") {
    runProgram(`2
    5 3
    1 2 3 4 5
    5 8
    1 2 3 4 5 `);
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