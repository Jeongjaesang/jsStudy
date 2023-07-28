// 드림 코딩을 보고 내 나름대로 정리하였음.

// 1. 통신은 기본적으로 서버와 클라이언트 간에 이루어진다. 통신을 위한 기술을 ajax라고 부른다.
// 2. 통신에 이용되는 데이터 포멧은 여러가지가 될 수 있다. .html, .css 등..
// 3. JSON은 언어에 상관없이 모든 언어에서 통용되는 포멧이다.

// 다음은 JSON을 사용하는 방법이다.

//1. 클라이언트 딴 입장에서 서버로 데이터를 보낼 때, 클라이언트에서 보낼 데이터를 (JSON 문자열 형식)으로 바꿔준다.
//2 .서버에서 클라이언트에서 보낸 데이터를 받을 때, (받은 JSON 문자열 데이터를 다시 객체로 바꿔준다.)

//1. JSON.stringify

let json = JSON.stringify({ name: "jaesang", state: "fucking lonely" });
// console.log(json);

const myJsonObj = {
  name: "jaesang's jsonObj no.1",
  type: "obj",
  birthDate: new Date(),
  selfIntroDuction: () => {
    `hello I am ${this.name}`;
  },
};

//console.log(JSON.stringify(myJsonObj));
// selfIntroDuction 는 제외된다. 함수는 포함되지 않는다. 왜 포함되지 않는 건지는 잘 모르겠다.

//console.log(JSON.stringify(myJsonObj, ["name", "type"]));
// 두번째 인자에 배열을 넣고, 그 배열안에 해당 객체에 속성을 담으면, 배열 안에 있는 객체의 속성만을 반환한다.

const json2 = JSON.stringify(myJsonObj, (key, value) => {
  console.log(key, value);
  return value;
});
// 두번째 인자로 함수를 넣어줄 경우, 그 함수의 첫 번째 인자는 해당함수의 속성이름, 두번째 인자는 그 속성이름에 값이다.

console.log(json2);

console.clear();

//2. JSON.parse()
const parsedJson = JSON.parse(json2);

console.log(parsedJson);
// JSON 문자열에는 selfIntroDuction 함수가 없었으므로 역시 parse할 때도 selfIntroDuction 함수가 없다.
