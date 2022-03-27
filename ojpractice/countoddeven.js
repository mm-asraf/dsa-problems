function runProgram(input) {
    input = input.trim().split('\n');

    let n = +input[0]
    let arr = input[1].trim().split(" ").map(Number);

   oddEven(arr)

}

function oddEven(arr) {
    let count1 = 0;
    let count2 = 0;
    for(let i = 0; i < arr.length; i++) {
       if(arr[i]%2 != 0){
           count1 += arr[i];
       }else {
           if(arr[i]%2 == 0){
               count2 += arr[i];
           }
       }
    }
   
    if(count1 > count2){
        console.log("Odd")
    }else{
        console.log("Even");
    }
}


if (process.env.USERNAME === 'HP') {
    runProgram(`8
    2 9 0 3 4 1 88 89`);
}

else {
    process.stdin.resume();
    process.stdin.setEncoding('ascii');
    let read = '';
    process.stdin.on('data', function (input) {
        read += input;
    });
    process.stdin.on('end', function () {
        read = read.replace(/$/, '');
        read = read.replace(/$/, '');
        runProgram(read);
    });
    process.on('SIGINT', function () {
        read = read.replace(/$/, '');
        runProgram(read);
        process.exit(0);
    });
}