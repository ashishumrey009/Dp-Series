let matrix = [
  [12, 22, 5, 0, 20, 18],
  [0, 2, 5, 25, 18, 17],
  [12, 10, 5, 4, 2, 1],
  [3, 8, 2, 20, 10, 8]
]


const maxPathSum =(matrix)=>{
 let row= matrix.length;
 let col = matrix[0].length;

 let dp = new Array(row).fill(0).map(()=>new Array(col).fill(0));
for(let j=0;j<col;j++){
  dp[0][j] = matrix[0][j]
}
 for(let i=1;i<row;i++){
   for(let j=0;j<col;j++){
     let up = matrix[i][j]+dp[i-1][j];
     let ld =matrix[i][j];
     if(j-1>=0){
       ld+=dp[i-1][j-1]
     }else{
       ld+=-1e9
     }
     let rd = matrix[i][j]
     if(j+1<col){
       rd+=dp[i-1][j+1]
     }else{
       rd+=-1e9
     }
     dp[i][j] =Math.max(up ,Math.max(ld,rd))
   }
 }
 let maxi = -1e9;
 console.log(dp,row);
 for(let j=0;j<col;j++){
   maxi = Math.max(dp[row-1][j],maxi)
 }
 return maxi;

}












console.log(maxPathSum(matrix));
