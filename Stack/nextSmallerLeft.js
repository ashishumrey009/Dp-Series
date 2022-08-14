let arr =[4, 5, 2, 10, 8]
//op- [-1, 4, -1, 2, 2]

const nextSmallerElementLeft =(arr)=>{
  let stack=[];
  let result=[];
  for(let i=0;i<arr.length;i++){
    if(stack.length!=0){
      while(stack.length!=0 && stack[stack.length-1]>=arr[i]){
        stack.pop();
      }
    }
    result[i] = stack.length==0?-1 :stack[stack.length-1];
    stack.push(arr[i])
  }
  return result;
}

console.log(nextSmallerElementLeft(arr));
