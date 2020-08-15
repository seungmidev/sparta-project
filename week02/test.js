function checkGeneration(age) {
    if(age > 120) {
        alert('와 19세기에 태어나셨군요!')
    } else if(age >= 80) {
        alert('80세 이상! 인생은 여든부터!')
    } else {
        alert('젊으시군요! 장래희망이 뭔가요?')
    }
}

function compare(a, b) {
    if(a > b) {
        return a;
    } else if(a < b) {
        return b;
    } else {
        alert('a와 b는 같다')
    }
}

for(let i = 100; i >= 0; i--) {
    console.log(i)
}

let fruitsBasket = ['사과','감','감','배','포도','포도','딸기','포도','감','수박','딸기']
function countFruit(fruitsBasket) {
    let count = 0;
    for(let i = 0; i < fruitsBasket.length; i++) {
        let fruit = fruitsBasket[i];
        if(fruit == '딸기') {
            count += 1;
        }
    }
    return count;
}
countFruit(fruitsBasket)

function countUnderTwentyFive(cityAirList) {
    let count = 0;
    for(let i = 0; i <cityAirList.length; i++) {
        let mise = cityAirList[i];
        let pm = mise.PM10;
        //let msrste = mise.MSRSTE_NM;

        if(pm < 25) {
            count++;
        }
    }

    return count;
}
countUnderTwentyFive(cityAir);