// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = [];
input[0] = "4 5 1";

const info = input[0].trim().split(" ");
const v = +info[0],
  e = +info[1],
  s = +info[2];

let graph = [], // 양방향 리스트로 구현
  visit = [];
let edge,
  v1,
  v2,
  res = "";

for (let i = 1; i <= e; i++) {
  if (input[i]) {
    edge = input[i].trim().split(" ");
    v1 = +edge[0];
    v2 = +edge[1];
  }
  if (!graph[v1]) {
    //이차원 배열 초기화
    graph[v1] = [];
  }
  if (!graph[v2]) {
    //이차원 배열 초기화
    graph[v2] = [];
  }
  if (graph[v1].indexOf(v2) < 0) {
    graph[v1].push(v2);
  }
  if (graph[v2].indexOf(v1) < 0) {
    graph[v2].push(v1);
  }
}

function dfs(v) {
  visit[v] = true;
  res += v + " ";

  if (graph[v]) {
    for (let i = 0; i < graph[v].length; i++) {
      let next = graph[v][i];
      if (!visit[next] && graph[next]) {
        dfs(next);
      }
    }
  }
}

dfs(s);
console.log(res.trim());
