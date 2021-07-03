// const fs = require("fs");
// let n = +fs.readFileSync(0, "utf8").trim();
// java로 풀면 로직이 맞지만, js는 백준에서 틀림

function solution(n) {
  let dp = new Array(n + 1).fill(Infinity);
  let bf = new Array(n + 1); //이전값 저장
  let print = "";

  dp[1] = 0;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + 1;
    bf[i] = i - 1;

    if (i % 3 == 0 && dp[i] > dp[i / 3] + 1) {
      dp[i] = dp[i / 3] + 1;
      bf[i] = i / 3;
    }
    if (i % 2 == 0 && dp[i] > dp[i / 2] + 1) {
      dp[i] = dp[i / 2] + 1;
      bf[i] = i / 2;
    }
  }
  print += dp[n] + "\n";
  while (n > 0) {
    print += n + " ";
    n = bf[n];
  }
  console.log(print.trim());
}
solution(1);
