// 함수의 파라미터에 타입을 정의하는 방식
function sum1(a: number, b: number) {
  return a + b;
}
sum(10, 20);

// 함수의 반환값에 타입을 정의하는 방식
function add(): number {
  return 10;
}

function sum2(a: number, b: number): number {
  return a + b;
}
sum2(10, 20);
// sum2(1,2,3,4,5); //error - 2개의 인수가 필요한데 5개를 가져왔습니다.

//  함수의 옵셔널 파라미터 - 필요에따라 인자를 넘길수도 있고, 안넘겨도 되는 기능
//  추가적으로 들어와도된다라는 표시'?'
function log(a: string, b?: string, c?: string) {}
log("hello world");
log("hi", "abc");
