
function runProgram(input) {
    let lines = input.split("\n")
    let testCase = Number(lines[0]);
    let line = 0;
    for(let i=2; i<lines.length; i+=2){
        line++;
        let n = +(lines[line])
        line++;
        let arr = lines[i].trim()
        let str = ""
        let j= 0;
        let k = arr.length-1
        console.log( mrRoboElliot(n,arr,j,k,str)); 
    }
}



function mrRoboElliot(n,arr,j,k,str){
    if(j>k){
        return str
    }
    let mid = Math.floor((j + k)/2);
    str = str + arr[mid] + mrRoboElliot(n,arr,j,mid-1,str) + mrRoboElliot(n,arr,mid+1,k,str);
    return str;
}

  if (process.env.USERNAME === 'HP') {
      runProgram(`3
      3
      abc
      4
      abcd
      11
      abcdefghijk`);
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