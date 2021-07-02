function solution(answers) {
  let ans = [];
  let a = [1, 2, 3, 4, 5];
  let b = [2, 1, 2, 3, 2, 4, 2, 5];
  let c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let ac = answers.filter((x, i) => x === a[i % a.length]).length;
  let b = answers.filter((x, i) => x === b[i % b.length]).length;
  let cc = answers.filter((x, i) => x === c[i % c.length]).length;
  let max = Math.max(ac, bc, cc); //한 번에 비교 가능, 배열도 가능

  //순서대로 push -> 정렬할 필요 없음
  if (ac === max) ans.push(1);
  if (bc === max) ans.push(2);
  if (cc === max) ans.push(3);

  return ans;

  //   내 풀이
  //   const p = [
  //     [5, 1, 2, 3, 4],
  //     [5, 2, 1, 2, 3, 2, 4, 2],
  //     [5, 3, 3, 1, 1, 2, 2, 4, 4, 5],
  //   ];
  //   let len = new Array(3).fill().map((x, i) => p[i].length);
  //   let ans = new Array(3).fill(0);
  //   let max = 0;

  //   for (let i = 0; i < answers.length; i++) {
  //     if (answers[i] === p[0][parseInt(i % len[0])]) ans[0]++;
  //     if (answers[i] === p[1][parseInt(i % len[1])]) ans[1]++;
  //     if (answers[i] === p[2][parseInt(i % len[2])]) ans[2]++;
  //   }

  //   for (let i = 0; i < ans.length; i++) {
  //     max = Math.max(max, ans[i]);
  //   }

  //   let res = [];
  //   for (let i = 0; i < ans.length; i++) {
  //     if (ans[i] == max) res.push(i+1);
  //   }
  //   return res.sort((a, b) => a - b);
}
