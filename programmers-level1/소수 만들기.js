//new Array(n).fill().map()으로 1~n까지 채워진 배열 만들기

let res = 0;
let d, max, num;
let nums = [1, 2, 7, 6, 4]; //testcase

function solution(nums) {
  num = nums;
  d = new Array(num.length + 1).fill().map((x, i) => i + 1); //주의: fill() 반드시 넣기!!

  permutation(0, 0, 0);
  return res;
}
function permutation(idx, sum, depth) {
  if (depth == 3) {
    if (isPrime(sum)) res++;
    max = Math.max(max, sum);
    return;
  }
  for (let i = idx; i < num.length; i++) {
    dfs(i + 1, sum + num[i], depth + 1);
  }
}
function isPrime(n) {
  if (n < max) {
    if (d[n] === 0) return false;
    else return true;
  } else {
    for (let i = 2; i <= n; i++) {
      if (d[i] === 0) continue;
      for (let j = i * 2; j <= n; j += i) {
        d[j] = 0;
      }
    }
  }
  return d[n] === 0 ? false : true;
}

console.log(solution(nums));
