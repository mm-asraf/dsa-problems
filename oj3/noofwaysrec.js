function runProgram(input) {
    var input = +input;

   console.log(waysteps(input))
    
    }

    function waysteps(value){
        if(value<0){
            return 0;
        }
        if(value==0){
            return 1;
        }
        else{
            return (waysteps(value-1)+ waysteps(value-2) + waysteps(value-3));
        }
    }
   
            if (process.env.USERNAME === "HP") {
               runProgram(`4`);
               
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
   
    
  