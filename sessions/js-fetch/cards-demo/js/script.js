import {CardsDisplay} from "../components/CardsDisplay/CardsDisplay.js"
import { Button } from "../components/Button/Button.js"

const main = document.querySelector('main')

console.log(main)

const cardsDisplay = CardsDisplay()
const play = Button("Play")

main.append(cardsDisplay, play)


play.addEventListener("click",async function(){
    
    try {
        
        const response = await fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=2')
    
        if(response.ok){
            const data = await response.json()
            
            const cards = data.cards
            
            console.log(cards)
    
            let cardSet="";
    
            cards.forEach(card => {
                cardSet+=`<img src=${card.image} />`
            });
    
            console.log(cardSet)
    
        cardsDisplay.innerHTML = cardSet        
    }
    } catch (error) {
        console.error(error)
    }
})