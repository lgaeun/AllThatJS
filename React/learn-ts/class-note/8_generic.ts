// ------1. 제네릭: 타입을 파라미터처럼 사용하는 것
function getText<T>(text: T): T {
  return text;
}
getText<string>("hi");
getText<number>(10);
getText<boolean>(true); //이렇게 함수를 호출할 때 함수 안에서 사용할 타입을 넘겨줄 수 있음

// 제네릭을 사용하는 이유: any로 여러가지 타입을 허용할 수 있는데, 그럴 경우 어떤 타입이 들어갔고 리턴되는지 알 수 없음
function logText(text: any): any {
  return text;
}

// -------2. 제네릭 호출 방법
// # 1
const txt1 = getText<string>("Hello Generic");
// # 2
const txt2 = getText("Hello Generic");

// --------3. 제네릭에 타입 주기
function logText1<T>(text: T[]): T[] {
  console.log(text.length); //제네릭 타입이 배열이기 때문에 .length 사용을 허용
  return text;
}
//조금더 명시적
function logText2<T>(text: Array<T>): Array<T> {
  console.log(text.length);
  return text;
}

//---------4. 인터페이스에 제네릭 선언하기
interface DropDown {
  value: string;
  selected: boolean;
}

interface DropDown1<T> {
  value: T;
  selected: boolean;
}
const obj: DropDown1<string> = { value: "abc", selected: false };

//----------------------------------------------
// 제네릭의 타입 제한, :T 반환타입 명시안해도 타입추론 되긴함, 그렇지만 명시적으로 나타내는 것이 좋음
function logTextLength<T>(text: T[]): T[] {
  //T; ts 입장에서는 어떤 타입이 들어오는지 알 수 없음. 따라서 바로 string type의 메소드 이용 불가능
  // T[]로 값이 배열이다!!라고 명시하면 length 사용 가능
  console.log(text.length);
  text.forEach(function (text) {
    console.log(text);
  });
  return text;
}
logTextLength<string>("hi"); //error

//제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}
// Type 은 항상 LengthType을 상속한 것이다. 따라서 .length 사용할 수 있음
function logTextLength1<T extends LengthType>(text: T): T {
  text.length;
  return text;
}
logTextLength1({ length: 10 });

// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}
//ShoppingItem의 key들 중에 하나가 Type임 의미
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}
getShoppingItemOption("name");
