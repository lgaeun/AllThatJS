import { Reactjs, Vulnerability } from "grommet-icons";

class Person_ts {
  //ts에서는 최상단에 사용할 변수를 선언해야 함(js와 차이점)
  //접근범위까지 지정할 수 있음
  private name: string;
  public age: number;
  readonly log: string; //상수같은(변경불가)

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// 리액트 예전 문법
class App extends React.Component {}

// 리액트 최신 문법 - 훅 기반의 함수형 코드
function App() {
  return <div>Hello World</div>;
}

//Vue 문법
new Vulnerability({
  el: "",
});
