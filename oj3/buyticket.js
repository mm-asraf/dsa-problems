function runProgram(input) {
    input=input.split("\n")
    var testcases =+input[0]
    var stack =[]
    var line =1 ;
    for(var i=0;i<testcases;i++){
        var arr =input[line++].trim().split(" ")
       logic(arr,stack)
    }

  
   }


   function logic(arr,stack){
     
       if(arr[0]=="E"){
           stack.push(arr[1])   
           console.log(stack.length)
           }

       if(arr[0]=="D"){
     
       if(stack.length>0){
        
        console.log(stack.shift(),stack.length)
          
            
       }else{
           console.log(-1,stack.length)
       }
       }

      
   }
   
        if (process.env.USERNAME === "HP") {
          runProgram(`5
          E 2
          D
          D
          E 3
          D`);
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