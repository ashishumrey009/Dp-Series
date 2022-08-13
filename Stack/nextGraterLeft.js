let arr = [1, 6, 4, 10, 2, 5];
//op-[-1, -1, 6, -1, 10, 10]
const nearestGreaterToLeft=(arr)=>{
  let stack=[]
  let result=[];
  for(let i=0;i<arr.length;i++){
    if(stack.length!=0){
      while(stack.length!=0 && stack[stack.length-1]<=arr[i]){
        stack.pop();
      }
    }
    result[i] = stack.length==0 ?-1:stack[stack.length-1];
    stack.push(arr[i]);
  }
  return(result)
}

console.log(nearestGreaterToLeft(arr));
