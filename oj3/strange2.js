
function runProgram(input) {

    // input = input.trim().split("\n");
    // let testCase = +input[0];
    // let line = 1;
  
    // for(let i = 0;i < testCase;i++) {
    //   let size = +input[line++]
    //   let str = input[line++].trim().split(" ")
    //   let str = ""
    //       let j= 0;
    //       let k = arr.length-1;
    //       console.log(robot(n,arr,j,k,str)); 
  
  
    // }
      let lines = input.split("\n")
      let tc = Number(lines[0])
      let line = 0;
      for(let i=2; i<lines.length; i+=2){
          line++
          let n = Number(lines[line])
          line++;
          let arr = lines[i].trim()
          let str = ""
          let j= 0;
          let k = arr.length-1
          console.log(robot(n,arr,j,k,str)); 
      }
  
  
      
  }
  
  function robot(n,arr,j,k,str){
    if(j>k){
        return str;
    }
    let mid = Math.floor((j + k)/2);
    str = str + arr[mid] + robot(n,arr,j,mid-1,str) + robot(n,arr,mid+1,k,str);
    return str;
  }
  
          if (process.env.USERNAME === "HP") {
            runProgram(`3
            3
            abc
            4
            abcd
            11
            abcdefghijk
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