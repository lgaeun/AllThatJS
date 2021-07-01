function solution(s) {
  // regex slash(/)사이에 감싸기.
  // test(): 해당 문자열에 패턴이 있으면 true 반환
  // arr.includes(length): 길이가 4,6인지 확인
  return /^[0-9]+$/.test(s) && [4, 6].includes(s.length);
}

/* 문제 설명
문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.
제한 사항
s는 길이 1 이상, 길이 8 이하인 문자열입니다.
입출력 예
s	return
"a234"	false
"1234"
*/
