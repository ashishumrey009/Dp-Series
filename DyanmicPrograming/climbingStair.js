// Count Ways To Reach The N-th Stairs
//https://www.codingninjas.com/codestudio/problems/count-ways-to-reach-nth-stairs_798650

let seen = {};
var climbStairs = function(n) {
     if(n < 3) return n;
    if(!(n in seen)) {
        seen[n] = climbStairs(n-1) + climbStairs(n-2);
    }
    return seen[n];
};

console.log(climbStairs(2))