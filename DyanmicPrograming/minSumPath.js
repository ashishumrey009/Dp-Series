var minPathSum = function(grid) {
    let n = grid.length;
    let m  = grid[0].length;
    let dp = new Array(n).fill(0).map(()=>new Array(m).fill(0));

    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(i==0 && j==0){
                dp[i][i]=grid[0][0]
            }else{
                let up = grid[i][j];
                if(i>0) up += dp[i-1][j];
                else up+=Infinity
                let left = grid[i][j];
                if(j>0) left+=dp[i][j-1];
                else left+=Infinity;

                dp[i][j] = Math.min(left,up);
            }
        }
    }
    return dp[n-1][m-1]

}


console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]));
