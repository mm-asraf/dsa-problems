function runProgram(input) {
    input = input.trim().split("\n");
    var n = +input[0];
   
    var arr = input[1].trim().split(" ").map(Number);
  


  

   console.log(mergeSort(arr).join(" "));
  
 
  
     
      }
  
      function merge(left,right){
          let arr = [];

          while(left.length && right.length){
              if(left[0] < right[0]){
                  arr.push(left.shift())
              }else{
                  arr.push(right.shift());
              }
          }
          return [...arr,...left,...right];
      }
   

    function mergeSort(arr) {
        let mid = arr.length / 2;
        if(arr.length == 1) {
            return arr;
        }

        let left = arr.splice(0,mid);
        return merge(mergeSort(left),mergeSort(arr))

    }

     
              if (process.env.USERNAME === "HP") {
                 runProgram(`4
                 5 3 0 9 8`);
                 
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