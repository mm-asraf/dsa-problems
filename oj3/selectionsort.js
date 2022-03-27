function runProgram(input) {
    input = input.trim().split("\n");
    var n = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
 //   console.log(arr)
  
      console.log(selection(arr,n));
      }
  
function swap(arr,first,second) {
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}

    function selection(arr,n) {
      
        for(let i = 0; i < n; i++) {
            let min = i;
            
            for(let j = i + 1; j < n; j++) {
                if(arr[j] < arr[min]){
                    min = j;
                }
            }
            swap(arr,min,i)
        }
        return arr.join(" ");
    }
     
              if (process.env.USERNAME === "HP") {
                 runProgram(`5
                 3 5 0 9 8`);
                 
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