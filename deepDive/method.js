// 프로토 타입 생성 여부에 따른 장단점은 추후에 추가하여 정리할 것

// 호출 할 수 있는 객체를 callable, 인스턴스 객체를 생성할 수 있는 함수 객체를 constructor, 인스턴스를 생성할 수 없는 객체를 non-constructure라고 합니다.
//  ES6 이전 함수는 모두 callable,이고 constructor입니다.

var obj = {
    x :10,
    f: function(){
        return this.x;
    } 
};

//console.log(obj.f()); // f함수를 호출한 객체가 obj이므로 this는 obj에 할당된 객체가 되므로 this.x 인 10이 반환됩니다.

var bar = obj.f;
//console.log(bar());
// obj.f는 독립된 객체입니다. bar에 obj.f 함수를 저장합니다.
// obj.f가 호출된게 아니라 그 값 자체가 저장이 된 것이기 때문에 obj.f의 this는 전역객체입니다. 하지만 전역객체의 x라는 속성이 없기 때문에 undefined가 출력됩니다.

//console.log(new obj.f());
// 객체의 메서드도 생성자함수가 될 수 있습니다.(=constructor)


const obj2 = {

    x:1,
    foo(){return this.x;},
    // foo는 메서드 축약표현으로 정의되었습니다. 그러므로 메서드입니다. 그러므로 생성자 함수로써 인스턴스를 생성할 수 없습니다.

    bar: function(){return this.x},
    //bar 는 메서드 축약표현으로 정의되지 않았으므로 메서드가 아닙니다. 그러므로 생성자 함수로 쓰일 수 있고 인스턴수를 생성할 수 있습니다.

}

//new obj.foo();
new obj2.bar();

// 이후에 내용은 프로토타입을 공부하고 이해한 후에 다시 추가하여 정리하겠습니다.
