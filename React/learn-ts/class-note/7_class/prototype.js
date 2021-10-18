// javascript는 prototype 기반의 언어, class사용시의 이점 있음
// prototype을 이용한 상속가능, 즉 proto로 상속받은 상위 객체의 속성 활용 가능
// 객체 생성하면 Object라는 최상위 객체가 proto로 있음
// Built-in javascript API 또는 native javascript API. 즉 원래 js에 있는 기능들

var user = { name: "capt", age: 100 };
var admin = {};

admin.__protp__ = user; //user객체가 갖고있던 정보를 상속받음

admin.name; // 출력: "capt"
