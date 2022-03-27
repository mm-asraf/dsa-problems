function runProgram(input) {
   input = input.trim().split(" ").map(Number);
   var b = input[0]
   var a = input[1]
   console.log(power(b, a));
    
    }

   function power(b,a) {
       if(a!=0){
           return b * power(b, a - 1);
       }
       return 1
   }
   
            if (process.env.USERNAME === "HP") {
               runProgram(`2 4`);
               
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
   
    
  