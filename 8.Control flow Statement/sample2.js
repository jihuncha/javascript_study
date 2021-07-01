function sum(a){
    console.log(a);
    for(var i=0; i < 3 ; i++){
        for(var j=0; j<3; j++){
            // i+j===3이면 outer라는 식별자가 붙은 레이블 for문을 탈출한다.
            if(i+j===3) return;
            console.log(`inner [${i}, ${j}]`);
        }
    }
}
sum(1);