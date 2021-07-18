// interface Person {
//     name: string;
//     age: number
// }

type aPerson = {
    name: string;
    age: number
}

var jen: aPerson = {
    name: '젠',
    age:30
}

type MyString = string;
let str: MyString = 'hello';

type Todo = {id:string, title:string, done:boolean};
function getTodo(todo:Todo){

}
//type과 interface의 차이
// type은 확장불가능(type별칭은 정의한 타입을 참고하기 쉽게 이름을 부여한 것), interface는 확장가능
// 좋은 소프트웨어는 언제나 확장이 용이해야한다는 원칙에 따라 가급적 인터페이스 사용이 더 추천된다.