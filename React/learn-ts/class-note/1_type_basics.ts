//JS
let str_js = 'hello';

//TS
let str_ts: string = 'hell0'; //문자열
let num: number = 0;
let arr: Array<number> = [1,2,3]; //배열
let heros: Array<string> = ['ironman','captin','hulk']; 
let item: number[] = [1,2,3] //tuple
//오브젝트 타입
let obj: object = {};
let person1: object = {
    name: 'capt',
    age: 100
}
//객체의 속성의 타입까지 지정 가능 - 더 구체적으로 타입 정의
let person2: {name:string, age:number} = {
    name: 'thor',
    age: 1000
}
//진위값
let show:boolean = true;