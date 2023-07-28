// promise는 비동기 처리를 용이하게 하기 위한 object이다.
// promise 함수는 인자로써 executor함수를 받는다. executor함수는 Promise가 생성되자마자 호출된다.
// 이 함수는 비동기적으로 작동한다. (호출되고 작업이 완료할 때 까지 다른 동기 작업이 시행된다.)
// executor함수는 인자로써 resolve 함수와 reject함수를 받는다.
// resolve함수는 서버로 요청한 응답을 성공적으로 받았을 때 호출되는 함수이고 reject함수는 작업에 문제가 생겼을 경우 호출되는 함수이다.
// 이 두 함수중 하나가 호출되기 전까지 promise객체의 상태는 pending 상태이며 이 두 함수중 하나가 호출되어 비동기 처리가 되면 상태가 변화한다.
const myPromise = new Promise((resolve, reject) => {
  console.log("executor just has been called");

  setTimeout(() => {
    resolve("resolved value");
    // 보통 resolve에 들어갈 값은 서버로부터 받아올 데이터이다.
    // reject(new Error("error has occured"));
  }, 10000);
});

//요청한 응답을 성공적으로 받았다면 console.log(myPromise)
//의 값은 {PromiseState:fulfilled, PromiseResult:"resolvedValue"}이다.

//요청한 응답을 성공적으로 받지 못했다면 console.log(myPromise)의 값은
// {PromiseState:rejected, PromiseResult:error이다.}

myPromise.then((value) => {
  console.log(value);
});

// then은 서버로부터 받아온 데이터를 갖고 후속 처리를 해주는 메서드이다.
// then은 비동기 처리 상태가 변화하면 후속 처리 메서드에 인수로 전달한 콜백함수가 선택적으로 호출된다.
// then의 첫 번째 인자로는 비동기 처리가 성공했을 때 호출되는 성공 처리 콜백함수이다.
// 성공 처리 콜백함수의 인자로는 서버로부터 받아온 데이터를 받는다.
// then의 두번째 인자는 비동기 처리가 실패했으 때 호출되는 실패처리 콜백함수이다.

console.log(myPromise); // 10초가 지나기 전 상태를 출력
