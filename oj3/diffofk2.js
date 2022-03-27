
function runProgram(input) {
    var input = input.trim().split("\n");
    var testCase = +input[0];
    var line = 1;

    for(let i = 0;i < testCase;i++) {
        var size = input[line++];
        var n = size[0];
        var k = size[1];
        var arr = input[line++].trim().split(" ").map(Number);
        // console.log(size);

        console.log(isMatch(k,arr));
    }
      
}

function isMatch(k,arr) {
   
    var size = arr.length;
    var target = k;

    

for(var i = 0;i < size;i++){
    for(var j = i+1;j < size;j++) {
        if(i!=j && arr[i] - arr[j] == target){
            return 'Yes';
        }
    }
    
}

return 'No';

}







if (process.env.USERNAME === "HP") {
    runProgram(`2
    5 3
    1 2 3 4 5
    5 8
    1 2 3 4 5  `);
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