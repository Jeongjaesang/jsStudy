// 화살표 함수와 일반 함수와의 차이

const Foo = () => {};
//new Foo(); // 화살표 함수는 생성자를 생성할 수 없는 non - constructor입니다.

// 나머지 프로토타입 관련부분은 프로토타입을 다시 공부한 다음에 추가하여 정리하겠습니다.

// this

class Prefixer {
  constructor(prefix) {
    this.prefix = prefix;
  }

  add(arr) {
    return arr.map(function innerFunc(item) {
      return this.prefix + item;
    });
  }
  // add 메서드는 arr배열을 받아서 arr배열의 각 요소에 대해서 innerFunc을  시행 해줍니다.
  // arr배열의 요소마다 실행되는 innerFunc 함수는 arr의 각요소(=item) 에다가 this.prefix값을 더해주는 함수입니다.
}

const prefixer = new Prefixer("jaesang's ");
//console.log(prefixer.add(["code", "study"]));
// 하지만 여기서 에러가 나는데 그 이유는 innerFunc는 map함수의 매개변수가 되는 콜백함수이므로 콜백함수에 this는 전역객체가 되는데
// 전역객체에서는 prefix라는 속성이 없기 때문에 this.prefix는 undefined가 반한됩니다.

let res = (() => this)();
//console.log(res)
// 일반 함수의 경우 일반함수로 호출되었을때 함수가 어디에 정의되었든 관계 없이 this가 전역객체로 바인딩됩니다.
// 하지만 화살표 함수의 경우 화살표 함수가 속한 함수의 상위 함수의 this가 화살표 함수의 this가 됩니다.
// 위에서는 화살표 함수의 상위 함수가 없으므로 this는 전역객체가 됩니다.

let res2 = function () {
  return this.x;
}.bind(this);
//()안에 함수는 일반 함수이고 일반 함수의 this는 일반함수가 어디에 정의되었든 전역객체가 바인딩이 됩니다.
// bind(this)에서 this는 전역객체이고 ()안에 함수역시 이미 this를 전역객체로 갖지만 bind(this)에 의해 this로 한번 더 바인딩이 됩니다.

//console.log(res2)

// (function(){
//     const foo = ()=> console.log(this);
//     foo();
// }).call({a:1,});

// ()안에 익명함수의 this가 call함수에 의해 {a:1}로 바인딩 되었습니다.
// foo 함수는 화살표 함수이므로 foo함수의 this는 자신이 정의되어진 함수 내에 this를 따릅니다.
// 그러므로 foo함수의 this는 {a:1} 입니다.

// (function(){
//     const bar = ()=> ()=> console.log(this);
//     bar()();
// }).call({a:1,});

// 만약 a 화살표 함수를 정의한 함수b 역시 화살표 함수라면 b함수를 정의한 함수 c의 this가 a의 this가 됩니다.

// 프로토타입 관련 부분은 프로토타입을 공부하고 정리한 후 다시 추가하여 정리하겠습니다.

// const any = {
//     name:"any",
//     getName:()=>{
//         console.log(this);
//     }
// }

// any.getName() //getName 함수의 상위 함수가 없으므로 getName 의 this는 전역객체입니다.

class Person {
  constructor() {
    this.name = "jaesang3";
    this.sayHi = () => {
      console.log(`Hi ${this.name}`);
    };
  }
  // sayHi를 정의한 sayHi의 상위 함수는 constructor이고 constructor의 this는 constructor가 생성한 객체입니다.
  // 여기서는 그 객체가 jaesang3이라는 변수에 할당되었습니다.
  // 아무튼 그 객체의 name이 jaesang3이므로 결과적으로 Hi jaesnag3이 출력됩니다.
}

const jaesang3 = new Person();

jaesang3.sayHi();
