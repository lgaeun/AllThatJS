enum Shoes {
    Nike, //auto increment
    Addidas,
}

let myShoes = Shoes.Addidas;
console.log(myShoes);

//예제
enum Answer{
    Yes = 'y',
    No = 'n'
}
function ask(answer: Answer){
    if(answer === Answer.Yes){
        console.log('정답입니다')
    }
    if(answer === Answer.No){
        console.log('오답입니다')
    }
}
ask(Answer.Yes)
ask('y')