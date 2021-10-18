//기본적으로, 타입 호환가능한 경우:
// (작은범위) = (큰범위)

//interface, class
interface Avengers {
  name: string;
}
let hero: Avengers;
let captain = { name: "Captain", skill: "iron" };
hero = captain;

// 함수
var add = function (a: number) {}; //파라미터수 적다 범위가 더 넓은 함수
var summ = function (a: number, b: number) {}; //범위가 더 좁은 함수
summ = add;
// add = summ;

// 제네릭
interface Empty<T> {}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2; // 서로 호환 가능
empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}
var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;
// notempty1 = notempty2; 서로 호환되지 않음
// notempty2 = notempty1;
