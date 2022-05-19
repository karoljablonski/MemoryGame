import Board from './Board.js'

export default class Game{
    static startGame(numberOfCards){
        console.log("start gry.")
        // this.style.display = "none";
        const board = new Board(numberOfCards);
        board.createBoard(); //creates cards, and append them to DOM
        board.setColoursOnCards(numberOfCards);
        board.cardsArray();
        board.createCardsCovers();
    }
}