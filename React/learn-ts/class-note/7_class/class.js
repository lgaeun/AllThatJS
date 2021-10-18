function Person(name, age) {
  this.name = name;
  this.age = age;
}
var capt = new Person("캡틴", 100); //생성자 함수를 이용해서도 클래스를 이용하지 않고도 인스턴스 충분히 만들어낼 수 있음

//-------위와 아래는 같은 기능을 하는 코드

class Person {
  //클래스 로직
  constructor(name, age) {
    console.log("생성 되었습니다");
    this.name = name;
    this.age = age;
  }
}

var seho = new Person("세호", 30);
console.log(seho);
