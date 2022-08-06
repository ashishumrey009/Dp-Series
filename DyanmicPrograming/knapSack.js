
const values = [12, 2, 1, 4, 1];
const weights = [4, 2, 1, 10, 2];
const maxWeight = 15;
let lookup = new Map();
const knapSack = (values, weights, n, maxWeight, lookup) => {
  // base case: when we cannot have take more items
  if (maxWeight < 0) {
    return Number.MIN_SAFE_INTEGER;
  }

  // base case: when no items are left or capacity becomes 0
  if (n < 0 || maxWeight == 0) {
    return 0;
  }

  // form a unique key from the inputs for memoization
  const key = `${n}|${maxWeight}`;

  // If the sub-problem is appearing for first time, solve it and
  // store its result in the map
  if (!lookup.has(key)){

    // pick current item n in knapSack and recur
    // for remaining items (n-1) with reduced capacity (target - weights[n])
    let include = values[n] + knapSack(values, weights, n - 1, maxWeight - weights[n], lookup);

    // leave current item n from knapSack and recur for
    // remaining items (n-1)
    let exclude = knapSack(values, weights, n - 1, maxWeight, lookup);

    // Assign max value we get by picking or leaving the current item
    lookup.set(key, Math.max(include, exclude));
  }

  // return the value
  return lookup.get(key);
}
console.log(knapSack(values, weights, values.length - 1, maxWeight,lookup));


const KnapSackTabulation =(value,weights,maxWeight)=>{
  let n = value.length;
  let dp  = new Array(n).fill(0).map(()=>new Array(maxWeight+1).fill(0));
  for(let w = weights[0];w<=maxWeight;w++){
    dp[0][w] = value[0]
  }
  for(let idx=1;idx<n;idx++){
    for(let w=0;w<=maxWeight;w++){
      let notTake = dp[idx-1][w];
      let take= Number.MIN_SAFE_INTEGER;
      if(weights[idx]<=maxWeight){
        take = value[idx]+dp[idx-1][w-weights[idx]]
      }
      dp[idx][w] = Math.max(notTake,take)
    }
  }
  console.log(dp);
  return dp[n-1][maxWeight]
}





//console.log(KnapSackTabulation(values,weights,maxWeight));
