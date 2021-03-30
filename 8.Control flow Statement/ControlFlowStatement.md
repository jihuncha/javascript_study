# 8. 제어문

## 제어문은 조건에 따라 코드 블록을 실행하거나 반복 실행할 때 사용한다. 일반적으로 코드는
## 위에서 아래 방향으로 순차적으로 실랭된다. 제어문을 사용하면 코드의 실행 흐름을 인위적으로 제어할 수 있다.
## 하지만 코드의 순서가 변경됨에 따라 직관적인 코드의 흐름을 혼란스럽게 만들어 가독성을 해치는 단점이있다.



###8.1 블록문
**블록문은 0개 이상의 문을 중괄호로 묶은 것으로, 코드 블록 또는 블록이라고 부르기도 한다.
단독으로 사용할수도 있으나 일반적으로 제어문이나 함수를 정의할 때 사용한다.
블록문의 끝에는 세미콜론을 붙이지 않는다는 것에 주의한다.

ex) 
블록문
{
  var test = 10;
}

제어문
var x = 1;
if(x < 10){
    sum(x,2)
    x++;
}

함수 선언문
function sum(a,b){

    return a + b;
}


###8.2 조건문
조건문은 주어진 조건식의 결과에 따라 코드블록(블록문)의 실행을 결정한다.
자바스크립트는 if else, switch 두가지 조건문을 제공한다.

8.2.1 if else문 
if(조건식){
//참일경우
}else if(추가 조건식){
//참일 경우
}else{
//거짓일 경우
}

if문의 조건식은 boolean 값으로 평가되어야 한다. 만약 if 문의 조건식이 boolean 값이 아니면
자바스크립트 엔진에 의해 암묵적으로 boolean 값으로 강제 변환되어 실행할 코드 블록을 결정한다.

대부분의 if else 문은 삼항 연산자로 변경 가능하다.

~~~
var x = 2;

var result= x % 2 ? '홀수' : '짝수';
~~~
--> 0은 false로 취급된다

8.2.2 switch 문
switch문은 주어진 표현식을 평가하여 그 값과 일치하는 표현식을 갖는 case문으로 실행 흐름을 옮긴다.
case문은 상황을 의미하는 표현식을 지정하고 콜론으로 마친다. 그리고 그 뒤에 실행할 문들을 위치시킨다.

case에 일치하는 조건이 없다면 default 문으로 이동하는데, default문은 선택사항으로 사용할수도,
안할수도 있다.

```
switch(표현식){
  case 표현식1 : 실행할 소스
               break;
  case 표현식2 : 실행할 소스
                break;
  default : 일치하는게 없을 경우 실행할 기본 소스
}

```

if else 조건식은 boolean 값으로 평가되야 하지만 switch문의 표현식은 문자열이나 숫자 값인 경우가 많다.
따라서 다양한 상황에 따라 실행할 코드 블록을 결정할 때 사용한다.


예제
~~~
var month = 11;
var monthName;

switch(month){
    case 1: monthName='1월';
    case 2: monthName='2월';
    case 3: monthName='3월';
    case 4: monthName='4월';
    case 5: monthName='5월';
    case 6: monthName='6월';
    case 7: monthName='7월';
    case 8: monthName='8월';
    case 9: monthName='9월';
    case 10: monthName='10월';
    case 11: monthName='11월';
    case 12: monthName='12월';
    default: monthName='Invalid month';
}

console.log(monnthName);
~~~


####위 예제를 실행하면 11월이 아닌 Invalid month가 출력된다. switch문의 표현식의 결과와 일치하는 case문으로 이동하여 실행은 됐지만
###탈출하지 않고 switch문이 끝날 때까지 이후의 모든 case문과 default문을 실행했기 때문이다. 이를 fall through(폴스루)라 한다.
'break' 문을 사용하여 원하는 조건 실행 후 탈출시켜야 한다.

```javascript

var year = 2000; // 윤년으로 2월이 29일
var month = 2;
var days=0;

switch(month){
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        day =31;
        break;
    case 4: case 6: case 9: case 11:
        day=30;
        break;
    case 2: //윤년 계산 알고리즘
            //1. 4로 나누어 떨어짐
            //2. 4와 100으로 나누어 떨어지는 해는 평년
            //3. 400으로 나누어 떨어지는 해는 윤년
            days=((year%4===0 && year%100 !==0)|| (year % 400===0)) ? 29 : 28;
            break;
  defaulf:console.log('Invalid month');
  
}

console.log(days);

```



###8.3 반복문

반복문은 조건식의 평가 결과가 참인 경우 코드 블록을 실행한다. 그 후 조건식을 다시 평가하여 여전히 참인 경우
코드 블록을 다시 실행한다. 이는 조건식이 거짓일 때까지 반복한다.
*자바 스크립트는 for, while, do...while 문을 제공한다*

**자바스크립트는 배열을 순회할 때 사용하는 forEach 메서드, 객체의 프로퍼티를 열거할 때 사용하는 for..in문**
**ES6에서 도입된 이터러블을 순회할 수 있는 for...of문과 같이 반복문을 대체할 수 있는 다양한 기능을 제공한다**


####8.3.1 for문
for문은 조건식이 거짓으로 평가될때까지 코드블록을 반복한다.
```javascript
for(var i=0; i< 10 ; i++){
    console.log(i);
    
}
```
> 0 1 2 3 4 5 6 7 8 9


2중 for문

```javascript
for(var i=1; i <=6; i++){
    for(var j=1; j <=6; j++){
        if(i+j===6) console.log(`[${i}, ${j}]`);
    }
}
 
```

> [1,5] [2,4] [3,3] [4,2] [5,1]


####8.3.2 while문

while문은 주어진 조건식의 평가 결과가 참이면 코드 블록을 계속해서 반복 실행한다. for문은 반복 횟수가 명확할 때 사용하고
while문은 반복 횟수가 불명확할 때 주로 사용한다.

while문은 조건문의 평가 결과가 거짓이 되면 코드 블록을 실행하지 않고 종료한다.

```javascript
var count=0;

while(count < 3){
    console.log(counnt);
    count++;
}
```


```javascript
var count=0;

while(true){
    console.log(count);
    count++;
    if(count===3) break;
    
}
```
> 0 1 2




####8.3.3 do...while문
do..while문은 코드 블록을 먼저 실행하고 조건식을 평가한다. 따라서 코드 블록은 무조건 한 번 이상 실행된다.

```javascript
var count=0;

do{
    console.log(count); // 0 1 2
    count++;
    
}while(count < 3);
```


###8.4 break 문
switch문과 while문에서 살펴보았듯이 break 문은 코드 블록을 탈출한다. 좀 더 정확히 표현하자면 코드 블록을
탈출하는 것이 아니라 레이블 문, 반복문 또는 switch문의 코드 블록을 탈출한다. 이 외의 코드 블록에서 break문을 
사용하면 SyntaxError가 발생한다.

> 레이블 문이란 식별자가 붙은 문을 말한다.

```javascript
//foo라는 식별자가 붙은 레이블 문
foo: console.log('foo');
```


레이블 문은 프로그램의 실행 순서를 제어하는데 사용한다. 사실 switch문의 case 문과 default문도 레이블 문이다.
레이블 문을 탈출하려면 break 문에 레이블 식별자를 지정한다.

```javascript
foo: {
    console.log(1);
    break foo;
    console.log(2);
}


```

```javascript
//outer라는 식별자가 붙은 레이블 for문
outer: for(var i=0; i < 3 ; i++){
    for(var j=0; j<3; j++){
        // i+j===3이면 outer라는 식별자가 붙은 레이블 for문을 탈출한다.
        if(i+j===3) break outer;
        console.log(`inner [${i}, ${j}]`);
    }
}

console.log('Done!');

```

###8.5 continue무ㅜㄴ
continue문은 반복무ㅜㄴ의 코드 블록 실행을 현 지점에서 중단하고 반복문의 증감식으로 실행 흐름을
이동시킨다. break문처럼 반복문을 탈출하지는 않는다.

```javascript
var string='Hello world';
var search = 'l';
var count=0;

for( var i=0; i< string.length ; i++){
    if(string[i] !== search) continue; //continue문이 실행되면 이후 문들이 실행되지 않고 다음 for문 진행
    count++;
}

```





























