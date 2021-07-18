// 1. type에 인터페이스 활용
interface User{
    name: string;
    age: number;
}
function getUser(user: User){
    console.log(user);
}
const capt = {
    name:'캡틴',
    age:100
}
getUser(capt);

// 2. 함수의 스펙(구조)에 인터페이스 활용
interface SumFunction {
    (a:number, b:number): number;
}

var sum: SumFunction;
sum = function(a:number, b:number){
    return a + b;
}

// 3. 인덱싱
interface StringArray {
    [index: number]: string;
}

var a: StringArray = ['a','b','c'];
// a[0] = 10

//딕셔너리 패턴
interface StringRegexDictionary {
    [key: string] : RegExp //ts의 정규표현식 인터페이스
}

var obj1 = {
    // sth: /abc/
    cssFile: /\.css$/,
    jsFile: /\.js$/
}

Object.keys(obj1).forEach(function(value){

})

// 4. 인터페이스 확장
interface Person {
    name: string;
    age: number;
}
interface Developer extends Person{
    language:string;
}
var me: Developer = {
    language: 'korean',
    name:'kim',
    age:20
}
