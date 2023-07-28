function meaningLess(){
    console.log("I don't have any meaning");
}; // 함수 선언문, 표현식(값)이 아닌 문이다.


(function (){
    console.log("i don't have name");}); // ()연산자 안에 있는 함수 리터럴은 함수 선언문이지만 
   // ()안에 있는 것은 표현식(값)이어야 하므로 js엔진이 함수 선언문처럼 보이는 함수 리터럴을 표현식(값)으로 해석하였다. 

(function (){
console.log("i don't have name");}); 
// 값이므로 같은 값이 여러개가 존재할 수 있다. 

   const meaningLess2 = function(){
    console.log("I don't have any meaning either");
    // 여기서도 마찬가지로 js엔진이 함수 리터럴을 표현식으로 해석해서 
    // meaningLess2 변수에 할당할 수 있는 것이다. 
   };

   let b = (function bar (){
    console.log("my name is bar");
    console.log(bar) // 함수 이름은 함수 몸체 내부에서만 참조할 수 있다. 
}); // ()연산자 안에 있는 함수 리터럴은 함수 선언문이지만 
   // ()안에 있는 것은 표현식(값)이어야 하므로 js엔진이 함수 선언문처럼 보이는 함수 리터럴을 표현식으로 해석하였다. 

   //bar();  // 함수 이름은 함수 몸체 내부에서만 참조할 수 있다.  외부에서 bar함수 이름을 사용하면 에러가 난다.


  
   (function uselessName(){
    console.log("i have to be called by variable, not my name");
}) // ()연산자 안에 있는 함수 리터럴은 함수 선언문이지만 
   // ()안에 있는 것은 표현식(값)이어야 하므로 js엔진이 함수 선언문처럼 보이는 함수 리터럴을 표현식(값)으로 해석하였다. 
   
   //uselessName(); 함수는 식별자로 호출해야한다. usulessName이라는 이름을 가진 함수는 ()안에 있으니까 표현식(값)이다. 
   //useLessName은 함수의 식별자가 아니라 이름이므로 해당 함수를 호출하지 못한다. 

   function varNotExist(){
    console.log("이 함수의 이름은 varNotExist입니다.");
    console.log("varNotExist는 이름이므로 원칙적으로는 외부에서 varNotExist를 사용할 수 없습니다.");
    console.log("하지만 이 함수가 호출되려면 변수에 할당되어야 하므로 js에서 암묵적으로 이 함수의 이름(varNotEixist)라는 이름을 가진 식별자를 생성하여 이 함수를 할당합니다.")
}

//varNotExist(); // 함수 리터럴 단독으로 있을경우(함수 선언문일 경우) varExist라는 식별자를 js엔진이 암묵적으로 생성하여 해당 함수를 할당하기 때문에 
// 외부에서 함수의 이름을 사용할 수 있는 것처럼 보인다. 
   


