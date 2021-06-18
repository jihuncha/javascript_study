//## 15.1 var 키워드로 선언한 변수의 문제점 
// (es5까지 변수를 선언할 수 있는 유일한 방법은 var 키워드 사용, es5 var 문제 발생으로 es6 기술이 생김 > caniuse.com)
// - 15.1.1 변수 중복 선언 혀용 

    var x = 1; 
    var y = 1; 

    var x = 100; 
    var y; 

    console.log(x); // 100 
    console.log(y); // 1 

// - 15.1.2 함수 레벨 스코프 : var 키워드로 선언한 변수는 오로지 함수의 코드 블록만을 지역 스코프로 인정함. 
// ** 블록{}이 없음, 블록을 걍 무시함 

    var x = 1; 
    if(true){
        // x는 전역 변수임. 이미 선언된 전역 변수 x가 있으므로 x변수는 중복 선언됨. 
        // 변수값이 변경되는 부작용을 발생 
        var x = 10; 
    }

    console.log(x); //10


// for 문의 변수 선언문에서 var 키워드로 선언한 변수도 전역 변수가 됨. 

    // var i = 10;
    // for(var i = 0; i < 5; i++){
    //     console.log(i); // 0 1 2 3 4 5
    // }

    // console.log(i); //5
// let의 경우 .. 

    let i = 10;
    for(let i = 0; i < 5; i++){
        console.log(i); // 0 1 2 3 4 5
    }

    console.log(i); //5

// - 15.1.3 변수 호이스팅 
// ** (면접대비)호이스팅이란 ? 어디에 선언했냐에 상관없이, 항상 제일 위로 선언을 끌어올려주는 것을 말함. 
// 대부분 언어는 변수를 선언하고나서, 값을 할당 

    // 이 시점에서는 변수 호이스팅에 의해 이미 foo 변수가 선언되었다. (1. 선언단계)
    // 변수 foo는 Undefinded로 초기화된다(2. 초기화 단계)
    console.log(foo); // undefined

    // 변수에 값을 할당 (3. 할당 단계)
    foo = 123; 

    console.log(foo); // 123 

    // 변수 선언은 런타임 이전에 자바스크립트 엔진에 의해 암묵적으로 실행된다. 
    var foo; 

//** Variable 
//- let (added in ES6)
//- global(전역변수)한 변수들은 어플리케이션이 실행되는 순간부터 끝날때까지 항상 메모리에 탑재되어있기 때문에 
//- 최소한으로 쓰는게 좋고, 가능한 클래스나 함수 if, for 등 필요한 부분에서만 정의해서 쓰는게 좋다. 

    let name1 = '123';
    console.log(name1);
    name1 = 'hello';
    console.log(name1);

//## 15.2 let 키워드 


// ** block scope 
//- {} 블럭안에 작성하면 블록 밖에서는 블록 안에 내용들을 볼 수 없다. 
//- 콘솔을 이용해서 블록밖에서 name이라는 변수에 접근하면 아무런 내용을 볼 수 없다. 

    // {
    //     let name2 = '456';
    //     console.log(name2);
    //     name2 = 'bye';
    //     console.log(name2);
    //     console.log(name1); // global한 변수가 위에서 선언되었기 때문에 블록안에서도 출력되 보임 : hello 
    // }

    // console.log(name2);

// ## const 키워드 
//  ** 값을 선언함과 동시에 할당한 뒤로는 절대 값을 변경할 수 없는 것. 
//  ** 보안상의 이유, 한번 작성한 값을 해커들이 코드를 변경할 수 없다. 
//  ** (security, thread safety, reduce human mistakes)

// ## 15.2.3 변수 호이스팅 
// console.log(foo);
// let foo; 

console.log(foo2); 
var foo2; 

// ### 15.2.4 전역 객체와 let 
// > var 키워드로 선언한 전역 변수와 전역 함수, 그리고 선언하지 않는 변수에 값을 할당한 암묵적 전역은 전역 객체 window의 프로퍼티가 된다.
// > 전역 객체의 프로퍼티를 참조할 때 window를 생략할 수 있음. 
// [예제🚩]
// // 전역 변수 
