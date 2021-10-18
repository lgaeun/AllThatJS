// 타입 단언
var aa;
aa = 20;
aa = 'a';
var b = aa as string; //개발자가 정의한 타입으로 간주해라

// DOM API 조작 시 타입 단언이 자주 사용됌
var div = document.querySelector('div'); //HTMLDivElement라고 추론됌
if (div) {
    div.innerText
}
