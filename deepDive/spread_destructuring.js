// spread 문법을 사용할 수 있는 대상은 for ... of 문으로 순회할 수 있는 이터러블이다!

console.log(...[1, 2, 3]); // 배열은 이터러블이다!, output: 1 2 3

console.log(..."hello"); // 문자열은 이터러블이다!, output: h e l l o

// 출력되는 것은 각 이터러블의 목록이다.

//let va = ...[1,2,3] 목록은 변수에 할당할 수 없어 에러가난다.

// console.log(...{ a: 1, b: 2 }); 이터러블이 아닌 일반 객체리터럴에는 스프레드 문법을 사용할 수 없다.

console.log(Math.max(...[1, 2, 3]));

console.clear();

// 객체 리터럴 내부에서 사용하는 경우

const obj = { x: 1, y: 2 };

const copy = { ...obj };

console.log(copy);

const jaesangInfo1 = { name: "jeasang", age: 25, sex: "male" };
const jaesangInfo2 = { height: 164, weight: 57 };

const jaesangInfo = { ...jaesangInfo1, ...jaesangInfo2 };

console.log(jaesangInfo);

const state = {
  fetchLanguages: ["java", "javaScript"],
  selectedLanguages: ["java"],
};

const nextState = {
  fetchLanguages: ["C", "Csharp", "Cplpl"],
  selectedLanguages: ["java"],
};

const currentState = { ...state, ...nextState };
