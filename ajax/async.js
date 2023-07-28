// ajax 폴더의 대부분의 내용은 유튜브 채널 엘리의 드림코딩 강의를 참고하였음.

//1. async

// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     resolve("jaesang");
//   });
// }

async function fetchUser() {
  return "jaesang";
}
// 위 두 함수는 동일하다.
// 함수 앞에 async라는 키워드를 붙이면, 코드 블럭을 자동으로 promise로 변환해준다.

const user = fetchUser();
//console.log(user);
//{promiseState:fulfilled, promiseResult:jaesang}이다.
//

//2. await

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  //   await console.log(delay(3000), "i am delay");
  // 왜 3초가 무효화되지? console.log 함수가 프로미스가 아니라서 그런가?
  await delay(3000);
  // await을 붙이면 특정 비동기 작업이 완료 될 때 까지 다음 작업이 실행되지 않는다? (동기적으로 실행되게끔 한다?)
  // await은 async가 붙은 함수 안에서만 사용할 수 있다.
  // promise 객체가 return 되는데 delay 안에서 생성된 promise객체에 resolve함수에 값이 없으므로 promiseResult 는 undefined이다.
  return "사과";
}

// console.log(getApple());
// 3초후에 {promiseState:fulfilled, promiseResult:"사과"}인 객체가 생성된다.

async function getBanana() {
  await delay(3000); // delay함수의 비동기 작업이 완료할 때까지 기다려!
  return "바나나";
}

function pickFruits() {
  return getApple().then((apple) =>
    getBanana().then((banana) => `${apple} and ${banana}`)
  );
}

// pickFruits().then(console.log);

async function pickFruits() {
  const applePr = getApple();
  const bananaPr = getBanana();

  const apple = await applePr;
  const banana = await bananaPr;

  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);
