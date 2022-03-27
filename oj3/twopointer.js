function twoPointer(arr,target) {
    let i = 0;
    let j = arr.length-1;
    
    let sum = arr[i] + arr[j];
    while(i<j) {
        
        if(sum<target) {
            i++;
        }else{
            j--;
        }
    }
    return arr[i,j]
}


let arr = [12,5,4,7,5,7];
let target = 9;
let ans = twoPointer(arr,target)
console.log('ans:', ans)