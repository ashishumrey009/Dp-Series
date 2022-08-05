let arr = [1, 2, 2, 3]


// reccursive
// const sumSubsetWithK=(arr,sum)=>{
//   return helper(arr.length-1,sum,arr)
// }
// const helper=(idx,sum,arr)=>{
//   //console.log(idx,sum,arr);
//   if(sum==0) return 1;
//   if(idx ==0) return arr[0]==sum?1:0;
//
//   let leaveEle = helper(idx-1,sum,arr);
//   let pickEle = 0;
//   if(arr[idx]<=sum){
//     pickEle = helper(idx-1,sum-arr[idx],arr)
//   }
//   console.log(leaveEle,pickEle);
//   return leaveEle+pickEle;
//
// }

const sumSubsetWithK = (arr, tar) => {
  console.log(arr);
  let dp = new Array(arr.length).fill(0).map(() => new Array(tar + 1).fill(0))
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    dp[i][0] = 1;
  }
  if (arr[0] <= tar) {
    dp[0][arr[0]] = 1
  }
  for (let idx = 1; idx < n; idx++) {
    for (let sum = 1; sum <= tar; sum++) {
      let notTake = dp[idx - 1][sum];
      let take = 0;
      if (arr[idx] <= sum) {
        take = dp[idx - 1][sum - arr[idx]];


      }
dp[idx][sum] = notTake + take
    }


  }
  console.log(dp);
  return dp[n - 1][tar]

}

console.log(sumSubsetWithK(arr, 3))
