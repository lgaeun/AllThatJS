//union type - 파라미나타 변수에 2가지 이상의 type을 쓰고 싶을 때 - or 연산자 이용해 정의
//ex) let val: string | number | boolean
function logMessage(value: string | number) {
  console.log(value);
}
logMessage("hello");
logMessage(100);

//union type의 장점
function logMessage2(value: string | number) {
  if (typeof value === "number") {
    value.toLocaleString(); //타입이 확인되면 그 타입에관한 api 바로 사용 가능
  }
  if (typeof value === "string") {
    value.toString; //타입이 확인되면 그 타입에관한 api 바로 사용 가능
  }
  throw new TypeError("value must be string or number"); //type guard
}

//Union type 특징
interface Developer1 {
  name: string;
  skill: string;
}
interface Person1 {
  name: string;
  age: number;
}
function askSomeone1(someone: Developer1 | Person1) {
  //모든 property에 접근할 수 없음. 타입 검증 없이는 둘의 공통 속성만 접근 가능
  //타입검증도 없이 써버리게 되면 type unsafe
  someone.name;
  //    someone.skill; //접근 불가능
}
askSomeone1({ name: "김개발", age: 20 });

function askSomeone22(someone: Developer1 & Person1) {
  //둘의 속성을 모두 합한 것 접근 가능
  someone.name;
  someone.skill; //접근가능
}
askSomeone22({ name: "박개발", age: 22, skill: "개발" });
