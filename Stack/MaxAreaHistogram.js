let arr =[6,2,5,4,5,1,6]

const nextSmallerLeft=(arr)=>{
  let stack =[];
  let res=[];
  for(let i=0;i<arr.length;i++){
    if(stack.length!=0){
      while(stack.length!=0 && arr[stack[stack.length-1]]>=arr[i]){
        stack.pop()
      }
    }
    res[i] = stack.length==0?-1:stack[stack.length-1];
    stack.push(i)
  }
  return res
}

const nextSmallerRight=(arr)=>{
  let stack =[];
  let res=[];
  for(let i=arr.length-1;i>=0;i--){
    if(stack.length!=0){
      while(stack.length!=0 && arr[stack[stack.length-1]]>=arr[i]){
        stack.pop()
      }
    }
    res[i] = stack.length==0?arr.length:stack[stack.length-1];
    stack.push(i)
  }
  return res
}
const MaxAreaHistogram =(arr)=>{
  let left = nextSmallerLeft(arr)
  let right = nextSmallerRight(arr);
  let width=[];
  let area=0;
  for(let i=0;i<arr.length;i++){
    width[i]= right[i]-left[i]-1;
  }
  for(let i=0;i<arr.length;i++){
      width= right[i]-left[i]-1;
    area = Math.max(area,arr[i]*width)
  }
  console.log(area);
}













console.log(MaxAreaHistogram(arr));
