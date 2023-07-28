// 1. promt로 id 와 password를 받는다.
// 2. id 와 password가 옳을 경우 해당 사용자의 정보를 alert해준다.

class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      if (id === "wotkd0909" && password === "wotkd1935") {
        setTimeout(resolve(id), 1500);
      } else {
        reject(new Error("not found from loginUser"));
      }
    });
  }

  getRoles(userId) {
    return new Promise((resolve, reject) => {
      if (userId === "wotkd0909") {
        setTimeout(resolve({ name: "jaesang", role: "sometingSpecial" }), 1000);
      } else {
        reject(new Error("not found from getRoles"));
      }
    });
  }
}

const us = new UserStorage();

let id = prompt("id를 입력하세요");
let password = prompt("password를 입력하세요");

us.loginUser(id, password)

  // id와 password가 옳바른 경우
  // us.loginUser(id, password) 는 값이
  // {state:fulfilled, stateResult:wotkd0909}인 프로미스 객체를 반환한다.

  .then((id) => {
    return us.getRoles(id);
  })

  // then의 콜백함수에 들어가는 인자는 promise객체의 stateResult값 ,즉 wotkd0909이다.
  // 이 콜백함수는 us.getRoles(id) 를 반환한다.
  // us.getRoles의 인자로 전해지는 id값이 올바른 경우 us.getRoles는 값이 {name:'jaesang', role:'somethingSpecial'} 인 프로미스 객체를 반환한다.

  .then((userInfo) =>
    alert(`hello ${userInfo.name}, your role is ${userInfo.role}`)
  );

// 쉽게 말해 resolve, reject 함수는 프로미스 객체에 서버에서 가져온 값을 저장하는 역할(producer)이고
// then, catch 함수는 저장된 프로미스 객체의 값을 사용해서 무언가를 하는 함수이다. (프로미스 객체를 반환하는 용도로도 많이 쓰인다.)
