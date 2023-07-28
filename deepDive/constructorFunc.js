console.log(new Circle(2))
// 전역코드드의 평가과정에서 이미 Circle함수가 생성되었기 때문에
// Circle함수가 호출되었을 때 Circle함수의 코드대로 실행됩니다.
// new 연산자와 함께 함수를 호출하면 해당 함수는 생성자 함수로 동작하게 됩니다. 
// new 연산자와 함께 함수를 호출했을 때 함수내에서의 this는 함수가 생성한 객체가 됩니다.

function Circle(radius){
    // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩됩니다(= this는 암묵적으로 생성된 객체입니다.)
    console.log(this); // Circle {}

    // 2. this에 바인딩 되어 있는 인스턴스( {} )를 초기화 합니다.
    this.radius = radius;
    this.getDiameter = function(){
        return 2 * this.radius;
    }
    // 3. 완성된 인스턴스가 바인딩 된 this가 암묵적으로 반환됩니다.
}

const c1 =  Circle(2);
// new 연산자 없이 함수를 호출하면 그 함수 안에서의 this는 전역객체가 됩니다.

