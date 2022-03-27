function runProgram(input) {
    input = input.trim().split('\n')
     var testcases=+input[0]

     var line =1
     for(var i=0;i<testcases;i++){
       var arr=input[line++].trim()

       if(logic(arr)){
           console.log("balanced");
       }
       else{
           console.log("not balanced");
       }

     }   
  }
  
  function logic(arr){
    var stack =[]
   
  
    for(var i=0;i<arr.length;i++){
        
        if( arr[i]== "{" || arr[i]=="[" || arr[i] == "(" ){
         stack.push(arr[i])
        }

        if(stack.length==0){
            return false
        }

        let ans ;
        switch (arr[i]) {
            case ")":
                ans =stack.pop();
                if(ans == "{" || ans =="["){
                    return false;
                   
                }
                break;

            case "}":
                    ans =stack.pop();
                    if(ans == "(" || ans =="["){
                        return false;
                       
                    }
                    break;

                    
            case "]":
                ans =stack.pop();
                if(ans == "(" || ans =="{"){
                    return false;
                   
                }
                break;
        
            default:
                break;
        }
        
    }
  return (stack.length ==0);
   
   
}
if (process.env.USERNAME === "HP") {
  runProgram(`3
             {([])}
             ()
             ([]
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