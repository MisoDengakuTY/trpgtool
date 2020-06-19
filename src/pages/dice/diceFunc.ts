
const rand = (n : number) =>{ //return randam 1 - b number
    return Math.floor(Math.random() * Math.floor(n)) + 1

}
const diceFunc = (a : number, b : number) => {
    var dice : number[] = new Array()

    for(var i = 0; i < a; i++){
        dice.push(rand(b))
    }

    return dice;
}

export default diceFunc;