# 객체 리터럴

## 10.1 객체란?
자바스크립트는 객체 기반의 언어. 원시 값을 제외한 나머지 값 (함수, 배열, 정규 표현식)은 모두 객체이다.


### 객체 타입 특징
1. 다양한 타입의 값을 하나의 단위로 구성한 복합자료구조
2. 원시 값은 변경 불가능하지만, 객체는 변경가능한 값 (Mutable value)
   

~~~javascript
var person = {
    //프로퍼티
    name : 'Lee' 
    age : 20
}
~~~

name, age -> property key

'Lee', 20 -> property value

1. 자바스크립트에서 사용되는 모든 값은 프로퍼티 값이 될 수 있다.
2. 자바스크립트 함수는 일급 객체이므로 값으로 취급할 수 있다.
3. 프로퍼티의 값이 함수인 경우는 일반 함수와 구별하기 위해 method라고 부른다.

#### 일급객체
* 일급객체(First-class Object)란 다른 객체들에 일반적으로 적용 가능한 연산을 모두 지원하는 객체를 가리킨다.
*  https://velog.io/@reveloper-1311/%EC%9D%BC%EA%B8%89-%EA%B0%9D%EC%B2%B4First-Class-Object%EB%9E%80

(3번의 메서드 예시)
~~~javascript
var counter = {
    num : 0, // 프로퍼티
    //메서드
    increase : function(){
        this.num++;
    }
}
~~~


## 10.2 객체 리터럴에 의한 객체 생성
자바스크립트는 프로토타입 기반 객체지향 언어로써 객체 지향 언어와 달리 다양한 객체 생성 방법을 지훤한다.

* 객체 리터럴
* Object 생성자 함수
* 생성자 함수
* Object.create 메서드
* 클래스(ES6)

### 객체 리터럴
객체 생성 방법 중에서 가장 일반적인 방법

객체 리터럴은 중괄호({...}) 내에 0개 이상의 프로퍼티를 정의한다. 변수에 할당되는 시점에, 자바스크립트 엔진은 객체 리터럴을 해석해 객체를 생성함.

[예제 10-1] 객체리터럴
~~~javascript
var person = {
    name:"Lee",
    sayHello:function(){
        console.log(`hello! my name is ${this.name}.`);
    }
};

console.log(typeof person) //object
console.log(person) //{ name: 'Lee', sayHello: [Function: sayHello] }
~~~

[예제 10-2] 프로퍼티를 선언하지 않으면 빈 객체 생성
~~~javascript
var empty = {};
console.log(typeof empty)
~~~

### 참고
객체 리터럴 이외의 객체 생성 방식은 함수를 사용한다. -> 함수 살펴본 이후에 설명이나옴

(ex) Object 생성자 함수의 예시
~~~javascript
var person = new Object();
console.log(person.name) //undefined
console.log(person.email)
console.log(person.birth)

person.name = "test";
person.email = "test@example.com";
person.birth = "1207";
console.log(person.name) //test
console.log(person.email)
console.log(person.birth)
~~~

## 10.3 프로퍼티
객체는 프로피티의 집합이다. 프로퍼티는 Key, Value로 구성된다.

~~~javascript
var person = {
    //property key 와 value
    name : 'Lee' 
    age : 20
};
~~~

### 특징
* 프로퍼티 키: 빈 문자열을 포함하는 모든 문자열 또는 심벌 값
* 프로퍼티 값: 자바스크립트에서 사용할 수 있는 모든 값

### 프로퍼티 키의 네이밍
프로퍼티 키는 프로퍼티 값에 접근할 수 있는 이름으로 식별자 역할을 한다. 하지만 반드시 식별자 네이밍 규칙(4.7장 참고)을 따를 필요는 없다. 
* 식별자 네이밍 규칙에 따르는 이름의 경우 따옴표 생략하고 사용가능
* 반대로 식별자 네이밍 규칙에 따르지 않는 경우는 따옴표를 사용

[에제 10-4]
~~~javascript
var person = {
    firstName : 'Jihun', //식별자 네이밍 규칙 준수
    'last-name' : 'Cha'  //식별자 네이밍 규칙을 준수안함
};
console.log(person); //{ firstName: 'Jihun', 'last-name': 'Cha' }
~~~

[에제 10-5] 식별자 네이밍 규칙을 따르지 않고,따옴표를 사용하지 않는 경우 error발생
~~~javascript
var person = {
    firstName : 'Jihun', 
    last-name : 'Cha'  
};
console.log(person); //SyntaxError: Unexpected token '-'
~~~


문자열 또는 문자열을 평가하는 표현식을 사용해 프로퍼티 키를 동적으로 생성이 가능하다.

[에제 10-6] 동적으로 사용하는 경우
~~~javascript
var obj = {};
var key = 'hello';

// es5 프로퍼티 key 동적 사용
obj[key] = 'world';

// es6 개선된 프로퍼티 이름
// var obj = {[key]:'world'}

console.log(obj); //{ hello: 'world' }
~~~

### key로 사용할 수 있지만 의미가 없다!!
* 빈 문자열을 프로퍼티 키로 사용해도 에러 발생하지 않는다. -> 빈 문자열이므로 의미 없음
* var,function 등의 예약어를 key이름으로 해도 에러 발생하지않는다. -> 에상치 못한 에러가 발생 할 수 도 있으므로 사용하지 않음

[에러를 발생할만한 예제들]
~~~javascript
var foo = {
    //빈문자열을 key로 사용 가능
    '' :'',
    //예약어를 key로 사용 가능
    var : '',
    function :''
};

console.log(foo); //{ '': '', var: '', function: '' }
~~~

### 프로퍼티 키에 문자열/심벌타입 외에 값을 사용하면 암묵적 변환을 통해 문자열이 된다.
~~~javascript
var foo = {
    0 : 1,
    1 : 2,
    2 :3
};

console.log(foo); //{ '0': 1, '1': 2, '2': 3 }
~~~

### 동일한 key이름을 중복으로 사용하면 나중에 선언한 프로퍼티 값으로 사용된다.
~~~javascript
var foo = {
    name : "lee",
    name : "kim"
};

console.log(foo); //{ name: 'kim' }
~~~


## 10.4 메서드
프로퍼티의 값이 함수일 경우 메서드라고한다.(일반 함수와 구별 하기 위함.)
메서드 = 객체에 묶여 있는 함수 (12장 참고)

[예제 10-11]
~~~javascript
var circle = {
    radius : 5,

    getDiameter :function(){
        return 2 * this.radius;
    }

};

console.log(circle.getDiameter()); //10
~~~


## 10.5 프로퍼티 접근
* 마침표 프로퍼티 접근 연산자(.)을 사용하는 마침표 표기법 (dot notation)
* 대괄호 프로퍼티 접근 연산자([...])을 사용하는 대괄호 표기법(bracket notation)
   -> 대괄호의 경우 프로퍼티키는 반드시 따옴표('')로 감싸야한다.

(참고)
프로퍼티에 없는 key에 접근하는 경우 undefined를 반환한다.

[예제 10-12, 10-13,14]
~~~javascript
var person = {
    name : "Lee"
};

console.log(person.name); //Lee
console.log(person['name']); //Lee
console.log(person.age); //undefined
console.log(person[name]); //name is not defined
~~~

* 자바스크립트 식별자 네이밍 규칙이 맞지 않는 경우는 대괄호를 사용해라.

[예제 10-15]
~~~javascript
var person = {
    'last-name' : 'Lee',
    1:10
}

console.log(person.'last-name'); //SyntaxError: Unexpected string
console.log(person.last-name); //ReferenceError: name is not defined
console.log(person[last-name]); //ReferenceError: last is not defined
console.log(person['last-name']); //Lee

console.log(person.'1'); //SyntaxError: Unexpected string
console.log(person.1);  //SyntaxError: Unexpected number(?)
console.log(person[1]); //10 person[1] -> person['1']
console.log(person['1']); //10

~~~