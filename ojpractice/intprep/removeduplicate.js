function runProgram(input) {
  input = input.trim().split("\n");

  let arr = input[0].trim().split(" ").map(Number);
  // console.log(arr);
  let ans = removeDuplicate(arr);
  console.log(ans);

  //    let ans = optiremoveDuplicate(arr);
  //    console.log(ans);


  // console.log( byobj(arr))

  // byusingSet(arr)

}




// bruteforce approach
function removeDuplicate(arr) {
  // time complexity is close to o(n2) or 0(n2) because here evertime we are checking from the first el
  let len = arr.length;
  let b = [];
  for (let i = 0; i < len; i++) {
    if (b.indexOf(arr[i]) === -1) {
      b.push(arr[i]);
    }
  }
  return b;

}


// optimize bruteforce approach
function optiremoveDuplicate(arr) {
  // time complexity will  O(nlogn) because we use .sort()
  //  from the first el
  let len = arr.length;
  let b = [];
  arr.sort();
  let temp;
  for (let i = 0; i < len; i++) {
    if (arr[i] !== temp) {
      b.push(arr[i]);
      temp = arr[i];
    }
  }
  return b;

}

function byobj(arr) {
  //time complexity is O(n) 

  let obj = {};
  for (let el of arr) {
    obj[el] = true;
  }
  let b = Object.keys(obj);
  console.log(b);
}

function byusingSet(arr) {
  console.log([... new Set(arr)])
}





if (process.env.USERNAME === "HP") {
  runProgram(`1 2 5 2 1 8`);
}

else {
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