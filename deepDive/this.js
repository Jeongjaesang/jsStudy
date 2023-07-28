// 프로토타입 부분과 call,bind,apply 함수 내용은 추후에 추가하여 정리할 예정입니다.

//1.전역코드 평가
// circle 식별자가 호이스팅 됩니다.
//2.전역코드 실행
// 객체가 생성되어 평가됩니다.
// 생성된 객체가 circle 식별자에 할당됩니다.
const circle = {
  radius: 5,
  getDiameter() {
    return 2 * this.radius;
  },
};

function foo() {
  console.log("foo's this: ", this); // new 연산자 없이 일반 함수로 foo함수를 호출 할 경우, foo함수의 this는 전역객체입니다.

  function bar() {
    console.log("bar's this", this); // 마찬가지로 중첩으로 되어 있어도 일반 함수로 호출 된다면 bar함수의 this는 전역객체입니다.
  } // 즉, 일반함수로 호출 할경우 this는 항상 전역객체이므로 this는 사용할 의미가 없습니다.
  bar();
}

//foo();

const obj = {
  value: 100,

  foo() {
    console.log("foo's this", this); // 2 에서 foo함수를 호출한 객체가 obj입니다. 그러므로 foo에서의 this는 obj입니다.
    console.log("foo's this.value", this.value);

    function bar() {
      console.log("bar's this", this); // 1 에서 bar함수가 일반 함수로 호출되었습니다. 그러므로 bar의 this 는 전역객체입니다.
      console.log("bar's this.value", this.value);
    }

    bar(); // 1
  },
};

//obj.foo();//2

const jaeSang = {
  name: "jaeSang",
  getName() {
    return this.name;
  },
};

//console.log(jaeSang.getName())
// getName함수를 호출한 객체가 getName에서 사용하는 this입니다.
// 여기서는 jaeSang 객체로 getName을 호출했으므로 getName의 this는 jaeSang에 할당된 객체입니다.

const jaeSang_copied = { name: "jeaSang_copied" };
jaeSang_copied.getName = jaeSang.getName;

console.log(jaeSang_copied.getName());
// 여기서는 jaeSang_copied 객체로 getName을 호출했으므로 getName의 this는 jeaSangCopied에 할당된 객체입니다.
