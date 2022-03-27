function runProgram(input) {
    input = input.trim().split("\n")
    let [N,K] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    
    arr.sort((a,b) => a-b)
    
    let sum = 0,count = 0,i = 0;
    while(sum <= K) {
        sum = sum + arr[i]
        i = i + 1;
        count = count + 1;
    }
   console.log( count)
}



if (process.env.USERNAME === "HP") {
    runProgram(`1000 395
    71 53 57 21 37 33 47 16 32 87 23 27 17 86 81 66 7 87 59 72 30 79 65 53 19 96 62 29 58 93 61 67 54 87 5 46 90 78 82 82 59 72 15 74 52 93 64 85 6 55 87 22 33 38 0 55 54 100 27 34 8 60 50 82 35 49 9 25 68 28 89 30 24 3 46 63 53 2 63 35 91 62 87 85 8 7 4 90 31 55 85 10 46 94 88 76 7 4 53 73 67 65 79 30 55 60 76 39 53 68 54 26 33 53 30 12 11 52 37 56 41 56 50 56 73 72 37 40 80 86 55 89 94 85 98 48 26 79 71 93 26 54 68 18 14 57 8 90 75 94 53 29 57 99 90 52 74 9 55 8 98 43 25 30 9 6 39 97 18 76 62 17 92 7
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

// function Samosaji(N,K,arr){
//     var count = 0;
//     var sum = 0;
//     for(var i=0; i<arr.length;i++){
//         sum=sum+arr[i];
//         count++;
//         if(sum > K){
//            count--;
//         }
//     }
//     return count
// }