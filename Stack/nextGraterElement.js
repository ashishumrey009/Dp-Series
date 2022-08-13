let arr =[13, 7, 6, 12]


const nextGraterElement =(arr)=>{
  let stack = [];
  let result=[];
  for(let i=arr.length-1;i>=0;i--){
    if(stack.length!=0){
      while(stack.length !=0 && arr[i]>= stack[stack.length-1]){
        stack.pop();
      }
    }
    result[i] = stack.length==0?-1:stack[stack.length-1];
    stack.push(arr[i])
  }
  return result
}
console.log(nextGraterElement(arr));
