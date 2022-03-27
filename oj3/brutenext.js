function nearestGreaterToRight(arr) {
    let result = [];
  
    for (let i = 0; i < arr.length; i++) {
      let flag = false;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
          result.push(arr[j]);
          flag = true;
          break;
        }
      }
      if (!flag) {
        result.push(-1);
      }
    }
  
    return result;
  }
  
  let arr = [11, 13, 21, 3];
  console.log(nearestGreaterToRight(arr));