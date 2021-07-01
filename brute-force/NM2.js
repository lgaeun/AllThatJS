// const [n,m] = require('fs').readFileSync('dev/stdin').toString().split(' ').map(x=>+x);
const[n,m] = [4,2];
let print = "";
let ans = [];

function solution(idx, depth){
    if(depth === m){
        print += ans.join(' ') + '\n';
        return;
    }
    for(let i = idx; i <= n; i++){
        ans[depth] = i;
        solution(i,depth+1);
    }
}

solution(1,0);
console.log(print);