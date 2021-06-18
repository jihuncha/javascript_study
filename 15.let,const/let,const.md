 🎉 : 책에 없는 내용 

 # 15.1 var 키워드로 선언한 변수의 문제점 
(es5까지 변수를 선언할 수 있는 유일한 방법은 var 키워드 사용, es5 var 문제 발생으로 es6 기술이 생김 > caniuse.com)

### 15.1.1 변수 중복 선언 혀용 
[예제🚩]
    var x = 1; 
    var y = 1; 

    var x = 100; 
    var y; 

    console.log(x); // 100 
    console.log(y); // 1 

### 15.1.2 함수 레벨 스코프 : var 키워드로 선언한 변수는 오로지 함수의 코드 블록만을 지역 스코프로 인정함. 
  > 블록{}이 없음, 블록을 걍 무시함 
[예제1🚩]
    var x = 1; 
    if(true){
        // x는 전역 변수임. 이미 선언된 전역 변수 x가 있으므로 x변수는 중복 선언됨. 
        // 변수값이 변경되는 부작용을 발생 
        var x = 10; 
    }

    console.log(x); //10

[예제2🚩]:이해잘안감...  
    var i = 10; 
    
    // for문에서 선언한i는 전역 변수다. 이미 선언된 전역 변수 i가 있으므로 중복 선언된다. 
    for(var i=0; i < 5; i ++){
        console.log(i); // 0 1 2 3 4 
    }

    // 의도치 않게 i 변수의 /값이 변경되었다. 
    console.log(i); // 5 왜 5인거지???

> let의 경우 ..... 
    let i = 10; 
    
    for(let i=0; i < 5; i ++){
        console.log(i); // 0 1 2 3 4 
    }

    console.log(i); // 10 ?? let i 가 중복되는데 글로벌이랑 블록은 같은 스코프가 아니라서 i라는 같은 변수에 다른 값을 넣은 수 있는건지? 


### 15.1.3 변수 호이스팅 
🎉 (면접대비)호이스팅이란 ? 어디에 선언했냐에 상관없이, 항상 제일 위로 선언을 끌어올려주는 것을 말함. 
🎉 대부분 언어는 변수를 선언하고나서, 값을 할당 

[예제🚩]
    이 시점에서는 변수 호이스팅에 의해 이미 foo 변수가 선언되었다. (1. 선언단계)
    변수 foo는 Undefinded로 초기화된다(2. 초기화 단계)
    console.log(foo); // undefined

    변수에 값을 할당 (3. 할당 단계)
    foo = 123; 

    console.log(foo); // 123 

    변수 선언은 런타임 이전에 자바스크립트 엔진에 의해 암묵적으로 실행된다. 
    var foo; 

 🎉 global(전역변수)한 변수들은 어플리케이션이 실행되는 순간부터 끝날때까지 항상 메모리에 탑재되어있기 때문에 
 🎉 최소한으로 쓰는게 좋고, 가능한 클래스나 함수 if, for 등 필요한 부분에서만 정의해서 쓰는게 좋다. 

[예제🚩]
    let name1 = '123';
    console.log(name1);
    name1 = 'hello';
    console.log(name1);

# 15.2 let 키워드 

 🎉 block scope 
 🎉 {} 블럭안에 작성하면 블록 밖에서는 블록 안에 내용들을 볼 수 없다. 
 🎉 콘솔을 이용해서 블록밖에서 name2이라는 변수에 접근하면 아무런 내용을 볼 수 없다. 

[예제1🚩]
    {
        let name2 = '456';
        console.log(name2);
        name2 = 'bye';
        console.log(name2);
        console.log(name1); // global한 변수가 위에서 선언되었기 때문에 블록안에서도 출력되 보임 : hello 
    }

    console.log(name2);

[예제2🚩]
    var foo = 123; 
    // var 키우드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용한다. 
    // 아래 변수 선언문은 자바스크립트 엔진에 의해 var 키워드가 없는 것처럼 동작한다. 
    var foo = 456; 

    let var = 123; 
    // let이나 const 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용하지 않는다. 

 🎉 const 키워드 
 🎉 값을 선언함과 동시에 할당한 뒤로는 절대 값을 변경할 수 없는 것. 
 🎉 보안상의 이유, 한번 작성한 값을 해커들이 코드를 변경할 수 없다. 
 🎉 (security, thread safety, reduce human mistakes)

### 15.2.2 블록 레벨 스코프 
 > var : 키워드로 선언한 변수는 오로지 함수의 코드 블록만을 지역 스코프로 인정하는, 함수 레벨 스코프 따름 
 > let : 키워드로 선언한 변수는 모든 코드 블록(함수, if문, for문, while문, try/catch문 등)을 지역 스코프로 인정하는, 블록 레벨 스코프 따름 

[예제1🚩]
    let foo = 1; // 전역 변수 
    {
        let foo = 2; // 지역 변수 
        let bar = 3; // 지역 변수 
    }

    console.log(foo); // 1 
    console.log(bar); // ReferenceError: bar is not defined 

### 15.2.3 변수 호이스팅 
> var 키워드로 선언한 변수와 달리 let 키워드로 선언한 변수는 변수 호이스팅이 발생하지 않는 것처럼 동작함. 
> var : "선언 단계"와 "초기화 단계"가 한번에 진행 
> let : "선언 단계"와 "초기화 단계"가 분리되어 진행, 초기화 단계가  실행되기 이전에 변수에 접근하려 하면 ReferenceError 발생. 
[예제🚩]
    console.log(foo); // ReferenceError: foo is not defined 
    let foo; 

[예제🚩]
> var 키워드로 선언한 변수는 런타임 이전에 선언 단계와 초기화 단계가 실행 됨. 
    // 따라서 변수 선언문 이전에 변수를 참조할 수 있다. ** (위 참고)다른 언어는 변수를 선언하고 값을 할당 
    console.log(foo); // undefined 

    var foo; 
    console.log(foo); // undefined

    foo = 1; // 할당문에서 할당 단계가 실행된다. 
    console.log(foo); // 1 

[예제🚩]
> let 예시 
    console.log(foo); // ReferenceError: foo is not defined 

    let foo; // 변수 선언문에서 초기화 단계가 실행된다. 
    console.log(foo); // undefined (var에서는 변수 선언하기 전에 변수 참조해서 이거 뜨는데 .. ㅎ)

    foo = 1; // 할당문에서 할당 단계가 실행된다. 
    consle.log(foo); // 1 (원하는 정상 출력 성ㅋ공ㅋ)

### 15.2.4 전역 객체와 let 
> var 키워드로 선언한 전역 변수와 전역 함수, 그리고 선언하지 않는 변수에 값을 할당한 암묵적 전역은 전역 객체 window의 프로퍼티가 된다.
> 전역 객체의 프로퍼티를 참조할 때 window를 생략할 수 있음. 
[예제🚩]
    // 전역 변수 
    var x = 1; 
    // 암묵적 전역 
    y = 2; 
    // 전역 함수 
    function foo(){}

    // var 키워드로 선언한 전역 변수는 전역 객체 window의 프로퍼티다. 
    console.log(window.x); //1 
    // 전역 객체 window의 프로퍼티는 전역 변수처럼 사용할 수 있다. 
    console.log(x); //1 

    // 암묵적 전역은 전역 객체 window의 프로퍼티이다. 
    console.log(window.y); //2 
    console.log(y); // 2 

    // 함수 선언문으로 정의한 전역 함수는 전역 객체 window의 프로퍼티다. 
    console.log(window.foo); // f foo(){}
    //전역 객체 window의 프로퍼티는 전역 변수처럼 사용할 수 있다. 
    console.log(foo); // f foo(){}

[예제🚩]
> let, const 키워드로 선언한 전역 변수는 전역 객체 window의 프로퍼티가 아니다. 
    let x = 1; 
    console.log(window.x); // undefined 
    console.lg(x); // 1

# 15.3 const 키워드 
> const 키워드는 상수를 선언하기 위해 사용한다. 
> 하지만 반드시 상수만을 위해 사용하지는 않는다. 

[예제🚩] 
> const 키워드로 선언한 변수는 반드시 동싱 초기화 해야 한다. 
    const foo = 1; 
> 그렇지 않으면 문법 오류 발생 
    const foo; // SyntaxError: Missing initalizer in const declaration 


* 참고 let은 초기화 하고, 선언 나눠서 할 수 있음. 
 let foo; // 변수 선언문에서 초기화 단계가 실행된다. 
    console.log(foo); // undefined (var에서는 변수 선언하기 전에 변수 참조해서 이거 뜨는데 .. ㅎ)

    foo = 1; // 할당문에서 할당 단계가 실행된다. 
    consle.log(foo); // 1 (원하는 정상 출력 성ㅋ공ㅋ)

### 15.3.2 재할당 금지 
> const 키워드로 선언한 변수는 재할당이 금지 됨 
[예제🚩] 
    const foo = 1; 
    foo = 2; TypeError: Assignment to constant variable. 

### 15.3.3 const 상수 : 핵심내용인듯 ...
> 변수의 상대 개념인 상수는 재할당이 금지된 변수를 말함. 

[예제🚩] 
👎 안좋은 예시 
    // 세전 가격 
    let preTaxPrice = 100; 

    // 세후 가격 
    // 0.1의 의미를 명확히 알기 어렵기 때문에 가독성이 좋지 않다. 
    let afterTaxPrice = preTaxPrice + (preTaxPrice * 0.1); 

    console.log(afterTaxPrice); // 110 

[예제🚩] 
👍 const활용, 가독성 높인 예시 
    // 세율을 의미하는 0.1은 변경할 수 없는 상수로서 사용될 값이다. 
    // 변수 이름을 대문자로 선언해 상수임을 명확히 나타낸다. 
    🎉 자바스크립트 변수 명명규칙 : 상수는 대문자, 단어 구분은 _ 로 구분 , 하기 사이트 참고 
    https://velog.io/@recordboy/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B3%80%EC%88%98-%EB%AA%85%EB%AA%85-%EA%B7%9C%EC%B9%99

    const TAX_RATE = 0.1; 
    
    // 세전 가격 
    let preTaxPrice = 100; 

    // 세후 가격 
    let afterTaxPrice = preTaxPrice + (preTaxPrice * TAX_RATE);

    console.log(afterTaxPrice); // 110 s

### 15.3.4 const 키워드와 객체 
> const 키워드로 선언된 변수에 원시 값을 할당한 경우 값 변경 불가 
> but!! const 키워드로 선언된 변수에 객체를 할당한 경우 값을 변경할 수 있음 
[예제🚩] 
    const person = {
        name: 'LEE'
    };

    // 객체는 변경 가능한 값이다. 따라서 재할당 없이 변경이 가능하다. 
    person.name = 'Kim';

    console.log(person); // {name: "Kim"}

# 15.4 변수를 선언할 때는 일단 const 키워드를 사용하자.
> 반드시 재할당이 필요하면 그 때 let 키워드로 바꿔도 됨. 