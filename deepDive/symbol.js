// JS는 7개의 타입 =
// 문자열, 숫자, boolean, undefined, null, 객체타입
// + Symbol

// Symbol이란?
// : 변경 불가능한 원시타입의 값, 다른값과 절대 중복되지 않는 유일무이의 값

// *선언 및 할당
// : 다른 6개의 타입이 리터럴 표기법으로 선언,할당 될 수 있는 반면,
// symbol은 함수를 통해서 호출하여야 한다.

// symbol 값을 호출하여 유일무이한 심벌 값을 호출
// 함수를 통하여 호출.
const mySymbol = Symbol();
console.log(typeof mySymbol); // output: symbol

console.log(mySymbol); //output: Symbol()
// Symbol값은 외부로 노출되지 않아 확인할 수 없다.

//new Symbol(); //TypeError: Symbol is not a constructor
// String, Number, boolean 생성자와의 차이점: 이들은 new 연산자를 통해 객체로써 생성이 가능하지만,
// Symbol는 객체가 아닌 변경 불가능한 원싯값이므로, 에러가 난다.

// 추후에 필요해질 때 정리하자.. 어차피 지금 해놔도 까먹을테니...

const mySymbol1 = Symbol("mySymbol");

console.log(mySymbol1.description);
console.log(mySymbol1.toString());

console.log(typeof mySymbol1);

console.clear();

const Direction = {
  UP: Symbol("up"),
  DOWN: Symbol("down"),
  LEFT: Symbol("left"),
  RIGHT: Symbol("right"),
};

const myDirection = Direction.UP;

if (myDirection === Direction.UP) {
  console.log("you're going up");
}

const ms2 = Symbol.for("ms2");

const ms3 = Symbol.for("ms2");

console.log(ms2 === ms3);
