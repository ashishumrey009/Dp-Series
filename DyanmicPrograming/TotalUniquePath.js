var uniquePaths = function(m, n) {
    let dp =new Array(m).fill(0).map(()=> new Array(n).fill(0));
     for(let i=0;i<m;i++){
         for(let j=0;j<n;j++){
             if( i==0 && j==0)  dp[i][j]=1;
             else{
             let up=0;
             let left =0;

             if(i>0) up = dp[i-1][j];
             if(j>0) left =dp[i][j-1];
             dp[i][j] = up+left;
             }
         }
     }
    return dp[m-1][n-1];
};

console.log(uniquePaths(3,7));
