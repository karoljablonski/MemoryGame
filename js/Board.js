import Card from './Card.js';

export default class Board{
    constructor(numberOfCards){
        this.numberOfCards = numberOfCards
        this.boardWrapper = document.querySelector("div.board_wrapper");
    }
    createBoard(){
        for (let i = 0; i < this.numberOfCards; i++){
            const card = new Card(i, "div", "card");
            this.boardWrapper.appendChild(card.createDocumentElement());
        }
    }
    getColoursArray(){
        const colours = [
            "red", 
            "green", 
            "blue", 
            "white", 
            "black", 
            "yellow", 
            "aqua", 
            "purple", 
            "darkkhaki", 
            "darkorange"
        ];
        return colours;
    }
    cardsArray(numberOfCards){
        const cardsArray = [];
        for(let i = 0; i < numberOfCards; i++){
            cardsArray.push(i);
        };
        return cardsArray;
    }
    setColoursOnCards(numberOfCards){
        const hereIsMyArray = this.cardsArray(numberOfCards);
        for(let i = 0; i < numberOfCards/2; i++){
            const actualColour = this.getColoursArray()[i];
            for(let j = 0; j < 1; j++){
                const draw = Math.floor(Math.random()*hereIsMyArray.length);
                const arrayIndexToDelete = hereIsMyArray[draw];
                hereIsMyArray.splice(draw, 1);
                document.querySelector(`div.card[data-index='${arrayIndexToDelete}']`).style.background = actualColour;
                for(let k = 0; k < 1; k++){
                    const draw2 = Math.floor(Math.random()*hereIsMyArray.length);
                    const arrayIndexToDelete2 = hereIsMyArray[draw2];
                    hereIsMyArray.splice(draw2, 1);
                    document.querySelector(`div.card[data-index='${arrayIndexToDelete2}']`).style.background = actualColour;
                }
            }
        }
    }
    createCardsCovers(){
        const cardCovers = document.querySelectorAll("div.covered");
        const cardCoversArray = [...cardCovers];
        const uncoveredCardsArray = [];
        cardCovers.forEach((cardCover, index)=>{
            cardCover.addEventListener("click", this.newMethod(uncoveredCardsArray, cardCovers, index, cardCover, cardCoversArray))
        })
    }

    newMethod(uncoveredCardsArray, cardCovers, index, cardCover, cardCoversArray) {
        return function game() {
            uncoveredCardsArray.push(cardCovers[index]);
            cardCover.style.backgroundColor = "transparent";
            const checkedHowManyTransparent = cardCoversArray.filter((item) => item.style.backgroundColor === "transparent");
            //ponizej mamy wlaczone dwa cardy:
            if (checkedHowManyTransparent.length == 2) {
                const firstCardColour = uncoveredCardsArray[0].parentElement.style.backgroundColor;
                const secondCardColour = uncoveredCardsArray[1].parentElement.style.backgroundColor;
                if (firstCardColour === secondCardColour) {
                    setTimeout(() => {
                        uncoveredCardsArray.forEach(i =>{
                            i.parentElement.classList.remove("card");
                            i.parentElement.style.backgroundColor = "var(--background)";
                        })
                        uncoveredCardsArray.forEach(i => i.style.backgroundColor = "var(--background)");
                        uncoveredCardsArray.splice(0, 2);
                        return;
                    }, 500);
                } else {
                    //block uncovering other cards;
                    setTimeout(() => {
                        cardCovers.forEach(item => item.style.backgroundColor = "grey");
                        uncoveredCardsArray.splice(0, 2);
                    }, 400);
                }
            } else if (checkedHowManyTransparent.length > 2) {
                uncoveredCardsArray.splice(0, 2);
            }
        };
    }
}