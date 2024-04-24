function getRandomCard() {
    // if 1     -> return 11
    // if 11-13 -> return 10
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11 
    } else {
        return randomNumer
    }
}



let cards=[]

let sum=0
let hasBlackJack=false
let isAlive=false
let message=""

let messageEl= document.getElementById("message-el")
console.log(messageEl)

let sumEl = document.getElementById("sum-el")
console.log(sumEl)

let cardEl=document.getElementById("cards-el")

function startGame() {
    isAlive=true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    cardEl.textContent="Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i]+" "
    }
sumEl.textContent= "Sum: "+ sum
    if(sum<21){
        message="Do you want to draw a new card?"
    }
    else if(sum===21){
        message="Wohoo! You've got Blackjack!"
        hasBlackJack=true
    }
    else if (sum > 21) {
        message="You're out of the game!"
        isAlive=false
    }
    messageEl.textContent = message
}

function newCard(){
console.log("Drawing a new card from the deck")

if(isAlive===true && hasBlackJack===false ){
    let card=getRandomCard()
    sum+=card
    
    cards.push(card)
    renderGame() 
}
}
let player = {
    name: "Ash",
    chips: 145
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips








