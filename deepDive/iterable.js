//이터레이션 프로토콜이란?
// 순회 가능한 데이터 컬렉션(자료구조)를 만들기 위한 규칙

// 순회 가능한 데이터 컬렉션을 이터레이션 프로토콜을 준수하는 이터러블로 통일하여
// for --- of 문, 스프레드 문법, 배열 디스트럭처링 할당의 대상으로 사용할수 있도록 일원화함

const isIterable = (v) =>
  v !== null && typeof v[Symbol.iterator] === "function";

console.log(isIterable([]));
