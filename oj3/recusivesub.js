function runProgram(input) {
    var input = input.trim().split("\n");
    var str = input[1].trim();
    var blan = ""
    subStr(str,blan);

 
    
    }

    function subStr(str,blan) {

        if(str.length == 0) {
            console.log(blan)
            return;
        }
        subStr(str.substring(1),blan + str[0]);
        subStr(str.substring(1),blan);

    }
   
    
   
            if (process.env.USERNAME === "HP") {
               runProgram(`4
               abcd`);
               
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
   
    
  