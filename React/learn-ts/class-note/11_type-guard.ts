interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: "Tony", age: 33, skill: "Iron Making" };
}

var tony = introduce();
console.log(tony.name); //Developer 와 Person 의 공통 속성만 접근할 수 있음.

// 타입 단언을 했ㄱ 때문에 skill에 접근 가능 - But 코드 가독성이 많이 떨어짐 => 해결위해 type guard
if ((tony as Developer).skill) {
  var skill = (tony as Developer).skill;
  console.log(skill);
} else if ((tony as Person).age) {
  var age = (tony as Person).age;
  console.log(age);
}

//-------------------------------------------------------------
// Type Guard: 타입 단언의 남발을 줄이기 위한 기술
// is 키워드: target is Developer가 true/false로 리턴됌
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

if (isDeveloper(tony)) {
  console.log(tony.skill);
} else {
  console.log(tony.age);
}
