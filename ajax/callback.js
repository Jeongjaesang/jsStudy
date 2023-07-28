class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    const loginUserCallBackFunc = () => {
      if (id == "wotkd0909" && password == "wotkd1935") {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    };

    //loginUser함수는 id와 password가 옳은 지 확인하여 옳다면 onSuccess함수를 호출하여 id를 건네주고
    // 옳지 않다면 옳지 않은 아이디라고 error 메세지를 보여준다.

    setTimeout(loginUserCallBackFunc, 2000);
  }

  getRoles(user, onSuccess, onError) {
    const getRolesCallBackFunc = () => {
      if (user === "wotkd0909") {
        onSuccess({ name: "jaesang", role: "somethingSpecial" });
      } else {
        onError(new Error("no access"));
      }
    };
    setTimeout(getRolesCallBackFunc, 2000);
  }
  // getRoles 함수는 user가 옳은 user인지 확인하여 옳은 user라면 user에 대한 정보를 onSuccess라는 함수에 넣어주고
  // 아니라면 에러메세지를 보여준다.
}

const us = new UserStorage();

let id = prompt("id를 입력하세요;");
let password = prompt("password를 입력하세요;");

const onSuccess_loginUser = (id) => {
  const onSuccess_getRoles = (userObj) => {
    alert(`hi ${userObj.name} your role is ${userObj.role}`);
  };

  const onError_getRoles = () => {
    console.log("error from getRoles");
  };
  us.getRoles(id, onSuccess_getRoles, onError_getRoles);
};
// 사용자가 입력한 id와 password가 옳을 경우 호출되는 함수이다.
// 결과적으로 사용자 정보(사용자의 이름과 직책)를 보여준다.

const onError_loginUser = () => {
  console.log("error from loginUser");
};

us.loginUser(id, password, onSuccess_loginUser, onError_loginUser);

// 비동기 작업일 경우 비동기 작업이 완료되고 실행할 함수(콜백함수)를 명시적으로 작성해서 비동기 작업 함수에 인자로써 넣어주는
// 일이 잦기 때문에 가독성 면에서 정말 짜증난다.
