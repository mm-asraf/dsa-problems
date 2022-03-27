function runProgram(input) {
    input = input.trim().split("\n");
     let testcase = +input[0]
     
     let line =1;
     for(let i=0;i<testcase;i++){
         let size= Number(input[line++].trim())
         let str=input[line++].trim().split("")
       occu(str)
     }
   
     }

   function occu(str){
    count0=0;
    count1=0;
    count2=0;
    count3=0;
    count4=0;
    count5=0;
    count6=0;
    count7=0;
    count8=0;
    count9=0;
    for(let i=0;i<str.length;i++){
                                    


        if(str[i]==="0")count0++;
        
        else if(str[i]=="1")count1++;
        else if(str[i]=="2")count2++;
        else if(str[i]=="3")count3++;
        else if(str[i]=="4")count4++;
        else if(str[i]=="5")count5++;
        else if(str[i]=="6")count6++;
        else if(str[i]=="7")count7++;
        else if(str[i]=="8")count8++;
        else count9++;
        
    }
    console.log(count9,count8,count7,count6,count5,count4,count3,count2,count1,count0)
   }
     





   if (process.env.USERNAME === "HP") {
     runProgram(`2
     5
     21321
     6
     235452`);
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