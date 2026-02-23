let cardsEl=document.getElementById("cards-el")
let sumEl=document.getElementById("sum")
let ans=document.getElementById("message")
function randomcard(){
    return Math.floor(Math.random()*13)+1
}
let card=[]
let firstCard=randomcard()
let secondCard=randomcard()
card=[firstCard,secondCard]
let sum=firstCard+secondCard
let hasAlive=true
let blackCard=false
let message=""
function startgame(){
    return rendorgame()
}
function rendorgame(){
    if(sum===21){
        message="You Won the Game! 🥳🥳😎 "
    }
    else if(sum>21){
        message="You are Out of the Game! 😔😭🫂"
        blackCard=true
    }
    else{
        message="You take new Card! 🤦‍♀️🔄🙌🏻"
        hasAlive=true
    }
    
console.log(message)
cardsEl.textContent="Cards: "+card
sumEl.textContent="Sum: "+sum 
ans.textContent=message
}

function newcard(){
    if(blackCard===false && hasAlive===true){
        let cards=randomcard()
        sum+=cards
        card.push(cards)
        rendorgame()
    }
}