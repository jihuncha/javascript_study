

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




for(var i=1; i <=6; i++){
    for(var j=1; j <=6; j++){
        if(i+j===6) console.log(`[${i}, ${j}]`);
    }
}
 




foo: {
    console.log('===========foo');
    console.log(1);
    break foo;
    console.log(2);
}



console.log('=====outer');
outer: for(var i=0; i < 3 ; i++){
    for(var j=0; j<3; j++){
        // i+j===3이면 outer라는 식별자가 붙은 레이블 for문을 탈출한다.
        if(i+j===3) break outer;
        console.log(`inner [${i}, ${j}]`);
    }
}

//리턴 확인
for(var i=0; i < 3 ; i++){
    for(var j=0; j<3; j++){
        console.log('리턴');
        // i+j===3이면 outer라는 식별자가 붙은 레이블 for문을 탈출한다.
        if(i+j===3) return;
        console.log(`inner [${i}, ${j}]`);
    }
}

function sum(a){
    console.log(a);
    for(var i=0; i < 3 ; i++){
        for(var j=0; j<3; j++){
            console.log('리턴');
            // i+j===3이면 outer라는 식별자가 붙은 레이블 for문을 탈출한다.
            if(i+j===3) return;
            console.log(`inner [${i}, ${j}]`);
        }
    }
}

function test(){
    var i=3;
    sum(i);
    console.log('test');
}

var string='Hello world';
var search = 'l';
var count=0;
console.log('======hello world');
for( var i=0; i< string.length ; i++){
    if(string[i] !== search) continue; //continue문이 실행되면 이후 문들이 실행되지 않고 다음 for문 진행
    count++;
}

console.log("l 갯수"+count);


