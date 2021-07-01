//BOJ 15649 - N과 M (1)
const [n,m] = require('fs').readFileSync('dev/stdin').toString().split(' ').map(x=>+x);

let print = "";
let visit = new Array(n+1).fill(false);
let ans = [];

function permutation(depth){
    if(depth >= m){
        print += ans.join(' ') + '\n';
        return;
    }

    for(let i = 1; i <= n; i++){
        if(!visit[i]){
            visit[i] = true;
            ans.push(i);
            permutation(depth+1);
            visit[i] = false
            ans.pop();
        }
    }
}
permutation(0);
console.log(print);