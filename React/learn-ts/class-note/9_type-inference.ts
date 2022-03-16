var k = 10;

// 타입 추론 기본 2
interface Dropdown<T> {
  value: T;
  title: string;
}
var shoppingItem: Dropdown<string> = {
  value: "abac",
  title: "eeelo",
};
// 타입 추론 기본3
interface Dropdown<T> {
  value: T;
  title: string;
}
interface DetailedDropdown<K> extends Dropdown<K> {
  description: string;
  tag: K;
}

var detailedItem: DetailedDropdown<number> = {
  title: "abc",
  description: "ab",
  value: 1,
  tag: 1,
};

// Best Common Type
var arr = [1, 2, true, "a"];

let func: (a: string, b: number) => string = function (str, times): string {
  return str.repeat(times);
};
